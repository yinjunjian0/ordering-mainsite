const testimonials = [
  {
    id: 1,
    content: '四只猫餐饮系统管理系统让我们的工作效率提升了至少两倍。酒品管理、原料追踪、销售分析一应俱全，是目前市面上最好的精酿酒吧管理系统。',
    name: '张明',
    role: '啤酒工坊',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    content: '在代码中使用四猫系统的一键补全功能，就像魔术一样，让我们的菜单管理和库存追踪变得轻而易举。',
    name: '李华',
    role: '精酿酒馆',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    content: '四猫餐饮系统带来了近年来我餐厅工作流程最大的提升。会员管理和预约功能特别出色。',
    name: '王芳',
    role: '餐酒馆',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    content: '我热爱精酿啤酒，而四猫系统让我们能专注于酿造，不必担心管理问题。它总是快我一步，预测下一步操作，让管理工作变得简单。',
    name: '陈强',
    role: '精酿工坊',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    content: '四猫系统表现非常出色，而且每隔几周就不断推出新功能，越来越好。特别是针对精酿酒吧的特殊功能，非常实用。',
    name: '赵雪',
    role: '特色餐厅',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    content: '四只猫餐饮系统系统太棒了！终于有一个专门为精酿酒吧设计的管理系统，让我们能更专注于创造美味的啤酒体验。',
    name: '刘伟',
    role: '精酿酿造厂',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          深受餐饮行业信赖
        </h2>
        <p className="mt-4 text-lg text-gray-500 text-center">
          来自全国各地精酿酒吧与特色餐厅的真实评价
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-xl shadow-md bg-white p-6 border border-gray-100">
              <p className="text-gray-500 text-sm line-clamp-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-secondary">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 