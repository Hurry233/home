import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  CreditCard,
  Layers,
  Lightbulb,
  MessageSquare,
  Receipt,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from "lucide-react";

const heroBenefits = [
  "ChatGPT Plus / Pro / Business 官方订阅代充",
  "官方渠道办理，权益即时同步",
  "支持批量、团队统一续费与企业发票",
  "无需提供账户密码，更加隐私可靠",
];

const trustStats = [
  {
    value: "5000+",
    label: "服务用户",
    icon: Users,
  },
  {
    value: "99.8%",
    label: "激活率",
    icon: CheckCircle2,
  },
  {
    value: "1小时",
    label: "激活时效",
    icon: Zap,
  },
];

const tips: Array<{ type: "info" | "success" | "warning"; title: string; content: string }> = [
  {
    type: "info",
    title: "订阅建议",
    content:
      "首次建议月付体验，满意后再升级年付。Plus 适合个人，Pro 适合高频使用，Business 适合团队。",
  },
  {
    type: "success",
    title: "安全保障",
    content:
      "官方合规渠道代充，不触碰账号密码，支付信息加密处理。",
  },
  {
    type: "warning",
    title: "重要提示",
    content:
      "邮箱需准确，完成后绑定不可更改；企业开票请备注信息。",
  },
];

const rechargeSteps = [
  {
    step: "01",
    title: "选择订阅方案",
    summary: "确认 Plus / Pro / Business 与周期",
    description: "根据使用场景选择方案与订阅周期。",
    details: [
      "Plus：个人日常使用",
      "Pro：高频与高强度使用",
      "Business：团队协作与合规",
    ],
    tip: "不确定方案时，先月付体验更稳妥。",
  },
  {
    step: "02",
    title: "提交账号信息",
    summary: "提供账号邮箱或官方邀请链接",
    description: "提交账号邮箱或 Business 邀请链接。",
    details: [
      "已有账号仅需提供邮箱",
      "团队订阅可提供官方邀请链接",
      "无需提供账号密码",
    ],
    tip: "邮箱需准确，完成后绑定不可更改。",
  },
  {
    step: "03",
    title: "完成支付",
    summary: "微信/支付宝/对公转账",
    description: "多种支付方式，企业可申请发票。",
    details: [
      "微信、支付宝即时到账",
      "对公转账支持发票",
      "生成订单与支付凭证",
    ],
    tip: "企业客户建议对公转账。",
  },
  {
    step: "04",
    title: "激活确认",
    summary: "工作时间 1 小时内激活",
    description: "工作时间 1 小时内完成，非工作时间 24 小时内完成。",
    details: [
      "激活后邮件通知",
      "支持加急处理",
      "权益同步至账号",
    ],
    tip: "激活后登录官网确认标识。",
  },
];

const plans = [
  {
    id: "plus",
    name: "ChatGPT Plus",
    tag: "最受欢迎",
    price: "US$20/月",
    description:
      "面向个人用户的进阶订阅，适合学习、写作与日常工作。",
    highlights: [
      "GPT-5.2 Thinking 高级推理（更高使用容量）",
      "消息与上传额度提升",
      "项目与任务支持（适合长期工作流）",
      "有限使用 Sora 2；包含 Codex 智能体",
    ],
    cta: "了解代充流程",
  },
  {
    id: "pro",
    name: "ChatGPT Pro",
    tag: "专业创作者 / 开发者",
    price: "US$200/月",
    description:
      "面向高频使用者的旗舰版本，适合研究、工程与重度工作。",
    highlights: [
      "GPT-5.2 Pro 专业推理（更强分析与更稳结果）",
      "消息与上传数量更高（受防滥用规则约束）",
      "深度研究与智能体模式最高支持",
      "Sora 2 高级权限；扩展版 Codex 智能体",
    ],
    cta: "了解代充流程",
  },
  {
    id: "business",
    name: "ChatGPT Business",
    tag: "团队 / 成长型企业",
    price: "US$25/席位/月（年付）或 US$30/席位/月（月付）",
    description:
      "团队协作与合规版，提供更高额度与企业级权限。",
    highlights: [
      "邀请您的账户加入工作空间",
      "团队工作区：权限/管理控制 + SAML SSO + MFA",
      "企业级数据隐私：默认不用于训练",
      "连接器与共享项目：Slack / Drive / GitHub",
    ],
    cta: "了解自助邀请系统",
  },
];

