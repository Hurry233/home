"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import { BookOpen, Code, Shield, Settings, AlertCircle, Rocket, Key } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const tutorials = [
  {
    icon: Rocket,
    title: "快速开始",
    description: "从零开始，快速了解并使用我们的AI服务平台，包括注册、登录、基本操作等。",
    href: "/tutorials/quick-start",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Code,
    title: "API对接指南",
    description: "详细的API文档和集成指南，帮助开发者快速接入大模型API服务。",
    href: "/tutorials/api-integration",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Key,
    title: "便捷使用API Key",
    description: "在第三方平台快速配置GPTW API Key，并通过图片与视频了解多模型对话效果。",
    href: "/tutorials/api-key-usage",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: BookOpen,
    title: "产品使用指南",
    description: "深入了解各产品功能和使用技巧，包括AI聚合站、API网关、镜像系统等。",
    href: "/tutorials/product-usage",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Shield,
    title: "安全最佳实践",
    description: "了解如何安全地使用AI服务，保护数据隐私和API密钥安全。",
    href: "/tutorials/security-best-practices",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: AlertCircle,
    title: "故障排查指南",
    description: "常见问题解答和故障排查步骤，帮助您快速解决使用过程中遇到的问题。",
    href: "/tutorials/troubleshooting",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Settings,
    title: "高级配置",
    description: "探索高级功能和配置选项，充分发挥平台的强大能力。",
    href: "/tutorials/advanced-config",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
];

export default function TutorialsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        {/* Hero */}
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                使用教程
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                全面的使用教程与指南
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                从基础到高级，帮助您充分利用AI大模型服务平台的强大功能
              </motion.p>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tutorials.map((tutorial, index) => {
                  const Icon = tutorial.icon;
                  return (
                    <motion.div
                      key={tutorial.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <Link href={tutorial.href}>
                        <Card className="p-6 h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                          <div className="flex flex-col space-y-4">
                            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${tutorial.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className={`h-7 w-7 ${tutorial.color}`} />
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                              {tutorial.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {tutorial.description}
                            </p>
                            <div className="flex items-center text-primary text-sm font-medium pt-2">
                              查看教程
                              <svg
                                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                还有疑问？
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                如果您在使用过程中遇到任何问题，欢迎随时联系我们的技术支持团队
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-6"
                >
                  联系技术支持
                </a>
                <a
                  href="/products"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8 py-6"
                >
                  查看产品
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
