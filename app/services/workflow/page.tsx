import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Workflow, Wand2, Sparkle, ListChecks, Users } from "lucide-react";

const highlights = [
  "梳理业务场景，定制 AI 创作与审核流程",
  "支持图文生成、脚本撰写、视频分镜、社交媒体排期等场景",
  "结合企业知识库与品牌语调，保障内容一致性",
  "可视化流程编排，自动化触发与协同审批",
  "提供运营指南与培训，确保团队快速上手",
];

const processSteps = [
  {
    title: "01 需求调研",
    description: "深度访谈业务团队，梳理现有内容生产流程与痛点，明确目标指标。",
    icon: Sparkle,
  },
  {
    title: "02 流程设计",
    description: "根据不同业务线定制 AI 介入节点，输出标准化工作流方案与 SOP。",
    icon: Workflow,
  },
  {
    title: "03 快速落地",
    description: "搭建自动化流程与指令模版，完成系统集成、测试与上线培训。",
    icon: ListChecks,
  },
  {
    title: "04 持续运营",
    description: "提供运营指标监测、效果复盘与优化建议，保障长期产出质量。",
    icon: Users,
  },
];

const successCases = [
  {
    industry: "电商行业",
    result: "短视频脚本生成效率提升 4 倍，日均内容产出量翻番。",
  },
  {
    industry: "教育行业",
    result: "课程宣传稿与答疑脚本自动化生成，节省 60% 人力成本。",
  },
  {
    industry: "企业服务",
    result: "客户案例与宣讲材料统一风格输出，品牌一致性显著提升。",
  },
];

export default function WorkflowServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">定制服务 · 创作工作流</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  搭建属于您的 AI 创作流水线
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  我们从策略、流程、工具三个维度入手，帮助企业构建高效的 AI 创作体系，覆盖内容规划、创作、审核、分发全流程。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    预约方案顾问
                    <Workflow className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    获取成功案例
                    <Wand2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl border border-border/60 bg-card/50 p-8 shadow-xl backdrop-blur">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">服务内容一览</h2>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 rounded-2xl bg-muted/50 p-5 space-y-3">
                    <p className="text-sm font-semibold">交付成果</p>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>定制化工作流图与 SOP 文档</li>
                      <li>企业专属创作模板与指令集</li>
                      <li>AI 运营手册与培训课程</li>
                      <li>上线后 30 天跟进与优化</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">四步完成 AI 创作流程搭建</h2>
              <p className="text-lg text-muted-foreground">从策略制定到落地执行，全程专家陪伴</p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="h-full rounded-2xl border border-border/60 bg-background p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">成功案例</h2>
              <p className="text-lg text-muted-foreground">不同场景下的落地效果</p>
            </div>
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
              {successCases.map((item) => (
                <div key={item.industry} className="rounded-2xl border border-border/60 bg-background p-6">
                  <p className="text-sm font-semibold text-primary mb-3">{item.industry}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
