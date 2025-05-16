import React from 'react';

const navigation = {
  product: [
    { name: '功能', href: '#features' },
    { name: '套餐', href: '#pricing' },
    { name: '企业版', href: '#enterprise' },
    { name: '应用场景', href: '#features' },
    { name: '下载', href: '#download' },
  ],
  support: [
    { name: '文档', href: '#' },
    { name: '指南', href: '#' },
    { name: '帮助中心', href: '#' },
    { name: '常见问题', href: '#' },
    { name: '联系我们', href: '#enterprise' },
  ],
  company: [
    { name: '关于我们', href: '#' },
    { name: '博客', href: '#' },
    { name: '招聘', href: '#' },
    { name: '合作伙伴', href: '#' },
  ],
  legal: [
    { name: '隐私政策', href: '#' },
    { name: '使用条款', href: '#' },
    { name: '安全', href: '#' },
  ],
  social: [
    {
      name: 'WeChat',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.586 9.829c-.368 0-.667.3-.667.667s.299.667.667.667.667-.3.667-.667-.299-.667-.667-.667zm6.798 0c-.368 0-.667.3-.667.667s.299.667.667.667.667-.3.667-.667-.299-.667-.667-.667zm-5.873 3.4c-.209 0-.417.044-.607.131-.459.207-.805.61-.938 1.101-.134.5-.04 1.043.257 1.455.09.122.194.229.311.317.103.079.219.145.34.196.219.93.458.143.702.143.477 0 .918-.174 1.255-.462.078-.76.158-.151.227-.239.161-.204.284-.459.335-.723.111-.542-.038-1.115-.389-1.488-.369-.395-.9-.631-1.493-.631zm2.985 0c-.21 0-.417.044-.607.131-.459.207-.805.61-.938 1.101-.134.5-.04 1.043.258 1.455.09.122.194.229.311.317.103.079.219.145.34.196.219.93.457.143.701.143.477 0 .918-.174 1.255-.462.078-.76.158-.151.227-.239.161-.204.284-.459.335-.723.111-.542-.038-1.115-.389-1.488-.369-.395-.9-.631-1.493-.631zm7.038-6.362c.138.244.224.507.278.78.055.272.062.557 0 .828-.042.196-.121.388-.22.564-.068.118-.147.232-.24.332-.217.236-.496.404-.803.5-.321.098-.663.101-.989.025-.335-.079-.653-.23-.957-.409-.22-.132-.426-.279-.63-.433-.466-.368-.956-.697-1.483-.919-.543-.228-1.124-.36-1.708-.409-.445-.037-.891-.027-1.336.008-.214.016-.429.037-.642.068-.511.072-1.01.203-1.491.387-.464.177-.91.407-1.313.695-.4.285-.756.628-1.032 1.023-.277.397-.472.848-.549 1.327-.107.661.011 1.342.247 1.969.215.59.551 1.124.992 1.567.524.523 1.164.924 1.864 1.17.736.257 1.516.359 2.297.409.416.027.833.029 1.247.002 1.482-.096 2.913-.589 4.162-1.343.245-.149.486-.311.713-.487.279-.216.541-.45.787-.698.508-.507.955-1.077 1.297-1.703.166-.31.309-.628.415-.964.044-.137.071-.276.097-.417.025-.141.037-.282.048-.425.008-.1.012-.199.016-.299.002-.066.001-.132.001-.199 0-1.106-.455-1.844-1.183-2.447-.742-.614-1.765-.945-2.685-1.048-.4-.045-.798-.05-1.198-.021-.401.028-.799.087-1.184.196-.777.22-1.49.637-2.028 1.229-.155.17-.297.35-.425.539-.125.188-.237.387-.327.593-.268.62-.374 1.311-.279 1.985.083.597.307 1.176.651 1.676.343.499.795.921 1.313 1.239.518.317 1.104.523 1.705.618-.281-.161-.514-.393-.683-.676-.173-.29-.276-.63-.279-.975-.008-.479.197-.954.499-1.28.307-.329.733-.536 1.174-.573.35-.029.711.041 1.015.244.302.2.541.511.671.877.002-.005.003-.009.005-.014.056-.197.029-.408-.059-.592-.096-.2-.267-.356-.462-.452-.204-.1-.435-.133-.655-.11-.221.024-.435.109-.616.239-.151.109-.275.249-.371.407-.043.07-.081.143-.107.225.013-.46.022-.92.027-.138.028-.196.022-.398.074-.594.048-.181.116-.349.222-.494.12-.165.291-.3.479-.382.356-.154.771-.144 1.13-.001.182.071.348.185.48.330.134.147.233.327.291.521.059.195.076.403.052.604-.027.202-.097.397-.208.567-.149.235-.37.422-.621.543-.251.12-.539.172-.822.144-.284-.027-.56-.135-.781-.311-.221-.176-.389-.419-.483-.692.014.299.114.599.294.842.185.25.441.438.732.538.313.11.656.119.977.028.322-.091.618-.281.836-.537.216-.254.354-.579.387-.918.036-.345-.039-.7-.212-.996-.139-.238-.334-.442-.564-.598-.237-.16-.506-.272-.787-.329-.297-.059-.608-.058-.905.003-.257.054-.504.153-.729.284-.116.067-.227.142-.332.225-.056.045-.111.093-.162.145-.063.063-.122.13-.177.202-.081.104-.156.215-.22.331-.068.122-.128.248-.178.378-.048.126-.085.256-.114.387-.028.13-.047.262-.058.396-.019.223-.014.447.013.669.022.219.07.437.142.644.077.217.181.423.309.61z" />
        </svg>
      ),
    },
    {
      name: 'Weibo',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M10.098 20c-3.204 0-5.598-1.893-5.598-4.546 0-2.371 1.414-3.965 5.147-4.874 3.732-.909 3.961-1.624 3.961-2.758 0-1.251-1.551-1.479-2.301-1.479-.751 0-1.878.195-1.878 1.307 0 .474.238.89.238.89s-.952.177-1.371.177c-.179 0-.419-.022-.638-.067-.215-.044-.462-.456-.462-1.022 0-1.573 2.142-2.679 4.111-2.679 1.97 0 4.492.754 4.492 3.174 0 2.511-2.181 3.106-4.085 3.716-1.903.611-3.137.909-3.137 2.101 0 1.192 1.355 1.706 2.283 1.706.928 0 1.805-.173 1.805-1.134 0-.474-.137-.73-.137-.73h1.667s.093.961.093 1.134c0 1.706-2.189 2.084-3.19 2.084zm6.31-15c-1.001 0-1.94.463-2.537 1.255-.593.79-.916 1.846-.916 3.018h.906c0-.929.259-1.764.731-2.392.474-.627 1.124-.973 1.816-.973 1.489 0 2.522 1.132 2.522 3.365h.911c0-1.301-.266-2.339-.797-3.089-.531-.748-1.281-1.184-2.234-1.184h-.402z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  // 添加平滑滚动函数
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      // 展示提示信息
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 left-1/2 transform -translate-x-1/2 bg-amber-100 border border-amber-400 text-amber-700 px-4 py-3 rounded z-50';
      notification.innerHTML = '此功能正在开发中，敬请期待！';
      document.body.appendChild(notification);

      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // 显示社交媒体二维码
  const showQRCode = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
    e.preventDefault();
    
    // 创建QR码弹窗
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    
    const content = document.createElement('div');
    content.className = 'bg-white p-6 rounded-lg shadow-xl max-w-xs w-full text-center transform transition-all';
    
    const title = document.createElement('h3');
    title.className = 'text-lg font-medium text-gray-900 mb-4';
    title.textContent = name === 'WeChat' ? '微信官方账号' : '微博官方账号';
    
    const qrPlaceholder = document.createElement('div');
    qrPlaceholder.className = 'w-48 h-48 bg-gray-200 mx-auto rounded-md flex items-center justify-center mb-4';
    
    const qrText = document.createElement('p');
    qrText.className = 'text-gray-500 text-sm';
    qrText.textContent = '扫码关注我们';
    qrPlaceholder.appendChild(qrText);
    
    const closeButton = document.createElement('button');
    closeButton.className = 'mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-white hover:bg-secondary-dark focus:outline-none';
    closeButton.textContent = '关闭';
    closeButton.onclick = () => document.body.removeChild(overlay);
    
    content.appendChild(title);
    content.appendChild(qrPlaceholder);
    content.appendChild(closeButton);
    overlay.appendChild(content);
    
    document.body.appendChild(overlay);
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        页脚
      </h2>
      <div className="container-custom pt-16 pb-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center group"
              >
                <span className="h-10 w-10 rounded-full bg-amber-light flex items-center justify-center group-hover:bg-amber group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-dark" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v.586l1.707 1.707a1 1 0 010 1.414l-1 1a1 1 0 01-1.414 0L9 7.414V5a1 1 0 011-2z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.5 5a3.5 3.5 0 115.262 3.034l1.53 1.53a1 1 0 01-1.414 1.414l-1.53-1.53A3.5 3.5 0 016.5 5zm0 2a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-xl font-bold text-white group-hover:text-amber-light transition-colors duration-300">四只猫</span>
              </a>
            </div>
            <p className="text-base text-gray-400">
              专业的精酿酒吧与餐厅管理系统，让每一滴精酿都有故事，每一餐都有体验。
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => showQRCode(e, item.name)}
                  className="text-gray-400 hover:text-amber-light transform hover:scale-110 transition-all duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">产品</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)} 
                        className="text-sm leading-6 text-gray-300 hover:text-white relative group"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-light group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">支持</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="text-sm leading-6 text-gray-300 hover:text-white relative group"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-light group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">公司</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="text-sm leading-6 text-gray-300 hover:text-white relative group"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-light group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">法律</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="text-sm leading-6 text-gray-300 hover:text-white relative group"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-light group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-xs leading-5 text-gray-400">&copy; 2025 四只猫科技. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
} 