import React, { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      
      const { left, top, width, height } = container.getBoundingClientRect();
      
      // 计算鼠标相对于容器的位置 (从中心点开始，范围 -0.5 到 0.5)
      const mouseX = ((e.clientX - left) / width) - 0.5;
      const mouseY = ((e.clientY - top) / height) - 0.5;
      
      // 为每个层应用不同的移动量
      layersRef.current.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute('data-depth') || '0.1');
        const moveX = mouseX * depth * 30;
        const moveY = mouseY * depth * 30;
        
        // 应用变换
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };
    
    // 初始化层引用
    if (containerRef.current) {
      layersRef.current = Array.from(containerRef.current.querySelectorAll('[data-depth]')) as HTMLDivElement[];
    }
    
    // 添加鼠标移动事件
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={containerRef} className={`parallax-container ${className}`}>
      {children}
      
      {/* 默认背景层 */}
      <div 
        data-depth="0.1"
        className="absolute inset-0 pointer-events-none transition-transform duration-200 ease-out z-0"
      >
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-amber/5 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      {/* 中层 */}
      <div 
        data-depth="0.2"
        className="absolute inset-0 pointer-events-none transition-transform duration-200 ease-out z-0"
      >
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-amber/20 blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-secondary/10 blur-xl"></div>
      </div>
      
      {/* 前景层 */}
      <div 
        data-depth="0.3"
        className="absolute inset-0 pointer-events-none transition-transform duration-200 ease-out z-0"
      >
        <div className="absolute top-40 left-20 w-10 h-10 rounded-full bg-amber-light/30 blur-sm"></div>
        <div className="absolute bottom-60 right-40 w-12 h-12 rounded-full bg-secondary/20 blur-lg"></div>
      </div>
    </div>
  );
};

export default ParallaxBackground; 