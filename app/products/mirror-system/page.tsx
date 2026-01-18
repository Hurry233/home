import Image from "next/image";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Binary,
  Check,
  Cpu,
  Eye,
  Gauge,
  Gift,
  Globe,
  Network,
  Rocket,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Wifi,
} from "lucide-react";

const highlights = [
  "国内直连 ChatGPT 官网，无需 VPN 或魔法上网",
  "完整生态：GPT-5、DALL-E 3、代码解释器、插件商店、语音输入等全部功能",
  "与官方同步更新，第一时间体验最新模型与特性",
  "企业级数据加密与合规策略，满足政企场景需求",
  "预售期享受专属优惠与优先开通权益",
];

const gptMirrorEssentials = [
  {
    title: "官方内容同步",
    description:
      "通过与海外官方节点高速同步，确保模型版本、插件生态、对话记录均保持原汁原味。",
  },
  {
    title: "一键直连体验",
    description:
      "全链路加速与访问优化，真正做到打开即用，告别梯子、爬墙和复杂配置。",
  },
  {
    title: "多终端覆盖",
    description:
      "支持桌面 Web、移动端以及团队共享工作区，满足个人创作与企业协作双重场景。",
  },
];

const technicalAdvantages = [
  {
    icon: Sparkles,
    title: "原生生态复刻",
    description: "完整复刻 ChatGPT 官方体验，插件、指令、DALL·E、Code Interpreter 全面可用。",
  },
  {
    icon: ShieldCheck,
    title: "银行级安全",
    description: "专线传输 + 多重加密 + 零信任访问控制，满足金融、政企级合规要求。",
  },
  {
    icon: Wifi,
    title: "自研加速网络",
    description: "自研 SD-WAN 智能调度，全球节点秒级切换，确保高峰期稳定低延迟。",
  },
  {
    icon: Cpu,
    title: "多模型调度引擎",
    description: "灵活选择 GPT-5、Claude、Gemini 等模型，支持按账号或应用级策略路由。",
  },
  {
    icon: Gauge,
    title: "实时监测体系",
    description: "提供质量诊断、异常监测、推理耗时等 20+ 维度指标，自动告警，立即响应。",
  },
  {
    icon: Network,
    title: "团队协同能力",
    description: "支持成员分组、权限划分、对话审核与留痕，方便企业运营与知识沉淀。",
  },
];

const antiDowngradeMeasures = [
  {
    icon: ShieldAlert,
    title: "对抗劣化策略",
    description:
      "自动识别模型输出质量下降、功能屏蔽等异常情况，第一时间切换备用线路与节点。",
  },
  {
    icon: Binary,
    title: "独立知识库",
    description:
      "构建 GPTW 自研知识库与 Prompt 校验体系，避免关键回答被删改或弱化。",
  },
  {
    icon: Eye,
    title: "人机双重巡检",
    description:
      "智能巡检机器人 + 人工专家日常抽检，保障模型保持高质量、高一致性的回复能力。",
  },
  {
    icon: Wifi,
    title: "多活备援架构",
    description:
      "核心功能节点 N+1 冗余部署，任何线路受限时自动切换，零感知恢复。",
  },
];

const interfaceScreens = [
  {
    title: "多模型工作台",
    description: "统一管理对话、绘图、代码等任务，自定义快捷指令与热门 Prompt。",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "团队协作空间",
    description: "成员共享对话历史、知识库与模板，支持审批与权限设置。",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "实时监控大屏",
    description: "用量、成功率、响应耗时一目了然，支持导出报表与自定义告警。",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
  },
];

const benefits = [
  {
    title: "首批用户专享",
    items: ["终身 8 折优惠", "赠送 3 个月会员体验期", "优先开通白名单", "专属客服通道"],
  },
  {
    title: "企业客户增值",
    items: ["团队协作空间", "统一账号管理", "发票与合同支持", "技术支持与培训"],
  },
];

const faqs = [
  {
    question: "镜像系统和官方账号有什么区别？",
    answer:
      "GPTW 镜像基于官方节点构建，提供等同于官方的功能体验，同时针对国内网络环境进行优化，确保访问稳定且合规。",
  },
  {
    question: "如何保障账号安全与合规？",
    answer:
      "我们支持专属账号隔离、全链路加密、访问日志审计，并可签署企业级数据安全协议，满足金融、制造、政企等行业标准。",
  },
  {
    question: "是否支持多人共享与团队协作？",
    answer:
      "支持。可按部门、项目分配权限，设置对话留痕、导出与审核机制，确保知识沉淀与安全合规。",
  },
  {
    question: "上线时间和收费模式是什么？",
    answer:
      "目前处于预售阶段，预计 4-6 周内正式上线。支持包月包年、企业定制套餐与私有化部署，请与我们联系获取报价。",
  },
];

