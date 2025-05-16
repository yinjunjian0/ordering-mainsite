import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: '功能', href: '#features' },
  { name: '套餐', href: '#pricing' },
  { name: '企业版', href: '#enterprise' },
  { name: '案例', href: '#testimonials' },
];

export default function Navbar() {
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

  return (
    <Disclosure as="nav" className="bg-white shadow-sm fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="container-custom">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <a 
                    href="#" 
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <span className="h-8 w-8 rounded-full bg-amber-light flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-dark" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v.586l1.707 1.707a1 1 0 010 1.414l-1 1a1 1 0 01-1.414 0L9 7.414V5a1 1 0 011-2z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6.5 5a3.5 3.5 0 115.262 3.034l1.53 1.53a1 1 0 01-1.414 1.414l-1.53-1.53A3.5 3.5 0 016.5 5zm0 2a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-xl font-bold text-gray-900">四只猫</span>
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-secondary hover:border-secondary transition-all duration-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <a 
                  href="#download" 
                  onClick={(e) => scrollToSection(e, '#download')}
                  className="btn btn-secondary transform hover:scale-105 transition-transform duration-200"
                >
                  立即体验
                </a>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">打开主菜单</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-secondary active:bg-gray-100 transition-all duration-200"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center justify-center px-4">
                <a 
                  href="#download" 
                  onClick={(e) => scrollToSection(e, '#download')}
                  className="btn btn-secondary text-sm w-full text-center transform hover:scale-105 active:scale-95 transition-transform duration-200"
                >
                  立即体验
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 