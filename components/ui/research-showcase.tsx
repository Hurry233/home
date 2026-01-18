"use client";

import { motion } from "framer-motion";

export function ResearchShowcase() {
  const highlightCards = [
    {
      title: "完整的API接入文档",
      caption: "快速接入",
      description: "提供详细的API接入文档，支持多种主流API接口格式，并具备统一兼容性，助力开发者快速接入。",
    },
    {
      title: "灵活的API计费系统",
      caption: "按量计费",
      description: "随用随充，按量计费，每次调用均有详细日志记录，便于开发者进行成本控制和优化。",
    },
    {
      title: "最新AI模型支持",
      caption: "持续更新",
      description: "支持GPT-5、Claude-4.5、Gemini-3-Pro等最新AI模型，持续更新，助力开发者保持技术领先。",
    },
    {
      title: "模型微调",
      caption: "定制化服务",
      description: "支持模型微调，接入个人/企业/行业知识库，提高在特定领域的专业性。",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              面向开发者
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              提供一站式的API接入解决方案
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              围绕多元化的AI使用需求，提供从文本到图像、视频、视觉理解、语音、多模态协同等一站式解决方案
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {[
                {
                  title: "文本生成",
                  description: "支持GPT-5、Claude-4.5、Gemini-3-Pro等最新AI模型，更强大的语义理解和思考能力，更长的上下文长度，更精准的回答质量。"
                },
                {
                  title: "多模态能力",
                  description: "支持图像、视频理解，快速完成文件分析，图像生成与编辑"
                },
                {
                  title: "定向功能模型",
                  description: "提供Midjourney、Sora、Nano-banana等图像/视频生成模型API接口，一键接入，快速生成高质量图片/视频。"
                },
                {
                  title: "Claude Code",
                  description: "一键接入Claude Code，无需科学上网，稳定低延迟。节省70%以上的开发成本。"
                }
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full rounded-3xl border border-border/60 bg-background/60 p-6 shadow-[0px_0px_70px_-25px_rgba(80,80,120,0.35)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/0 to-primary/30 blur-3xl" />
              <div className="relative grid gap-6 sm:grid-cols-2">
                {highlightCards.map((card) => (
                  <div
                    key={card.title}
                    className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-6 backdrop-blur"
                  >
                    <span className="text-xs uppercase tracking-wider text-primary/80">
                      {card.caption}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
