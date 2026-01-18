"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import {
  CreditCard,
  ArrowLeft,
  ShieldCheck,
  Clock,
  BadgeCheck,
  AlertCircle,
  Lightbulb,
  Check,
  Users,
  Zap,
  TrendingUp,
  Wallet,
  FileText,
  Award,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const rechargeSteps = [
  {
    step: "01",
    title: "选择订阅套餐",
    description: "根据您的需求选择ChatGPT Plus(个人版)或Team(团队版)订阅套餐。",
    details: [
      "Plus: ¥140/月 - 适合个人用户",
      "Team: ¥210/月/席位 - 适合企业团队",
      "查看详细套餐对比和功能介绍",
    ],
    tip: "首次使用建议选择Plus月付套餐,体验后再决定是否升级或续费",
  },
  {
    step: "02",
    title: "提交订单信息",
    description: "填写您的OpenAI账号邮箱或提供账号信息,我们将为您完成代充。",
    details: [
      "提供OpenAI账号邮箱地址",
      "或提供账号登录信息(安全加密处理)",
      "选择订阅时长(月付/年付)",
    ],
    tip: "已有OpenAI账号的用户只需提供邮箱即可,我们会绑定到您的现有账号",
  },
  {
    step: "03",
    title: "完成支付",
    description: "支持微信、支付宝、银行转账等多种支付方式,企业用户可申请发票。",
    details: [
      "支持微信、支付宝即时到账",
      "企业用户支持对公转账",
      "自动生成订单和支付凭证",
    ],
    tip: "企业用户建议使用对公转账并申请发票,可用于报销和财务记录",
  },
  {
    step: "04",
    title: "激活确认",
    description: "我们将在1-24小时内完成充值,您会收到激活确认邮件和通知。",
    details: [
      "工作时间1小时内处理",
      "非工作时间24小时内处理",
      "激活后邮件和短信通知",
    ],
    tip: "激活后请登录ChatGPT官网验证Plus标识,确认订阅已生效",
  },
];

const features = [
  {
    title: "官方正版订阅",
    description: "直接通过OpenAI官方渠道订阅,享受完整的官方服务和更新",
    icon: BadgeCheck,
  },
  {
    title: "安全可靠",
    description: "采用银行级加密技术保护您的账号信息,绝不泄露隐私",
    icon: ShieldCheck,
  },
  {
    title: "快速激活",
    description: "工作时间1小时内完成充值激活,24/7在线客服支持",
    icon: Clock,
  },
];

const statistics = [
  {
    value: "5000+",
    label: "成功订阅用户",
    icon: Users,
  },
  {
    value: "99.8%",
    label: "成功激活率",
    icon: CheckCircle2,
  },
  {
    value: "1小时",
    label: "平均激活时间",
    icon: Zap,
  },
  {
    value: "100%",
    label: "官方正版保障",
    icon: Award,
  },
];

const planComparison = [
  {
    plan: "ChatGPT Plus",
    price: "¥140/月",
    target: "个人用户",
    features: [
      "GPT-5 Turbo无限制使用",
      "GPT-5高级功能",
      "DALL-E 3图像生成",
      "高峰期优先访问",
      "代码解释器",
      "数据分析功能",
    ],
    limitations: ["仅支持单人使用", "不含团队协作功能"],
    recommended: true,
  },
  {
    plan: "ChatGPT Team",
    price: "¥210/月/席位",
    target: "企业团队",
    features: [
      "Plus全部功能",
      "团队工作区共享",
      "企业级数据隐私",
      "管理控制台",
      "32K上下文窗口",
      "专属客户经理",
    ],
    limitations: ["最低2个席位起订", "价格相对较高"],
    recommended: false,
  },
];

const paymentMethods = [
  {
    method: "微信支付",
    icon: Wallet,
    features: ["即时到账", "支持扫码支付", "安全便捷"],
    popular: true,
  },
  {
    method: "支付宝",
    icon: Wallet,
    features: ["即时到账", "花呗支持", "安全可靠"],
    popular: true,
  },
  {
    method: "对公转账",
    icon: FileText,
    features: ["企业用户专享", "支持开发票", "1-3工作日到账"],
    popular: false,
  },
];

const tips = [
  {
    type: "info",
    title: "💡 订阅建议",
    content: "首次订阅建议选择月付套餐进行体验。确认满意后可以联系我们升级为年付,享受更优惠的价格。Plus适合个人使用,Team适合2人以上团队协作。",
  },
  {
    type: "success",
    title: "🔒 安全保障",
    content: "我们采用官方API接口完成订阅,不会触碰您的账号密码。所有支付信息经过加密处理,符合PCI DSS安全标准。已成功服务5000+用户,0封号记录。",
  },
  {
    type: "warning",
    title: "⚠️ 重要提示",
    content: "请确保提供的OpenAI账号邮箱正确无误。代充完成后,订阅将绑定到该账号,无法更改。企业用户需要开发票的,请在下单时备注完整的开票信息。",
  },
];

