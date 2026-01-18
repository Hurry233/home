"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import { Rocket, ArrowLeft, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const steps = [
  {
    title: "注册账号",
    description: "访问我们的平台，点击注册按钮创建您的账号。填写基本信息并验证邮箱。",
    details: [
      "使用有效的电子邮箱地址注册",
      "设置强密码以保护账号安全",
      "完成邮箱验证激活账号",
    ],
  },
  {
    title: "选择服务",
    description: "根据您的需求选择合适的产品服务，我们提供AI聚合站、API网关、镜像系统等多种选择。",
    details: [
      "AI聚合站：适合需要多模态创作的用户",
      "API网关：适合开发者进行API集成",
      "镜像系统：适合需要ChatGPT原生体验的用户",
    ],
  },
  {
    title: "购买套餐",
    description: "选择适合您的付费套餐，我们提供月度、季度、年度多种选项。",
    details: [
      "查看不同套餐的功能对比",
      "选择合适的计费周期",
      "支持多种支付方式",
      "可开具增值税发票",
    ],
  },
  {
    title: "开始使用",
    description: "完成购买后，即可开始使用平台的各项功能。",
    details: [
      "登录到您的工作台",
      "熟悉界面和基本操作",
      "尝试创建您的第一个对话",
      "探索更多高级功能",
    ],
  },
];

const tips = [
  "建议先使用免费试用额度体验平台功能",
  "查看产品演示视频可以更快上手",
  "遇到问题可随时联系客服获取帮助",
  "定期查看我们的更新日志了解新功能",
];

export default function QuickStartPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        {/* Breadcrumb */}
        <section className="py-6 border-b border-border/40">
          <div className="container mx-auto px-4">
            <Link 
              href="/tutorials" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回教程列表
            </Link>
          </div>
        </section>

        {/* Hero */}
        <section className="relative pt-16 pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-500"
              >
                <Rocket className="mr-2 h-4 w-4" />
                快速开始
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                快速开始使用指南
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                这个指南将帮助您在几分钟内开始使用我们的AI大模型服务平台
              </motion.p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-8 hover:shadow-lg transition-shadow">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 font-bold text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-3">
                              <Check className="mt-0.5 h-5 w-5 text-blue-500 flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8">使用小贴士</h2>
                <Card className="p-8">
                  <ul className="space-y-4">
                    {tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                        </div>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold">下一步</h2>
              <p className="text-lg text-muted-foreground">
                继续探索更多教程，深入了解平台的强大功能
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link
                  href="/tutorials/product-usage"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  产品使用指南
                </Link>
                <Link
                  href="/tutorials/api-integration"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                >
                  API对接指南
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