const timeline = [
  {
    label: "阶段一：内测阶段（当前）",
    description: "开放预约通道，邀请核心用户体验与反馈。",
  },
  {
    label: "阶段二：小规模公测（预计 2 周后）",
    description: "对预售用户开放公测权限，提供完整功能试用。",
  },
  {
    label: "阶段三：正式上线（预计 1 个月后）",
    description: "全量开放，预售用户优先享受专属权益与技术支持。",
  },
];

export default function MirrorSystemPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Star className="w-3 h-3 mr-1 inline" /> 即将上线 · 预售中
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  国内直连 ChatGPT 官网，完整生态零障碍
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  GPTW 镜像系统让您无需翻墙即可畅享原生官方能力：支持 GPT-5、DALL·E、代码解释器、插件商店、语音输入等功能，同时提供企业级安全与团队协同支持。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    立即预约 <Rocket className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    了解预售详情 <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl border border-amber-200/60 bg-card/50 p-8 shadow-xl backdrop-blur space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">为什么选择镜像系统</h2>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-5">
                    <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                      <Gift className="w-5 h-5" />
                      <span className="text-sm font-semibold uppercase tracking-wide">预售专属权益</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>首批用户享终身 8 折优惠</li>
                      <li>0 元试用 3 个月，专属客服陪伴</li>
                      <li>预约优先开通白名单，锁定资源</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is GPT Mirror */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">什么是 GPT 镜像</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">真正意义上的官方体验复制</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  GPT 镜像是在不违背政策的前提下，将海外官方服务的能力、界面与数据完整同步到国内用户。通过 GPTW 的多重网络与安全优化，您可以像使用官网一样，自由调用所有模型与插件能力。
                </p>
                <div className="grid gap-4">
                  {gptMirrorEssentials.map((item) => (
                    <Card key={item.title} className="border-border/60 bg-background p-5">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-8 space-y-5">
                  <h3 className="text-xl font-semibold">核心定义</h3>
                  <p className="text-sm text-muted-foreground leading-6">
                    “镜像”不仅仅是访问代理，更是对官方生态的实时复刻。GPTW 镜像通过海外节点直连与本地加速网络，实现账号登录、数据同步、插件调用等全流程体验与官方一致。
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>支持个人用户、企业团队与组织级部署</li>
                    <li>兼容现有账号，可迁移对话记录与配置</li>
                    <li>提供 API 网关接入，与业务系统无缝集成</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technical advantages */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">GPTW 镜像的技术优势</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">打造企业级高可用镜像体系</h2>
              <p className="text-lg text-muted-foreground">
                从网络、模型到协作，纵向打磨六大能力，确保您的每次调用都又快又稳。
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {technicalAdvantages.map((advantage) => {
                const Icon = advantage.icon;
                return (
                  <Card key={advantage.title} className="h-full border-border/60 bg-background/80 p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Anti downgrade strategy */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                <div className="p-10 lg:p-14 space-y-6">
                  <Badge className="w-fit bg-white/10 hover:bg-white/10 text-white">全力对抗降智策略</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold">让模型保持原生智力与创造力</h2>
                  <p className="text-base text-white/70 leading-relaxed">
                    为应对海外平台可能采取的功能限制、质量稀释策略，GPTW 构建了防降智保障体系，确保模型在国内依旧保持一流的推理能力与内容深度。
                  </p>
                </div>
                <div className="grid gap-6 p-10 lg:p-14 bg-white/5">
                  {antiDowngradeMeasures.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-amber-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interface showcase */}
        <section className="py-16 sm:py-24 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">界面展示</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">所见即所得的原生界面体验</h2>
              <p className="text-lg text-muted-foreground">
                既保留官方设计语言，又增添企业级运营能力，让您轻松切换在个人与团队场景之间。
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {interfaceScreens.map((screen) => (
                <Card key={screen.title} className="overflow-hidden border-border/50 bg-background/90 backdrop-blur">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">{screen.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{screen.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-sale benefits */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="w-fit bg-primary/10 text-primary">预售福利</Badge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">早鸟专享权益抢先锁定</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="bg-background rounded-2xl p-8 border border-border/60 hover:border-primary/40 transition"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">{benefit.title}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {benefit.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="w-fit bg-primary/10 text-primary">上线计划</Badge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">时间表与节奏安排</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {timeline.map((item, index) => (
                <Card key={item.label} className="p-6 border-border/60 bg-background">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">常见问题</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">QA 问答</h2>
              <p className="text-lg text-muted-foreground">
                还有更多问题？欢迎联系顾问团队获取一对一答疑服务。
              </p>
            </div>
            <div className="grid gap-4 max-w-4xl mx-auto">
              {faqs.map((faq) => (
                <Card key={faq.question} className="p-6 border-border/60 bg-background">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
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
