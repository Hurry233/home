"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Lightbulb, Network, ShieldCheck } from "lucide-react";

const innovations = [
  {
    title: "全模型覆盖",
    description: "接入GPT-5、Claude 3.5、Gemini Pro、Midjourney等50+主流大模型，同步官方最新能力。",
    icon: Brain,
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
  },
  {
    title: "极速接入",
    description: "3分钟完成配置，提供统一API网关，一行代码即可调用所有模型。",
    icon: Lightbulb,
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  {
    title: "稳定可靠",
    description: "多节点智能调度，全球加速网络，7x24小时运维保障，99.9%高可用性。",
    icon: Network,
    gradient: "from-teal-500/20 via-teal-500/10 to-transparent",
  },
  {
    title: "安全合规",
    description: "企业级数据加密，支持私有化部署，满足金融、教育、政府等行业合规要求。",
    icon: ShieldCheck,
    gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
  },
];

export function InnovationSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-muted/40 to-transparent" />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              为多场景打造的全栈大模型服务
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              我们整合镜像、API网关、官方代充与定制化能力，为个人创作者、团队与企业提供一站式国际大模型接入方案，快速落地AI应用。
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            查看产品白皮书
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-8"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${innovation.gradient}`} />
                <div className="relative space-y-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background/60 backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {innovation.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    了解更多
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
