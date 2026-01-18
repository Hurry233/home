"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Users, AlertTriangle } from "lucide-react";

const policies = [
  {
    title: "隐私安全保障",
    description: "具备隐私隔离机制，确保用户数据安全，包含数据脱敏、数据加密等安全措施。",
    icon: Shield,
  },
  {
    title: "用户价值导向",
    description: "坚持用户价值导向，以技术服务为核心，不断优化产品体验，为用户提供最好的AI对话体验。",
    icon: Users,
  },
  {
    title: "透明治理",
    description: "所有重大更新均发布详细的文档、系统卡片和对齐评估，确保透明治理。",
    icon: Scale,
  },
  {
    title: "安全合规",
    description: "平台所有AI服务均为学习交流使用，需遵守当地相关法律法规，严禁用于非法用途。",
    icon: AlertTriangle,
  },
];

export function SafetySection() {
  return (
    <section id="safety" className="relative py-24 sm:py-32 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-muted/40 to-transparent" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm font-medium text-primary"
            >
              隐私安全
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              打造安全可靠的AI服务
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              我们高度重视用户隐私安全，采用先进的隐私隔离机制，确保用户数据安全，包含数据脱敏、数据加密等安全措施。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {policies.slice(0, 2).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-base font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur"
          >
            <div className="space-y-6">
              {policies.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/70 p-5">
                    <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-base font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
