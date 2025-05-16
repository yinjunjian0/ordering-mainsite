// 滚动相关的观察器设置
export const createScrollObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options = { threshold: 0.1 }
) => {
  if (typeof window === 'undefined') return null;
  return new IntersectionObserver(callback, options);
};

// 用于检测元素进入视口的工具函数
export const observeElements = (
  selector: string,
  classToAdd: string,
  observerOptions = { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
) => {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(classToAdd);
        observer.unobserve(entry.target); // 只触发一次
      }
    });
  }, observerOptions);

  // 选择所有匹配的元素并观察它们
  document.querySelectorAll(selector).forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

// 创建视差效果
export const createParallaxEffect = () => {
  if (typeof window === 'undefined') return;

  const parallaxElements = document.querySelectorAll('.parallax');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
      const offset = scrollY * speed;
      
      // 应用变换
      (element as HTMLElement).style.transform = `translateY(${offset}px)`;
    });
  };
  
  // 添加滚动事件监听
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // 初始化时调用一次
  handleScroll();
  
  // 返回清理函数
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// 滚动时为元素添加动画
export const initScrollAnimations = () => {
  if (typeof window === 'undefined') return;
  
  // 渐入动画元素
  observeElements('.fade-in', 'animate-fade-in');
  
  // 从下向上动画元素
  observeElements('.slide-up', 'animate-slide-up');
  
  // 从左向右动画元素
  observeElements('.slide-right', 'animate-slide-right');
  
  // 从右向左动画元素
  observeElements('.slide-left', 'animate-slide-left');
  
  // 缩放动画元素
  observeElements('.zoom-in', 'animate-zoom-in');
  
  // 创建视差效果
  createParallaxEffect();
};

// 浮动动画效果
export const applyFloatingAnimation = (element: HTMLElement, delayFactor = 0) => {
  if (!element) return;
  
  element.style.animation = `floating 3s ease-in-out ${delayFactor}s infinite`;
  element.style.position = 'relative';
};