const faqs = [
  {
    question: "代充是否安全?会不会被封号?",
    answer: "我们使用官方合规渠道进行订阅充值,不存在封号风险。所有操作通过OpenAI官方API完成,与自己充值完全一致。",
    category: "安全性",
  },
  {
    question: "支付后多久可以使用?",
    answer: "工作时间(9:00-21:00)内1小时完成激活,非工作时间最长24小时。激活后您会立即收到邮件和短信通知。",
    category: "激活时间",
  },
  {
    question: "企业用户是否可以开发票?",
    answer: "可以!企业用户可申请增值税普通发票或专用发票。请在下单时备注开票信息,我们会在3个工作日内开具并邮寄。",
    category: "发票问题",
  },
  {
    question: "订阅到期后如何续费?",
    answer: "到期前7天我们会发送续费提醒。您可以选择自动续费或手动续费,避免服务中断。",
    category: "续费流程",
  },
  {
    question: "Plus和Team有什么区别?",
    answer: "Plus适合个人使用,¥140/月。Team适合企业团队,¥210/月/席位,包含团队协作、数据隐私保护、管理控制台等企业级功能。最低2席位起订。",
    category: "套餐对比",
  },
  {
    question: "支付失败怎么办?",
    answer: "如遇支付问题,请联系在线客服。我们支持微信、支付宝、对公转账等多种方式。企业用户可选择对公转账并开具发票。",
    category: "支付问题",
  },
];

export default function RechargeTutorialPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        {/* 返回导航 */}
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

        {/* Hero区域 */}
        <section className="relative pt-16 pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-pink-500/10 px-4 py-1.5 text-sm font-semibold text-pink-500"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                官方代充教程
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                ChatGPT官方订阅代充服务
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                安全、快捷的ChatGPT Plus/Team官方订阅代充,支持企业批量购买和发票开具
              </motion.p>

              {/* 统计数据徽章 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                {statistics.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <Badge key={stat.label} variant="outline" className="px-3 py-1.5 text-sm">
                      <Icon className="w-3.5 h-3.5 mr-1.5" />
                      {stat.value} {stat.label}
                    </Badge>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tips提示区域 */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-4">
              {tips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Alert variant={tip.type as any}>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>{tip.title}</AlertTitle>
                    <AlertDescription>{tip.content}</AlertDescription>
                  </Alert>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 为什么选择我们 */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">为什么选择我们</h2>
              <p className="text-muted-foreground">专业、安全、高效的代充服务</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-500/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-pink-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 套餐对比 */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">套餐对比</h2>
                <p className="text-muted-foreground">根据使用场景选择合适的订阅计划</p>
              </div>
              <div className="grid gap-8 lg:grid-cols-2">
                {planComparison.map((plan, index) => (
                  <motion.div
                    key={plan.plan}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full p-8 relative">
                      {plan.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <Badge className="bg-pink-500 text-white px-4 py-1">
                            <Award className="w-3 h-3 mr-1" />
                            推荐
                          </Badge>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
                        <div className="text-3xl font-bold text-pink-600 mb-2">{plan.price}</div>
                        <Badge variant="outline">{plan.target}</Badge>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            功能特性
                          </div>
                          <ul className="space-y-2">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-sm">
                                <Check className="w-4 h-4 mt-0.5 text-pink-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            使用限制
                          </div>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation) => (
                              <li key={limitation} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                                <span>{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 支付方式 */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">支持的支付方式</h2>
                <p className="text-muted-foreground">多种支付方式，灵活选择</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {paymentMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={method.method}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-pink-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{method.method}</h3>
                            {method.popular && (
                              <Badge variant="secondary" className="text-xs mt-1">热门</Badge>
                            )}
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {method.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 mt-0.5 text-pink-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-12 text-center">代充流程</h2>
              <div className="space-y-8">
                {rechargeSteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-2 text-sm mb-4">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-pink-500/5 border border-pink-500/20">
                        <Lightbulb className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-pink-700 dark:text-pink-300">{item.tip}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">常见问题</h2>
                <p className="text-muted-foreground">关于代充服务的常见疑问解答</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <Card className="p-6 h-full">
                      <Badge variant="outline" className="mb-3">
                        {faq.category}
                      </Badge>
                      <h3 className="font-semibold mb-3 text-base">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-card via-card to-pink-500/5">
                <Badge className="mb-4 bg-pink-500/10 text-pink-500 border-pink-500/30">限时优惠</Badge>
                <h2 className="text-3xl font-bold mb-4">ChatGPT Plus 仅需 ¥140/月</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  官方渠道订阅,享受完整功能。企业用户支持批量购买和发票开具,提供专属客户经理服务。
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/products/recharge"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                  >
                    立即购买
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                  >
                    咨询客服
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold">推荐阅读</h2>
              <p className="text-muted-foreground">
                继续了解更多AI服务使用方法
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/tutorials/ai-platform"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  AI聚合平台使用教程
                </Link>
                <Link
                  href="/tutorials/api-gateway"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                >
                  API网关使用教程
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
