import React, { useState, useEffect, useRef } from 'react';

export default function CallToAction() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // 添加滚动动画效果
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // 标题动画
          const heading = sectionRef.current?.querySelector('h2');
          if (heading) {
            heading.classList.add('animate-fade-in');
          }
          
          // 按钮动画，延迟出现
          const button = sectionRef.current?.querySelector('button');
          const link = sectionRef.current?.querySelector('a');
          
          if (button) {
            setTimeout(() => {
              button.classList.add('animate-fade-in', 'animate-slide-up');
            }, 300);
          }
          
          if (link) {
            setTimeout(() => {
              link.classList.add('animate-fade-in');
            }, 500);
          }
          
          // 整个卡片的动画
          const card = sectionRef.current?.querySelector('.bg-gradient-to-r');
          if (card) {
            card.classList.add('shadow-3xl');
          }
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // 模态框动画效果
  useEffect(() => {
    if (showModal && modalRef.current) {
      // 进场动画
      const modal = modalRef.current;
      
      // 先设置为透明
      modal.style.opacity = '0';
      modal.style.transform = 'scale(0.9)';
      
      // 然后过渡到可见
      setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
      }, 10);
    }
  }, [showModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // 3秒后关闭模态框
      setTimeout(() => {
        // 添加退出动画
        if (modalRef.current) {
          modalRef.current.style.opacity = '0';
          modalRef.current.style.transform = 'scale(0.9)';
          
          setTimeout(() => {
            setShowModal(false);
            setSubmitted(false);
            setFormData({ name: '', email: '', company: '', message: '' });
          }, 300);
        } else {
          setShowModal(false);
          setSubmitted(false);
          setFormData({ name: '', email: '', company: '', message: '' });
        }
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    // 添加退出动画
    if (modalRef.current) {
      modalRef.current.style.opacity = '0';
      modalRef.current.style.transform = 'scale(0.9)';
      
      setTimeout(() => {
        setShowModal(false);
      }, 300);
    } else {
      setShowModal(false);
    }
  };

  return (
    <div id="enterprise" className="bg-secondary py-16 overflow-hidden" ref={sectionRef}>
      <div className="container-custom relative">
        {/* 装饰元素 */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-amber/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary-dark/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between bg-gradient-to-r from-secondary to-amber rounded-3xl shadow-xl transition-all duration-500 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl opacity-0 transition-opacity duration-700">
            <span className="block">寻找企业定制方案？</span>
            <span className="block mt-2">与我们的团队联系</span>
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <button
              onClick={() => setShowModal(true)}
              className="rounded-md bg-white px-5 py-3 text-lg font-semibold text-secondary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transform hover:scale-105 active:scale-95 transition-all duration-200 opacity-0 btn-hover-effect"
            >
              预约演示
            </button>
            <a 
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#features');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }} 
              className="text-base font-semibold leading-6 text-white hover:text-cream transition-colors duration-200 group opacity-0"
            >
              了解更多 <span aria-hidden="true" className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* 模态框 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 fade-in">
          <div 
            ref={modalRef} 
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">预约产品演示</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-500 focus:outline-none transform hover:rotate-90 transition-transform duration-300"
              >
                <span className="sr-only">关闭</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8 animate-fade-in">
                <svg className="mx-auto h-12 w-12 text-green-500 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="mt-4 text-lg font-medium text-gray-900">提交成功!</p>
                <p className="mt-2 text-sm text-gray-500">我们的团队将尽快与您联系。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="stagger-item">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    姓名
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-2 border transition-all duration-200 hover:border-gray-400 focus:shadow-md"
                    placeholder="您的姓名"
                  />
                </div>
                <div className="stagger-item">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    邮箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-2 border transition-all duration-200 hover:border-gray-400 focus:shadow-md"
                    placeholder="您的邮箱"
                  />
                </div>
                <div className="stagger-item">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    公司名称
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-2 border transition-all duration-200 hover:border-gray-400 focus:shadow-md"
                    placeholder="您的公司名称"
                  />
                </div>
                <div className="stagger-item">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    留言
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-2 border transition-all duration-200 hover:border-gray-400 focus:shadow-md"
                    placeholder="想了解的内容"
                  ></textarea>
                </div>
                <div className="stagger-item">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-white hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'transform hover:scale-105 active:scale-95'}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        提交中...
                      </span>
                    ) : '提交'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 