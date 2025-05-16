import { useEffect, useRef } from 'react';
import ParallaxBackground from './ParallaxBackground';

export default function Hero() {
  const beerIconRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // 添加平滑滚动函数
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // 添加下载演示效果
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // 创建一个临时按钮来模拟下载
    const downloadButton = document.createElement('a');
    downloadButton.href = '/demo-app.zip'; // 这里可以替换为实际的下载链接
    downloadButton.download = '四只猫餐饮系统演示.zip';
    downloadButton.style.display = 'none';
    
    // 添加到DOM并触发点击
    document.body.appendChild(downloadButton);
    
    // 创建提示元素
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50';
    notification.innerHTML = '演示版本正在准备下载，请稍候...';
    document.body.appendChild(notification);
    
    // 2秒后执行下载并移除提示
    setTimeout(() => {
      try {
        downloadButton.click();
      } catch (error) {
        console.error('下载失败', error);
      } finally {
        document.body.removeChild(downloadButton);
        notification.innerHTML = '下载已开始，感谢您的体验！';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 3000);
      }
    }, 2000);
  };

  useEffect(() => {
    // 气泡效果添加到底部
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add('bubble-container');
    }

    // 为啤酒图标添加浮动效果
    const beerIcon = beerIconRef.current;
    if (beerIcon) {
      beerIcon.classList.add('animate-floating');
    }
  }, []);

  return (
    <div id="download" ref={heroRef} className="bg-gradient-to-b from-white to-cream pt-16 relative overflow-hidden">
      <ParallaxBackground className="absolute inset-0 w-full h-full">
        <div className="container-custom py-8 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left slide-up stagger-item">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">
                <span className="block">精酿餐饮</span>
                <span className="block text-secondary text-shimmer">管理系统</span>
              </h1>
              <p className="mt-2 text-base text-gray-500 sm:mt-4 sm:text-lg sm:max-w-xl lg:mx-0 slide-up stagger-item">
                专为精酿酒吧与餐厅设计的全功能管理系统，让您的业务运营更加高效、智能与便捷。
              </p>
              <ul className="mt-4 text-sm text-gray-600 sm:mt-4 grid grid-cols-2 gap-2 md:gap-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  精酿啤酒管理
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  库存实时跟踪
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  会员积分系统
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  数据分析报表
                </li>
              </ul>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-up stagger-item">
                <a
                  href="#download"
                  onClick={handleDownload}
                  className="btn btn-secondary shadow-lg shadow-secondary/20 transform hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  立即体验
                </a>
                <a 
                  href="#features" 
                  onClick={(e) => scrollToSection(e, '#features')}
                  className="btn btn-outline hover:bg-gray-50 active:bg-gray-100 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200"
                >
                  了解更多
                </a>
              </div>
            </div>
            <div className="relative lg:mt-0 slide-left">
              <div className="relative mx-auto w-full rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                <div className="relative bg-gray-800 rounded-t-xl h-12 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="bg-gray-700 h-[350px] sm:h-[400px] flex items-center justify-center group cursor-pointer hover:bg-gray-600 transition-all duration-300">
                  <div className="text-center text-gray-400 group-hover:text-gray-200 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                    <p className="mt-4 text-sm font-medium">精酿版餐饮管理系统</p>
                    <p className="text-xs mt-2">专为精酿酒吧设计的智能化解决方案</p>
                    <p className="opacity-0 group-hover:opacity-100 text-xs mt-4 py-1 px-3 bg-secondary/10 text-secondary inline-block rounded-full transition-all duration-300">点击查看演示</p>
                  </div>
                </div>
              </div>
              <div ref={beerIconRef} className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-amber" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M368 96h-48V56c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24v40h-48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM216 56h80v40h-80V56zm48 399.9c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBackground>
      
      {/* 装饰元素 */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-amber/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 right-12 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
} 