import { useRef, useEffect } from 'react'
import { BeakerIcon, BoltIcon, CursorArrowRippleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: '增强餐饮管理',
    description: '轻松管理餐饮业务，从预订到库存，全方位覆盖您的餐厅运营需求。',
    icon: CursorArrowRippleIcon,
  },
  {
    name: '数据分析洞察',
    description: '实时数据分析和报告，帮助您做出明智的业务决策，提升收入和客户满意度。',
    icon: BoltIcon,
  },
  {
    name: '精酿啤酒解决方案',
    description: '专为精酿啤酒爱好者设计，提供啤酒库存跟踪和品尝记录功能。',
    icon: BeakerIcon,
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // 初始化featureRefs数组
  useEffect(() => {
    featureRefs.current = featureRefs.current.slice(0, features.length);
  }, []);
  
  // 设置元素可见性检测
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            if (entry.target === sectionRef.current) {
              // 主标题可见时，逐个显示特性
              featureRefs.current.forEach((feature, index) => {
                if (feature) {
                  setTimeout(() => {
                    feature.classList.add('opacity-100');
                    if (index % 3 === 0) feature.classList.add('translate-y-0');
                    if (index % 3 === 1) feature.classList.add('translate-x-0');
                    if (index % 3 === 2) feature.classList.add('translate-y-0');
                  }, 300 * index);
                }
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    featureRefs.current.forEach(feature => {
      if (feature) {
        observer.observe(feature);
      }
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" ref={sectionRef}>
      {/* 装饰背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-primary opacity-10" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-amber opacity-10" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
        </div>
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center opacity-100 transition-opacity duration-1000 transform translate-y-0">
            <h2 className="text-base font-semibold text-amber uppercase tracking-wide">功能特性</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              为您的餐厅打造的强大功能
            </p>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              我们的餐厅管理系统提供全方位的解决方案，满足现代餐厅的各种需求。
            </p>
          </div>

          <div className="mt-12">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature, idx) => {
                // 设置基本样式类
                const featureClass = 'opacity-100';
                
                return (
                  <div 
                    key={feature.name} 
                    className={`pt-6 transition-all duration-700 transform ${featureClass}`}
                    ref={(el: HTMLDivElement | null) => { featureRefs.current[idx] = el; }}
                  >
                    <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow duration-300 h-full group">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-secondary rounded-md shadow-lg group-hover:bg-amber transition-colors duration-300">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                        <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* 浮动装饰元素 */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-40 h-40 transform translate-x-1/2 translate-y-1/2">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>
      <div className="hidden lg:block absolute top-1/4 left-0 w-20 h-20 transform -translate-x-1/2">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber to-yellow-500 opacity-20 animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>
    </div>
  )
} 