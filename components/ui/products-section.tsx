"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Code, Image, Mic, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const products = [
  {
    title: "AI聚合站",
    description: "对话、绘画、视频、文档理解 一站式创作工作台，聚合 10+ 国际主流模型，多模态协同高效产出。",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-600",
    href: "/products/mirror",
    badge: "会员热选",
    tip: "无次数限制",
    features: ["GPT-5.2", "Claude-4.5", "Gemini-3-Pro","Nona-Banana-Pro","Sora-2","Midjourney"]
  },
  {
    title: "统一API网关",
    description: "一个API Key，接入所有主流模型，支持Claude Code、Codex 等，按量计费，灵活扩展。",
    icon: Code,
    color: "from-violet-500 to-purple-600",
    href: "/products/api-gateway",
    badge: "开发者首选",
    tip: "按Token量计费",
    features: ["200+模型", "随充随用", "适配多种第三方平台", "不会写代码也能使用", "余额永不过期", "大额优惠"]
  },
  {
    title: "ChatGPT官方代充",
    description: "安全快捷的ChatGPT Plus/Team官方订阅代充服务，支持企业批量购买，提供发票。",
    icon: Image,
    color: "from-pink-500 to-rose-600",
    href: "/products/recharge",
    badge: "正规订阅",
    tip: "全网低价",
    features: ["Plus仅需¥140", "官方订阅",  "在线自助邀请系统", "发票支持", "全程质保服务"]
  },
  {
    title: "ChatGPT镜像系统",
    description: "国内直连ChatGPT官网镜像，无需魔法上网，享受官网的AI对话体验，具备完整的隐私隔离机制。",
    icon: Mic,
    color: "from-blue-500 to-cyan-600",
    href: "/products/mirror-system",
    badge: "预售中",
    tip: "即将上线",
    features: ["国内直连", "隐私保护", "官网体验"]
  },
];

export function ProductsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4"
          >
            覆盖全场景的AI应用服务
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground"
          >
            围绕多元化的AI使用需求，提供一站式解决方案
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  {/* Badge - Moved outside card */}
                  {product.badge && (
                    <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 z-10">
                      <Badge variant="outline" className={`bg-gradient-to-r ${product.color} text-white border-0 shadow-lg text-xs`}>
                        <Star className="w-3 h-3 mr-1" />
                        {product.badge}
                      </Badge>
                    </div>
                  )}

                  <Link href={product.href} className="block">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/50 bg-card p-6 sm:p-8 transition-all hover:border-border hover:shadow-xl hover:shadow-primary/5">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${product.color}`} />

                      {/* Content */}
                      <div className="relative space-y-4 sm:space-y-6">
                        {/* Icon & Tip */}
                        <div className="flex items-start justify-between gap-3">
                          <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${product.color} shadow-lg`}>
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          {product.tip && (
                            <Badge variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                              {product.tip}
                            </Badge>
                          )}
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                            {product.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        {/* Features */}
                        {product.features && (
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-muted/50 text-foreground/80 border border-border/50"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Link */}
                        <div className="pt-2">
                          <span className="group/btn inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                            了解详情
                            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        
      </div>
    </section>
  );
}
