import React, { useEffect } from 'react';
import { initScrollAnimations, createBubbleEffect } from '../utils/animation';

// 控制全站动画效果的组件
const AnimationController: React.FC = () => {
  useEffect(() => {
    // 初始化滚动动画
    initScrollAnimations();

    // 为特定容器添加气泡效果
    const bubbleContainers = document.querySelectorAll('.bubble-container');
    bubbleContainers.forEach(container => {
      createBubbleEffect(container as HTMLElement);
    });

    // 添加平滑滚动处理函数
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // 检查点击的是否是内部锚链接
      if (target.tagName === 'A') {
        const link = target as HTMLAnchorElement;
        const href = link.getAttribute('href');
        
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    // 添加全局点击事件监听器
    document.addEventListener('click', handleLinkClick);

    // 离开页面时清理
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // 这是一个纯逻辑组件，不渲染任何内容
  return null;
};

export default AnimationController; 