const comparison = [
  {
    feature: "适用人群",
    plus: "个人创作者 / 自由职业者",
    pro: "重度内容生产者 / 高频开发者",
    business: "团队协作 / 企业部署",
  },
  {
    feature: "核心模型",
    plus: "GPT-5 / GPT-5.2 / GPT-5.2-Thinking",
    pro: "GPT-5.2-Thinking / GPT-5.2-Pro",
    business: "GPT-5.2-Thinking / GPT-5.2-Pro",
  },
  {
    feature: "使用额度",
    plus: "标准调用速率与对话次数",
    pro: "高级速率 + 超多的对话次数",
    business: "标准调用速率与更多的对话次数",
  },
  {
    feature: "Codex配额",
    plus: "标准额度",
    pro: "最高的额度",
    business: "更高的额度",
  },
  {
    feature: "聊天记录",
    plus: "保存于个人账户",
    pro: "保存于个人账户",
    business: "保存于工作空间",
  },
  {
    feature: "团队管理",
    plus: "—",
    pro: "—",
    business: "成员邀请、统一账单",
  },
  {
    feature: "数据安全",
    plus: "个人隐私控制",
    pro: "增强型个人隐私",
    business: "零数据训练、SOC2、GDPR 合规",
  },
];

const recommendations = [
  {
    title: "需要长期保留在线对话记录",
    description:
      "关注个人聊天记录与灵活使用，建议选择 ChatGPT Plus。",
    icon: MessageSquare,
    action: "推荐方案：ChatGPT Plus",
  },
  {
    title: "需要更强模型能力与调用次数",
    description:
      "需要更强模型与更高配额，建议选择 ChatGPT Business。（可以通过插件导出重要对话记录）",
    icon: Building2,
    action: "推荐方案：ChatGPT Business",
  },
];

const faqs = [
  {
    question: "代充是否安全？会不会被封号？",
    answer:
      "我们使用官方合规渠道进行订阅充值，不存在封号风险。所有操作通过 OpenAI 官方接口完成，与自己充值一致。",
    category: "安全性",
  },
  {
    question: "支付后多久可以使用？",
    answer:
      "工作时间（9:00-21:00）内 1 小时完成激活，非工作时间最长 24 小时。激活后会发送邮件通知。",
    category: "激活时间",
  },
  {
    question: "企业用户是否可以开发票？",
    answer:
      "可以。企业用户可申请增值税普通发票或专用发票，请在下单时备注开票信息，我们会在 3 个工作日内开具。",
    category: "发票问题",
  },
  {
    question: "Plus、Pro、Business 有什么区别？",
    answer:
      "Plus 适合个人使用；Pro 面向高频/重度使用；Business 适合团队协作与企业合规场景，提供管理控制台与更完整的隐私保护。",
    category: "套餐对比",
  },
];

