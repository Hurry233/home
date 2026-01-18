"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import { Settings, ArrowLeft, Workflow, Cpu, Sliders, Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const advancedTopics = [
  {
    icon: Workflow,
    title: "自动化工作流",
    description: "通过多模型编排实现复杂业务流程自动化。",
    details: [
      "使用工作流引擎编排多个AI节点",
      "结合Webhook实现事件驱动",
      "支持条件分支与并行执行",
      "可视化监控各环节耗时和结果",
    ],
  },
  {
    icon: Cpu,
    title: "模型混合策略",
    description: "针对不同场景自动选择或组合模型，提高质量与成本效率。",
    details: [
      "基于任务类型选择最佳模型",
      "支持级联调用和双判别机制",
      "配置回退策略确保稳定性",
      "按预算自动切换至经济模型",
    ],
  },
  {
    icon: Sliders,
    title: "参数调优",
    description: "通过温度、TopP、max_tokens等参数控制生成效果。",
    details: [
      "为不同任务预设参数模板",
      "实时调整以适应上下文",
      "记录参数与结果的关联性",
      "结合A/B测试持续优化",
    ],
  },
  {
    icon: Gauge,
    title: "性能优化",
    description: "在高并发场景下保持稳定与低延迟。",
    details: [
      "启用并发控制与队列系统",
      "使用缓存减少重复请求",
      "结合延迟监控和熔断机制",
      "多区域部署实现就近访问",
    ],
  },
];

const architectureLayers = [
  {
    name: "接入层",
    description: "统一认证、权限控制、请求限流，提供稳定的外部接口。",
  },
  {
    name: "编排层",
    description: "对接不同模型、插件与自研算法，支持自定义工作流和业务规则。",
  },
  {
    name: "数据层",
    description: "存储Prompt模板、调用日志、知识库内容等，提供数据回溯和分析能力。",
  },
  {
    name: "体验层",
    description: "为终端用户提供定制化的交互界面，如客服助手、创作工具、内部助手等。",
  },
];

export default function AdvancedConfigPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-500"
              >
                <Settings className="mr-2 h-4 w-4" />
                高级配置
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                构建可扩展的AI应用架构
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                面向架构师和高级开发者的配置指南，助您打造高扩展性、高可靠性的AI能力平台
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {advancedTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="h-full p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-indigo-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{topic.title}</h3>
                          <p className="text-sm text-muted-foreground">{topic.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-sm">
                        {topic.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-8">
              <h2 className="text-3xl font-bold">平台架构建议</h2>
              <Card className="p-8">
                <div className="grid gap-6">
                  {architectureLayers.map((layer) => (
                    <div key={layer.name} className="space-y-2">
                      <h3 className="text-xl font-semibold">{layer.name}</h3>
                      <p className="text-sm text-muted-foreground">{layer.description}</p>
                      <div className="h-px bg-border/60" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold">扩展阅读</h2>
              <p className="text-muted-foreground">
                结合以下教程，形成完整的企业级AI应用方案
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/services/workflow"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  Agent工作流
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
