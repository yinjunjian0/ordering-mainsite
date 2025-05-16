import { CheckIcon } from '@heroicons/react/20/solid';
import { useEffect, useRef } from 'react';

const tiers = [
  {
    name: '精酿版',
    id: 'craft',
    price: '399',
    description: '专为精酿啤酒吧和特色餐厅设计的全功能版本',
    features: [
      '精酿啤酒管理系统',
      '批次与原料追踪',
      '啤酒风味数据库',
      '多渠道订单管理',
      '精酿活动策划工具',
      '会员积分与等级系统',
      '自定义报表与分析',
      '全天候技术支持',
    ],
    mostPopular: true,
  },
  {
    name: '通用版',
    id: 'standard',
    price: '299',
    description: '适合各类餐厅与小型酒吧的标准版本',
    features: [
      '基础餐饮管理系统',
      '库存与供应链管理',
      '标准订单处理',
      '基础会员管理',
      '支付系统集成',
      '基础数据报表',
      '工作日技术支持',
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tierRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // 初始化tierRefs数组
  useEffect(() => {
    tierRefs.current = tierRefs.current.slice(0, tiers.length);
  }, []);
  
  // 添加滚动动画效果
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            
            if (entry.target === sectionRef.current) {
              // 标题可见时的动画
              const title = sectionRef.current.querySelector('h1');
              const subtitle = sectionRef.current.querySelector('p');
              
              if (title) {
                title.classList.add('animate-fade-in');
              }
              
              if (subtitle) {
                subtitle.classList.add('animate-fade-in');
                subtitle.style.animationDelay = '200ms';
              }
              
              // 卡片依次显示
              tierRefs.current.forEach((tier, index) => {
                if (tier) {
                  setTimeout(() => {
                    tier.classList.add('opacity-100');
                    tier.classList.add('translate-y-0');
                  }, 300 + index * 200);
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
    
    tierRefs.current.forEach(tier => {
      if (tier) {
        observer.observe(tier);
      }
    });
    
    return () => observer.disconnect();
  }, []);

  // 处理购买或试用点击
  const handlePricingClick = (tier: string, action: string) => {
    // 创建模态对话框
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 opacity-0 transition-opacity duration-300';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'bg-white p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all scale-95 opacity-0';
    
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'text-lg font-medium text-gray-900 mb-4';
    modalTitle.textContent = action === 'purchase' ? `选择了${tier}套餐` : `开始试用${tier}套餐`;
    
    const modalText = document.createElement('p');
    modalText.className = 'text-sm text-gray-500 mb-6';
    modalText.textContent = action === 'purchase' 
      ? '感谢您选择我们的服务！我们的销售团队将很快与您联系，为您提供专属方案。' 
      : '您的30天免费试用已开始，我们已经向您发送了操作指南电子邮件。';
    
    const modalButton = document.createElement('button');
    modalButton.className = 'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-white hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary';
    modalButton.textContent = '确定';
    modalButton.onclick = () => {
      modalContent.classList.remove('scale-100', 'opacity-100');
      modalContent.classList.add('scale-95', 'opacity-0');
      modalOverlay.classList.remove('opacity-100');
      
      // 添加退出动画
      setTimeout(() => {
        document.body.removeChild(modalOverlay);
      }, 300);
    };
    
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);
    modalContent.appendChild(modalButton);
    modalOverlay.appendChild(modalContent);
    
    document.body.appendChild(modalOverlay);
    
    // 添加进场动画
    requestAnimationFrame(() => {
      modalOverlay.classList.add('opacity-100');
      modalContent.classList.add('scale-100', 'opacity-100');
    });
  };

  return (
    <div id="pricing" className="relative bg-cream py-20 overflow-hidden" ref={sectionRef}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-amber/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="sm:align-center sm:flex sm:flex-col opacity-100 transition-opacity duration-700">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">套餐定价</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            无论您经营精酿特色酒吧还是传统餐厅，我们都有适合您的方案
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:max-w-4xl lg:mx-auto xl:mx-0 xl:max-w-none">
          {tiers.map((tier, idx) => (
            <div
              key={tier.id}
              ref={(el) => { tierRefs.current[idx] = el; }}
              className={`flex flex-col rounded-3xl border shadow-lg bg-white border-gray-200 p-8 hover:shadow-xl transition-all duration-500 opacity-100 transform ${
                tier.mostPopular ? 'border-secondary ring-2 ring-secondary hover:-translate-y-2' : 'hover:border-gray-300 hover:-translate-y-1'
              }`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  className={`text-lg font-semibold leading-8 ${
                    tier.mostPopular ? 'text-secondary' : 'text-gray-900'
                  }`}
                >
                  {tier.name}
                </h2>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-secondary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-secondary">
                    最受欢迎
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1 group">
                <span className="text-4xl font-bold tracking-tight text-gray-900 group-hover:scale-110 transition-transform duration-300">¥{tier.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/月</span>
              </p>
              <button
                onClick={() => handlePricingClick(tier.name, tier.mostPopular ? 'purchase' : 'trial')}
                className={`mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200 ${
                  tier.mostPopular
                    ? 'bg-secondary text-white hover:bg-secondary-dark active:bg-secondary-dark/90 focus-visible:outline-secondary transform hover:scale-105 active:scale-95'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-gray-600 transform hover:scale-105 active:scale-95'
                }`}
              >
                {tier.mostPopular ? '立即购买' : '开始试用'}
              </button>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature, featureIdx) => (
                  <li 
                    key={feature} 
                    className="flex gap-x-3 items-center opacity-100 transition-opacity duration-300"
                    style={{ animationDelay: `${featureIdx * 100}ms` }}
                  >
                    <CheckIcon 
                      className={`h-6 w-5 flex-none ${tier.mostPopular ? 'text-secondary' : 'text-primary'}`} 
                      aria-hidden="true" 
                    />
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center opacity-100 transition-opacity duration-700 transform translate-y-0" style={{ transitionDelay: '800ms' }}>
          <p className="text-base text-gray-500">
            需要更多定制化方案？
            <a 
              href="#enterprise" 
              className="font-medium text-secondary hover:text-secondary-dark ml-1 relative group"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#enterprise');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              联系我们的企业团队
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </a>。
          </p>
        </div>
      </div>
      
      {/* 悬浮装饰元素 */}
      <div className="hidden lg:block absolute top-40 left-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-amber/20 to-transparent blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
} 