export default function RechargePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-cyan-50/30 to-background dark:from-primary/5 dark:via-background dark:to-background" />
          <div className="absolute inset-y-0 left-[10%] hidden h-72 w-72 rounded-full bg-gradient-to-br from-blue-200/40 to-cyan-100/30 blur-3xl lg:block dark:opacity-0" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">
                  ChatGPT 官方订阅代充
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  官方渠道代充，安全快捷有保障
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  面向个人与企业的官方订阅代充服务，流程清晰、权益同步。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    立即代充
                    <CreditCard className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    咨询优惠方案
                    <Receipt className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="rounded-3xl border border-border/60 bg-card/50 p-8 shadow-xl backdrop-blur">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">服务亮点</h2>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      {heroBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 rounded-2xl bg-muted/50 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Layers className="h-4 w-4" />
                      代充流程
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      {rechargeSteps.map((step) => (
                        <li key={step.step}>{step.summary}</li>
                      ))}
                    </ol>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Introductions */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">
                官方订阅类型介绍
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">Plus、Pro 与 Business 如何选择？</h2>
              <p className="text-lg text-muted-foreground">
                三种订阅方案，快速匹配合适权益。
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className="h-full border border-border/60 bg-background/80 p-8 space-y-6"
                >
                  <div className="space-y-2">
                    <Badge className="bg-primary/10 text-primary w-fit">{plan.tag}</Badge>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.price}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 text-sm text-foreground">
                    {plan.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <ShieldCheck className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    {plan.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">功能差异一览</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">三种订阅模式的详细对比</h2>
              <p className="text-lg text-muted-foreground">
                关键差异一表看清，方便快速决策。
              </p>
            </div>
            <Card className="border border-border/60 bg-background/80 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-muted-foreground">
                      <th className="px-6 py-4 font-medium">对比维度</th>
                      <th className="px-6 py-4 font-medium">ChatGPT Plus</th>
                      <th className="px-6 py-4 font-medium">ChatGPT Pro</th>
                      <th className="px-6 py-4 font-medium">ChatGPT Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr
                        key={row.feature}
                        className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
                      >
                        <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.plus}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.pro}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.business}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* Recharge Flow */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">代充流程</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">4 步完成官方代充</h2>
              <p className="text-lg text-muted-foreground">选择方案、提交信息、完成支付、激活确认。</p>
            </div>
            <div className="mx-auto max-w-5xl space-y-8">
              {rechargeSteps.map((item) => (
                <Card
                  key={item.step}
                  className="border border-border/60 bg-background/80 p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-lg font-semibold shadow">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <Lightbulb className="mt-0.5 h-4 w-4 text-primary" />
                        <p className="text-sm text-muted-foreground">{item.tip}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Order Notes */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">下单前须知</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">关键注意事项</h2>
              <p className="text-lg text-muted-foreground">
                下单前确认关键信息，减少沟通成本。
              </p>
            </div>
            <div className="mx-auto max-w-4xl space-y-4">
              {tips.map((tip) => (
                <Alert key={tip.title} variant={tip.type}>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>{tip.title}</AlertTitle>
                  <AlertDescription>{tip.content}</AlertDescription>
                </Alert>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">选型建议</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">根据使用场景选择合适的订阅</h2>
              <p className="text-lg text-muted-foreground">
                两种常见场景的简要建议。
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {recommendations.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="h-full border border-border/60 bg-background/80 p-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Star className="w-4 h-4" />
                      {item.action}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">常见问题</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">代充服务疑问解答</h2>
              <p className="text-lg text-muted-foreground">
                常见问题简要解答。
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <Card key={faq.question} className="border border-border/60 bg-background/80 p-6">
                  <Badge variant="outline" className="mb-3">
                    {faq.category}
                  </Badge>
                  <h3 className="text-base font-semibold mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <Card className="border border-primary/20 bg-background/80 p-10 sm:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary w-fit">快速下单</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold">确认方案后，即刻代充，同步官方权益</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    顾问核对订阅类型、账单与发票需求。下单后，工作时间 1 小时内完成，非工作时间 24 小时内完成，支持加急与批量代充。
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="gap-2">
                    获取代充报价 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    预约顾问沟通 <Users className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <CTASection />

        {/* Trust Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">官方保障</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">官方渠道办理</h2>
              <p className="text-lg text-muted-foreground">权益同步，服务可追溯。</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {trustStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={stat.label}
                    className="border border-border/60 bg-background/80 p-6 text-center space-y-3"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-semibold">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
