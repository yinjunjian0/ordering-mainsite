import React from 'react'
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
  return (
    <div id="features" className="relative py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-amber uppercase tracking-wide">功能特性</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            为您的餐厅打造的强大功能
          </p>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            我们的餐厅管理系统提供全方位的解决方案，满足现代餐厅的各种需求。
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-secondary rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 