// 启用精酿气泡效果
export const createBubbleEffect = (container: HTMLElement) => {
  if (!container) return;
  
  // 创建多个气泡
  for (let i = 0; i < 15; i++) {
    const bubble = document.createElement('div');
    
    const size = Math.random() * 20 + 5; // 5px到25px之间
    const posX = Math.random() * 100; // 0-100%
    const delay = Math.random() * 8; // 0-8s延迟
    const duration = Math.random() * 10 + 8; // 8-18s持续时间
    
    bubble.className = 'bubble absolute rounded-full bg-amber/20';
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${posX}%`;
    bubble.style.bottom = '0';
    bubble.style.animation = `bubble ${duration}s linear ${delay}s infinite`;
    
    container.appendChild(bubble);
  }
};

/**
 * 滚动触发动画工具
 * 用于在元素进入视口时触发动画效果
 */

interface AnimationOptions {
  threshold?: number;  // 触发阈值(0-1)，元素可见度达到这个比例时触发
  rootMargin?: string; // 调整观察区域边界
  once?: boolean;      // 是否只触发一次
}

/**
 * 为元素添加进入视口时的动画效果
 * @param selector CSS选择器或HTML元素
 * @param animation 要添加的动画类名 
 * @param options 配置选项
 */
export function animateOnScroll(
  selector: string | Element | Element[], 
  animation: string | ((el: Element, index: number) => void), 
  options: AnimationOptions = {}
): () => void {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    once: true,
  };

  const mergedOptions = { ...defaultOptions, ...options };
  
  // 获取目标元素
  let elements: Element[] = [];
  if (typeof selector === 'string') {
    elements = Array.from(document.querySelectorAll(selector));
  } else if (selector instanceof Element) {
    elements = [selector];
  } else if (Array.isArray(selector)) {
    elements = selector;
  }
  
  if (elements.length === 0) return () => {};
  
  // 创建观察器
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        
        // 应用动画
        if (typeof animation === 'function') {
          animation(el, idx);
        } else {
          // 添加动画类名，支持空格分隔的多个类名
          const classNames = animation.split(' ');
          classNames.forEach((className) => {
            el.classList.add(className);
          });
        }
        
        // 如果只触发一次，则停止观察
        if (mergedOptions.once) {
          observer.unobserve(el);
        }
      } else if (!mergedOptions.once) {
        // 如果不是只触发一次，元素离开视口时移除动画
        if (typeof animation === 'string') {
          const classNames = animation.split(' ');
          classNames.forEach((className) => {
            entry.target.classList.remove(className);
          });
        }
      }
    });
  }, {
    threshold: mergedOptions.threshold,
    rootMargin: mergedOptions.rootMargin,
  });
  
  // 开始观察所有元素
  elements.forEach((el) => {
    observer.observe(el);
  });
  
  // 返回清理函数
  return () => {
    observer.disconnect();
  };
}

/**
 * 创建交错动画，每个元素有延迟出现效果
 * @param selector CSS选择器或HTML元素
 * @param options 配置选项
 */
export function createStaggeredAnimation(
  selector: string | Element[],
  options: {
    animation: string;
    staggerDelay: number;
    baseDelay?: number;
    threshold?: number;
  }
): () => void {
  const { animation, staggerDelay, baseDelay = 0, threshold = 0.1 } = options;
  
  let elements: Element[] = [];
  if (typeof selector === 'string') {
    elements = Array.from(document.querySelectorAll(selector));
  } else {
    elements = selector;
  }
  
  return animateOnScroll(elements, (el, index) => {
    // 为每个元素添加不同的延迟
    const delay = baseDelay + (index * staggerDelay);
    (el as HTMLElement).style.animationDelay = `${delay}ms`;
    
    // 添加动画类名
    animation.split(' ').forEach(className => {
      el.classList.add(className);
    });
  }, { threshold });
}

/**
 * 添加视差滚动效果
 * @param selector 容器元素选择器
 * @param layers 要添加视差效果的层元素配置
 */
export function initParallaxEffect(
  selector: string,
  layers: Array<{ selector: string; speed: number; }>
): void {
  const container = document.querySelector(selector);
  if (!container) return;
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const containerRect = container.getBoundingClientRect();
    
    // 只在容器可见时计算视差效果
    if (
      containerRect.bottom > 0 && 
      containerRect.top < window.innerHeight
    ) {
      layers.forEach(({ selector, speed }) => {
        const layer = container.querySelector(selector) as HTMLElement | null;
        if (layer) {
          const yOffset = scrollPosition * speed;
          layer.style.transform = `translateY(${yOffset}px)`;
        }
      });
    }
  };
  
  // 初始计算并添加滚动事件
  handleScroll();
  window.addEventListener('scroll', handleScroll);
}

/**
 * 初始化鼠标视差效果
 * @param containerSelector 容器选择器
 * @param layersSelectors 层级元素配置，包括选择器和对应的移动强度
 */
export function initMouseParallax(
  containerSelector: string,
  layersConfig: Array<{ selector: string; strength: number; }>
): () => void {
  const container = document.querySelector(containerSelector) as HTMLElement | null;
  if (!container) return () => {};
  
  // 获取所有层级元素
  const layers = layersConfig.map(({ selector, strength }) => ({
    element: container.querySelector(selector) as HTMLElement | null,
    strength,
  })).filter(layer => layer.element) as {element: HTMLElement, strength: number}[];
  
  const handleMouseMove = (e: MouseEvent) => {
    const containerRect = container.getBoundingClientRect();
    
    // 计算鼠标在容器内的相对位置（-0.5到0.5范围）
    const relativeX = ((e.clientX - containerRect.left) / containerRect.width) - 0.5;
    const relativeY = ((e.clientY - containerRect.top) / containerRect.height) - 0.5;
    
    // 为每一层应用偏移
    layers.forEach(({ element, strength }) => {
      if (element) {
        const moveX = relativeX * strength;
        const moveY = relativeY * strength;
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });
  };
  
  // 添加鼠标移动事件监听
  container.addEventListener('mousemove', handleMouseMove as EventListener);
  
  // 返回清理函数
  return () => {
    container.removeEventListener('mousemove', handleMouseMove as EventListener);
  };
} 