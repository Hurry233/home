import Image from "next/image";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Clapperboard,
  Database,
  Layers,
  MessageSquare,
  PenTool,
  Sparkles,
  Zap,
} from "lucide-react";

const aggregatorAdvantages = [
  "使用官方API接入，支持多个国际主流模型",
  "对话、绘画、视频、PPT 全覆盖",
  "无感切换GPT-5.2、Claude-4.5、Gemini-3-Pro等顶尖模型",
  "支持Midjourney、Sora、Nano-banana等图像/视频生成模型",
  "无需多方订阅，无封号风险，综合成本更低",
];

const mirrorAdvantages = [
  "官方对话界面体验更好",
  "能使用官网最新的模型和功能",
  "需要翻墙、并保持固定、干净的网络节点",
  "官方不定期的风控和降智策略，对抗成本高",
  "单平台订阅无法使用其他平台模型",
];

const aggregatorModules = [
  {
    icon: MessageSquare,
    title: "AI 对话",
    description:
      "聚合 GPT-5系列、Claude-4.5系列、Gemini-3-Pro系列、Gork系列等众多国际主流模型，一键无感切换，支持上下文连续对话，保障对话质量。",
    bullets: [
      "多个国际主流AI大模型最新版本",
      "支持联网搜索、深度思考",
      "支持文档读取、总结归纳",
      "支持代码生成、支持实时渲染与在线预览HTML页面",
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: PenTool,
    title: "AI 绘画",
    description:
      "集成 Midjourney、Nano-banana、Flux等图像生成模型，提供品牌视觉、海报、产品设计的定制化生成。",
    bullets: [
      "多种绘画风格，自定义Prompt",
      "图片编辑、二次修改",
      "超高清图片生成",
      "支持商业使用",
    ],
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: Clapperboard,
    title: "AI 视频",
    description:
      "Sora模型提供强大的视频生产力，简单的文字描述即可创作高质量的视频短片，支持多语言、多场景、多风格。",
    bullets: [
      "强大的自然语言理解能力",
      "自带配音、背景音乐、字幕",
      "更加真实的AI视频生成效果",
      "支持商业使用"
    ],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: Layers,
    title: "AI PPT（Beta）",
    description:
      "通过自然语言简单描述PPT内容或需求，即可自动生成PPT，支持多语言、多场景、多风格。",
    bullets: [
      "自动生成大纲",
      "支持在线编辑、下载导出",
      "更多功能持续迭代中",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
];

const valueHighlights = [
  "众多主流大模型一站式聚合，无感切换快速响应",
  "无需翻墙，无需多平台订阅，直接使用多个国际主流模型",
  "快速、高效、低成本，提高AI使用效率，降低综合成本",
];

const interfaceShots = [
  {
    title: "多模态视觉识别",
    description: "支持图像、视频、文件分析，快速理解内容，降低沟通成本。",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "创成式图片生成",
    description: "支持Midjourney、Sora、Nano-banana等图像/视频生成模型，快速生成高质量图片/视频。",
    image:
      "https://images.unsplash.com/photo-1523475472560-418a6e9403cc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "无感切换国际主流模型",
    description: "支持GPT-5系列、Claude-4.5系列、Gemini-3-Pro系列、Gork系列等众多国际主流模型，持续跟进最新版本。",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function AIAggregationStationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-sky-100/30 to-purple-100/25 dark:from-indigo-500/20 dark:via-background dark:to-background pointer-events-none" />
          <div className="absolute inset-y-0 right-[10%] hidden h-64 w-64 rounded-full bg-gradient-to-br from-sky-200/50 to-indigo-200/20 blur-3xl lg:block" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                  全模态创作中心
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  AI 聚合服务平台
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  面对日益复杂的内容生产诉求，AI 聚合站以多模型编排为底座，将不同模型的对话生成、图片创作、文件分析与视频创作融合在一个工作台，提高AI使用效率，降低综合成本。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    注册免费试用 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    申请产品演示 <Sparkles className="h-4 w-4" />
                  </Button>
                </div>
                <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4 text-sm text-slate-600 dark:text-slate-300">
                  {valueHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Zap className="mt-1 h-4 w-4 text-indigo-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Card className="border-transparent bg-gradient-to-br from-white/90 via-indigo-50/80 to-sky-50/60 dark:from-indigo-950/60 dark:via-background/80 dark:to-background/70 backdrop-blur-xl shadow-xl">
                  <div className="p-8 space-y-6">
                    <h2 className="text-2xl font-semibold">什么是 AI 聚合系统？</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      AI 聚合系统是一个多模态创作平台，使用官方API接入多个国际主流模型，让用户能低成本、一站式使用多种类型的大模型，降低综合成本。
                    </p>
                    <div className="grid gap-4">
                      <div className="rounded-2xl bg-muted/60 p-4">
                        <p className="text-sm font-semibold text-foreground">多种对话大模型</p>
                        <p className="text-sm text-muted-foreground">
                          GPT-5系列、Claude-4.5系列、Gemini-3-Pro系列、Gork系列等众多国际主流模型，持续跟进最新版本
                        </p>
                      </div>
                      <div className="rounded-2xl bg-muted/60 p-4">
                        <p className="text-sm font-semibold text-foreground">多模态创作模型</p>
                        <p className="text-sm text-muted-foreground">
                          众多多模态功能，包含视觉识别、文件分析、深度思考、PPT创作，支持Midjourney、Sora、Nano-banana等图像/视频生成模型
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section - Redesigned */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">产品对比</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">AI 聚合站 vs 各官方站点</h2>
              <p className="text-muted-foreground">
                聚合官方站点主要功能和模型，规避多种风险
              </p>
            </div>
            
            {/* Horizontal Comparison */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* AI 聚合站 */}
              <Card className="border-indigo-200/60 bg-indigo-50/50 dark:bg-indigo-950/10 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-600">AI 聚合站</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    多模态创作平台，聚合对话、绘画、视频、PPT、文档理解 能力，并支持使用多个主流模型，适合大多数用户
                  </p>
                  <div className="space-y-3">
                    {aggregatorAdvantages.map((advantage) => (
                      <div key={advantage} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{advantage}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">  
                    总结：整体使用体验稍逊官方大厂原生系统，但综合成本更低，且支持多个国际主流模型，满足多场景需求
                  </div>
                </div>
              </Card>

              {/* GPT 镜像系统 */}
              <Card className="border-primary/30 bg-primary/5 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">各模型官方网站</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    原生界面与完整插件能力，购买会员后能使用官方最新的模型和功能，适合偏爱单个大模型的用户
                  </p>
                  <div className="space-y-3">
                    {mirrorAdvantages.map((advantage) => (
                      <div key={advantage} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{advantage}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">  
                    总结：官方原厂体验更好，能使用官方最新功能，但可能因为封号、降智、网络波动等影响使用体验。
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Modules Section with Images */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">四大核心能力模块</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">合理利用不同模型的优势</h2>
              <p className="text-muted-foreground text-lg">
                将不同的模型优势融合在一起，提高AI使用效率，实现<span className="text-primary">“1+1&gt;2”</span>的效果
              </p>
            </div>
            <div className="space-y-16">
              {aggregatorModules.map((module, index) => {
                const Icon = module.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={module.title}
                    className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                      isEven ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    {/* Image */}
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <Card className="overflow-hidden border-border/60 bg-background/90">
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={module.image}
                            alt={module.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                          />
                        </div>
                      </Card>
                    </div>

                    {/* Content */}
                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <Card className="border-border/60 bg-background/80 p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-semibold">{module.title}</h3>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                          {module.description}
                        </p>
                        <ul className="space-y-3">
                          {module.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <Check className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                              <span className="text-sm text-foreground">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interface Showcase */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">界面展示</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">所见即所得的统一工作台</h2>
              <p className="text-muted-foreground text-lg">
                灵活的侧边栏和插件系统，简化与AI沟通的流程，提高使用效率
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {interfaceShots.map((shot) => (
                <Card key={shot.title} className="overflow-hidden border-border/60 bg-background/90 backdrop-blur">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={shot.image}
                      alt={shot.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">{shot.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{shot.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Free Trial CTA */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-5xl mx-auto border border-primary/30 bg-background/80 backdrop-blur-xl p-10 sm:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <Badge className="bg-primary text-primary-foreground">立即体验 AI 聚合站</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold">注册免费试用，购买合适的套餐享受更便捷的AI服务</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    推荐购买月/季度/年度会员套餐，会员期间无次数限制，让每次对话都更加轻松高效。所有套餐均支持开具增值税发票。
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="gap-2">
                    注册试用 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    联系客服 <Database className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
