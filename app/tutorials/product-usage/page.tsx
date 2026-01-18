"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, Sparkles, Code, Globe, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const products = [
  {
    icon: Sparkles,
    title: "AI聚合站",
    description: "多模态AI创作平台，集成对话、绘画、视频、PPT等功能。",
    features: [
      "支持GPT-5、Claude-4.5、Gemini-3-Pro等多个主流模型",
      "对话支持上下文记忆、文件上传、联网搜索",
      "图像生成支持Midjourney、Nano-banana等模型",
      "视频创作支持Sora等前沿模型",
      "AI PPT自动生成大纲和内容",
      "一个账号管理所有模型访问",
    ],
    tips: [
      "切换模型前先了解各模型的特点",
      "使用文件上传功能提高对话效率",
      "合理使用深度思考模式获得更好结果",
    ],
  },
  {
    icon: Code,
    title: "API网关",
    description: "统一的大模型API接口，支持50+国际主流模型。",
    features: [
      "OpenAI兼容的API接口，无缝对接",
      "支持流式和非流式响应",
      "自动负载均衡和故障转移",
      "详细的调用日志和统计",
      "灵活的计费方式，按量付费或套餐包",
      "支持私有化部署和专线接入",
    ],
    tips: [
      "合理设置超时时间避免资源浪费",
      "使用流式响应提升用户体验",
      "定期查看调用统计优化成本",
    ],
  },
  {
    icon: Globe,
    title: "镜像系统",
    description: "ChatGPT官方镜像，提供原生体验和完整功能。",
    features: [
      "100%还原ChatGPT官方界面",
      "支持GPT-5系列顶级模型",
      "完整GPTs生态支持",
      "代码解释器和数据分析",
      "会员不限次数使用",
      "国内网络直连，无需翻墙",
    ],
    tips: [
      "善用GPTs生态提高工作效率",
      "利用代码解释器处理数据任务",
      "订阅会员获得更好的使用体验",
    ],
  },
  {
    icon: CreditCard,
    title: "官方代充",
    description: "ChatGPT Plus、API额度等官方服务代充。",
    features: [
      "支持ChatGPT Plus会员代充",
      "API额度充值，多种面额可选",
      "快速到账，7x24小时服务",
      "支持企业批量采购",
      "提供使用说明和技术支持",
      "可开具正规发票",
    ],
    tips: [
      "提前规划额度使用避免中断",
      "大额采购可联系客服获得优惠",
      "保管好账号信息确保安全",
    ],
  },
];

export default function ProductUsagePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
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

        <section className="relative pt-16 pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-500"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                产品使用指南
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                全面掌握产品功能
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                深入了解每个产品的特色功能和最佳使用方式，充分发挥AI的潜力
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl space-y-16">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-purple-500" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{product.title}</h3>
                          <p className="text-sm text-muted-foreground">{product.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="font-semibold mb-3">核心功能</h4>
                          <ul className="space-y-2">
                            {product.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-sm">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">使用技巧</h4>
                          <ul className="space-y-3">
                            {product.tips.map((tip) => (
                              <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-purple-500 font-semibold">💡</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold">获取更多帮助</h2>
              <p className="text-muted-foreground">
                如需了解更多产品细节或遇到使用问题，请查看其他教程或联系我们
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/tutorials/quick-start"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  快速开始
                </Link>
                <Link
                  href="/tutorials/troubleshooting"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                >
                  故障排查
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
