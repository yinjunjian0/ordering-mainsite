import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { animateOnScroll, createStaggeredAnimation } from './utils/animation';

function App() {
  // 初始化全局动画效果
  useEffect(() => {
    // 页面滚动时的渐入动画
    const cleanupFuncs = [
      // 通用标题动画
      animateOnScroll('h1, h2, h3.section-title', 'animate-fade-in animate-slide-up', { 
        threshold: 0.3 
      }),
      
      // 段落文本动画
      animateOnScroll('p.animate-text', 'animate-fade-in', { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }),
      
      // 按钮动画
      animateOnScroll('.btn', 'animate-fade-in animate-slide-up', {
        threshold: 0.5,
        rootMargin: '0px 0px -30px 0px'
      }),
      
      // 卡片和图像动画
      animateOnScroll('.card, .image-container', 'animate-fade-in', {
        threshold: 0.1
      }),
      
      // 创建交错动画效果
      createStaggeredAnimation('.stagger-item', {
        animation: 'animate-fade-in animate-slide-up',
        staggerDelay: 100,
        baseDelay: 100
      })
    ];
    
    // 清理函数
    return () => {
      cleanupFuncs.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
