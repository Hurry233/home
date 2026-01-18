import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Database, BookOpen, Layers, ShieldCheck, ServerCog } from "lucide-react";

const highlights = [
  "梳理企业文档、规范、产品手册、FAQ 等知识资源",
  "搭建专属知识库，支持自然语言查询与智能检索",
  "结合大模型实现知识问答、流程推荐、智能客服等功能",
  "支持私有化部署与数据隔离，满足合规与安全要求",
  "提供管理后台，支持增量更新与版本控制",
];

const architecture = [
  {
    title: "数据采集与治理",
    description: "支持文档、网页、数据库等多源导入，提供去重、清洗、分类、标注能力。",
    icon: Database,
  },
  {
    title: "知识图谱构建",
    description: "自动生成知识实体与关系，构建企业级知识体系，支撑精准问答。",
    icon: Layers,
  },
  {
    title: "模型融合调用",
    description: "可选择 GPT、Claude、Gemini 等多模型推理，结合向量库检索增强，保证答案准确度。",
    icon: ServerCog,
  },
  {
    title: "安全与合规",
    description: "提供权限管理、审计日志、敏感词识别等功能，满足金融、政企等行业要求。",
    icon: ShieldCheck,
  },
];

const scenarios = [
  "内部知识助手：员工可快速查询制度流程、系统使用指南",
  "客服智能问答：线上客服自动响应常见问题，复杂问题转人工",
  "销售支持平台：实时调用最新案例、竞品情报、政策更新",
  "培训学习中心：新员工自助学习企业文化与业务知识",
];

export default function KnowledgeBaseServicePage() {
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
                <Badge className="w-fit bg-primary/10 text-primary">定制服务 · 知识库搭建</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  让企业知识与大模型无缝融合
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  我们帮助企业梳理内部知识资产，构建智能知识库，让 AI 模型基于企业数据进行准确回答，提升内部协作效率与客户服务质量。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    咨询实施方案
                    <Database className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    查看案例演示
                    <BookOpen className="h-4 w-4" />
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
                    <p className="text-sm font-semibold">适用场景</p>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      {scenarios.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">端到端知识库架构</h2>
              <p className="text-lg text-muted-foreground">从数据治理到智能问答，打造闭环体系</p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {architecture.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-border/60 bg-background p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">交付价值</h2>
              <p className="text-lg text-muted-foreground">
                知识沉淀、效率提升、服务升级三位一体
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border/60 bg-background p-6">
                <p className="text-sm font-semibold text-primary mb-2">知识统一</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  实现企业知识的数字化沉淀与分层管理，避免信息孤岛与版本混乱。
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background p-6">
                <p className="text-sm font-semibold text-primary mb-2">效率提升</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  支持秒级检索与智能问答，大幅缩短知识获取时间，显著提升团队协作效率。
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background p-6">
                <p className="text-sm font-semibold text-primary mb-2">服务升级</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  赋能客服、培训、销售等多场景，使业务环节更专业、更一致。
                </p>
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
