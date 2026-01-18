"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { ProductsSection } from "@/components/ui/products-section";
import { FeaturesBentoSection } from "@/components/ui/features-bento-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { Logos3 } from "@/components/ui/logos3";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowUpRight, Workflow, Globe, ShieldCheck, BarChart3 } from "lucide-react";

const integrations = [
  "Slack",
  "Salesforce",
  "Notion",
  "Zapier",
  "Feishu",
  "DingTalk",
];

const metrics = [
  {
    value: "99.9%",
    label: "服务可用性",
    description: "多活架构与智能切换保障业务连续性",
  },
  {
    value: "50+",
    label: "支持模型数量",
    description: "覆盖 GPT、Claude、Gemini、Midjourney 等主流模型",
  },
  {
    value: "7x24",
    label: "技术支持",
    description: "专业团队随时响应，保障关键任务",
  },
];

const pillars = [
  {
    icon: Workflow,
    title: "全场景覆盖",
    description: "镜像服务、API 网关、官方代充、镜像系统、定制化服务，一站式满足不同阶段需求。",
  },
  {
    icon: Globe,
    title: "全球节点网络",
    description: "布点北美、欧洲、香港、新加坡等地区，智能路由选择最优线路，提供低延迟访问体验。",
  },
  {
    icon: ShieldCheck,
    title: "企业级安全",
    description: "数据加密、访问控制、合规审计、私有化部署，全流程安全保障。",
  },
  {
    icon: BarChart3,
    title: "可视化运营",
    description: "提供多维度监控面板与成本分析工具，帮助团队精细化运营。",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        {/* Hero */}
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Badge className="w-fit bg-primary/10 text-primary">产品矩阵</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  一站式接入全球顶尖大模型的全栈能力平台
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  从镜像访问到 API 网关，从官方代充到定制化方案，帮助个人、团队与企业快速落地 AI 生产力，打造业务新增长点。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    预约产品演示
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href="/contact">
                      咨询专属方案
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="rounded-3xl border border-border/40 bg-card/50 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-semibold mb-4">即插即用的生态集成</h3>
                <p className="text-muted-foreground mb-6">
                  与您常用的办公协作工具无缝衔接，打造智能化的业务流程。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((name) => (
                    <div
                      key={name}
                      className="rounded-xl border border-border/50 bg-background/60 px-4 py-3 text-sm font-medium text-muted-foreground"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 sm:py-24 border-y border-border/40 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-3">
              {metrics.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="rounded-2xl border border-border/60 bg-background p-6 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{item.value}</div>
                  <div className="text-sm font-medium text-foreground mb-2">{item.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Logos */}
        <Logos3 heading="受到领先科技公司与创新团队的信任" />

        {/* Product grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">核心产品矩阵</h2>
              <p className="text-lg text-muted-foreground">
                为不同发展阶段提供弹性方案，满足从个人到企业的全流程需求。
              </p>
            </div>
            <ProductsSection />
          </div>
        </section>

        {/* Platform pillars */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">平台能力支柱</h2>
              <p className="text-lg text-muted-foreground">
                安全可靠的底座，让您专注于创造价值。
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-border/60 bg-background p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature stories */}
        <FeaturesBentoSection />

        {/* Pricing CTA */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
                灵活计费
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                自由组合镜像会员与按量 API，成本可控
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                支持包年包月、按量计费、企业定制三种模式，帮助您按需扩容，避免资源浪费。
              </p>
            </motion.div>
          </div>
        </section>

        <PricingSection />
      </main>
      <SiteFooter />
    </>
  );
}
