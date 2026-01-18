import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Settings2, Cpu, TrendingUp, Target, Gauge, Layers } from "lucide-react";

const highlights = [
  "支持 GPT-5、Claude、Llama 等多模型微调与指令优化",
  "提供数据清洗、标注、增强全流程服务",
  "结合企业知识库与领域语料，实现专属语言风格与知识沉淀",
  "可选私有化部署或托管运行，满足数据安全要求",
  "专业团队提供多轮调试、评估与上线保障",
];

const process = [
  {
    title: "场景分析",
    description: "明确业务目标、评估微调必要性、设计评估指标",
    icon: Target,
  },
  {
    title: "数据准备",
    description: "采集、清洗、标注、增强语料，构建高质量训练集",
    icon: Layers,
  },
  {
    title: "模型训练",
    description: "选择基座模型、调优超参、多轮迭代训练",
    icon: Cpu,
  },
  {
    title: "效果评估",
    description: "对比基线、调优 Prompt、优化输出质量",
    icon: Gauge,
  },
  {
    title: "部署上线",
    description: "提供 API 或私有化部署，持续监控与优化",
    icon: TrendingUp,
  },
];

const useCases = [
  {
    title: "客服领域专业化",
    description: "微调客服专用模型，识别专业术语、理解业务逻辑、生成符合品牌语调的回复。",
  },
  {
    title: "法律文书生成",
    description: "训练模型熟悉法律语言与行业惯例，辅助起草合同、诉状等专业文档。",
  },
  {
    title: "金融风控分析",
    description: "注入金融知识与历史风控案例，提升信贷评估与风险预警精准度。",
  },
  {
    title: "医疗辅助诊断",
    description: "基于医学文献与病例库微调，辅助医生诊断与治疗方案推荐。",
  },
];

export default function FineTuningServicePage() {
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
                <Badge className="w-fit bg-primary/10 text-primary">定制服务 · 模型微调</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  为业务场景量身打造的专属大模型
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  我们提供从数据准备到上线监控的一站式模型微调服务，帮助企业打造高准确度、高安全性的专属 AI 助手与业务模型。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    预约技术评估
                    <Settings2 className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    下载服务手册
                    <Cpu className="h-4 w-4" />
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
                          <Check className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 rounded-2xl bg-muted/50 p-5 space-y-3">
                    <p className="text-sm font-semibold">交付流程</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>业务场景调研与目标设定</li>
                      <li>数据采集、清洗与标注</li>
                      <li>模型微调与多轮评估</li>
                      <li>上线部署与监控反馈</li>
                    </ol>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">端到端微调流程</h2>
              <p className="text-lg text-muted-foreground">从场景分析到上线部署，全程专家陪伴</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative">
                    <div className="rounded-2xl border border-border/60 bg-background p-6 hover:shadow-lg transition-shadow h-full">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                    {idx < process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">典型应用场景</h2>
              <p className="text-lg text-muted-foreground">不同领域的成功实践</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/60 bg-background p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ or Benefits */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">为什么选择模型微调</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background rounded-2xl p-6 border border-border/60">
                  <h3 className="text-lg font-semibold mb-3">专业性提升</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    通过注入领域知识与行业术语，让模型更懂您的业务，输出更专业、更符合场景需求的内容。
                  </p>
                </div>
                <div className="bg-background rounded-2xl p-6 border border-border/60">
                  <h3 className="text-lg font-semibold mb-3">成本优化</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    微调后的小模型可在特定场景达到大模型效果，显著降低推理成本与延迟。
                  </p>
                </div>
                <div className="bg-background rounded-2xl p-6 border border-border/60">
                  <h3 className="text-lg font-semibold mb-3">数据安全</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    支持私有化部署，确保敏感数据不出企业内网，满足金融、政务等行业合规要求。
                  </p>
                </div>
                <div className="bg-background rounded-2xl p-6 border border-border/60">
                  <h3 className="text-lg font-semibold mb-3">长期价值</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    知识沉淀在模型中，持续迭代优化，构建企业专属的 AI 能力护城河。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
