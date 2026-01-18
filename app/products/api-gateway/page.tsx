"use client";

import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Code2, Terminal, Zap, Shield, BarChart3, ArrowRight, Sparkles, Rocket, Clock, DollarSign, TrendingUp, Globe, Lock, Activity, ChevronRight, Stars, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "一键接入 Claude Code、GPT-5 Turbo、Gemini 等 50+ 主流模型 API",
  "统一 API 格式，兼容 OpenAI SDK，无缝迁移现有代码",
  "按实际调用量计费，支持充值额度包与企业定制预算",
  "实时监控 QPS、延迟、成功率、Token 消耗，精准成本把控",
  "多环境密钥隔离、IP 白名单、专用网关，满足合规安全需求",
];

const pricingTiers = [
  {
    name: "入门版",
    price: "¥1,000",
    description: "适合个人开发者与小型项目",
    features: ["50+ 主流模型", "基础监控面板", "7x24 小时支持"],
  },
  {
    name: "专业版",
    price: "¥5,000",
    description: "适合团队研发与中型企业",
    features: ["赠送 50% 额度", "高级监控与告警", "专属技术顾问", "多环境隔离"],
    highlight: true,
  },
  {
    name: "企业版",
    price: "定制",
    description: "适合大规模生产与企业级应用",
    features: ["专用网关", "SLA 保障", "联合研发", "数据合规支持"],
  },
];

const claudeCodeHighlights = [
  {
    icon: Rocket,
    title: "5分钟快速配置",
    description: "无需复杂环境搭建，按照文档步骤即可完成Claude Code插件配置",
  },
  {
    icon: Globe,
    title: "多模型自由切换",
    description: "支持GPT-5、Claude 3.5、Gemini等主流模型，灵活选择最优方案",
  },
  {
    icon: Activity,
    title: "完整调用日志",
    description: "Token消耗统计与成本透明可控，实时监控每次API调用详情",
  },
  {
    icon: Code2,
    title: "无缝工具集成",
    description: "与Cursor、Continue、VSCode等AI编程工具完美兼容",
  },
];

const claudeCodeStats = [
  { value: "5分钟", label: "快速配置", icon: Clock },
  { value: "50+", label: "支持模型", icon: Stars },
  { value: "<100ms", label: "平均延迟", icon: Zap },
  { value: "99.9%", label: "可用性", icon: TrendingUp },
];

export default function APIGatewayPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/35 via-teal-50/25 to-background dark:from-emerald-500/5 dark:via-background dark:to-background" />
          <div className="absolute inset-y-0 right-[15%] hidden h-80 w-80 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-100/25 blur-3xl lg:block dark:opacity-0" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Badge className="w-fit bg-primary/10 text-primary">统一 API 网关</Badge>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                >
                  一行代码接入，灵活按量计费
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  通过统一的 RESTful API 网关，您只需几分钟就能将 GPT-5、Claude、Gemini 等主流大模型集成到您的应用中。
                  支持开发、测试、生产多环境配置，适配个人项目、团队研发与企业级系统。
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button size="lg" className="gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all group">
                    立即充值额度
                    <Code2 className="h-4 w-4 group-hover:rotate-6 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all group">
                    查看 API 文档
                    <Terminal className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                <Card className="rounded-3xl border border-border/60 bg-card/50 p-8 shadow-xl backdrop-blur hover:shadow-2xl transition-shadow duration-500">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-primary" />
                      核心优势
                    </h2>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      {features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                          className="flex items-start gap-3 group"
                        >
                          <Check className="mt-1 h-4 w-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="group-hover:text-foreground transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="mt-8 rounded-2xl bg-muted/50 p-5 space-y-3 border border-border/40"
                  >
                    <p className="text-sm font-semibold flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-emerald-600" />
                      快速开始
                    </p>
                    <pre className="overflow-x-auto rounded-lg bg-background/60 p-3 text-xs border border-border/30">
{`import openai

client = openai.OpenAI(
  base_url="https://api.yourgateway.com/v1",
  api_key="YOUR_API_KEY"
)

response = client.chat.completions.create(
  model="gpt-5.2",
  messages=[{"role": "user", "content": "Hello"}]
)`}
                    </pre>
                  </motion.div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Claude Code Section - 重构优化 */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-50/30 via-background to-background dark:from-violet-950/10 dark:via-background dark:to-background" />
          <div className="absolute top-20 right-[10%] w-96 h-96 bg-violet-300/20 rounded-full blur-3xl dark:bg-violet-600/10" />
          <div className="absolute bottom-20 left-[10%] w-80 h-80 bg-purple-300/20 rounded-full blur-3xl dark:bg-purple-600/10" />

          <div className="container relative mx-auto px-4">
            {/* 标题部分 */}
            <div className="text-center mb-12 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              >
                <Sparkles className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Claude Code 专属接入
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              >
                5分钟配置Claude Code
                <br />
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  解锁AI编程助手全部能力
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                通过我们的API网关，在VS Code、Cursor、Continue等开发环境中快速接入Claude Code，
                享受代码补全、重构、调试等智能编程体验。无需科学上网，稳定低延迟。
              </motion.p>
            </div>

            {/* 统计数据徽章 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
            >
              {claudeCodeStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={stat.label}
                    className="p-4 text-center bg-gradient-to-br from-background to-violet-50/30 dark:to-violet-950/20 border-violet-200/60 dark:border-violet-800/30"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-violet-600 dark:text-violet-400" />
                    <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </Card>
                );
              })}
            </motion.div>

            {/* 主要内容区域 */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* 左侧：功能亮点 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Card className="p-8 border-violet-200/60 dark:border-violet-800/30 bg-gradient-to-br from-background via-violet-50/20 to-background dark:from-background dark:via-violet-950/10 dark:to-background">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-8 bg-gradient-to-b from-violet-600 to-purple-600 rounded-full" />
                    核心功能亮点
                  </h3>
                  <div className="space-y-6">
                    {claudeCodeHighlights.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                          className="flex gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1.5">{item.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* CTA按钮 */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-border">
                    <Button
                      asChild
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/25"
                    >
                      <Link href="/products/api-gateway/claude-code" className="gap-2">
                        查看完整接入流程
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="flex-1 border-violet-300 dark:border-violet-700">
                      <Link href="#pricing">
                        立即充值使用
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* 右侧：为什么选择我们 */}
              <div className="space-y-6">
                {/* 优势卡片1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Card className="p-6 border-border/60 bg-background/80 backdrop-blur hover:shadow-xl hover:border-emerald-500/30 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">国内直连，无需翻墙</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        我们在国内部署高速节点，延迟低至50ms，告别科学上网的不稳定。
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs group-hover:bg-emerald-500/10 transition-colors">
                          <Zap className="w-3 h-3 mr-1" />
                          低延迟
                        </Badge>
                        <Badge variant="secondary" className="text-xs group-hover:bg-emerald-500/10 transition-colors">
                          <Shield className="w-3 h-3 mr-1" />
                          高稳定
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

                {/* 优势卡片2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Card className="p-6 border-border/60 bg-background/80 backdrop-blur hover:shadow-xl hover:border-blue-500/30 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">多模型切换，灵活调度</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        支持Claude 4.5、GPT-5、Gemini-3-Pro等模型，根据任务自动选择最优方案。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-colors">Claude 4.5</Badge>
                        <Badge variant="outline" className="text-xs group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-colors">GPT-5</Badge>
                        <Badge variant="outline" className="text-xs group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-colors">Gemini</Badge>
                        <Badge variant="outline" className="text-xs group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-colors">+更多</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

                {/* 优势卡片3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Card className="p-6 border-border/60 bg-background/80 backdrop-blur hover:shadow-xl hover:border-amber-500/30 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <DollarSign className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">按量计费，成本透明</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        只为实际调用付费，后台实时查看每次请求的Token消耗与成本明细。
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs group-hover:bg-amber-500/10 transition-colors">
                          <Activity className="w-3 h-3 mr-1" />
                          实时监控
                        </Badge>
                        <Badge variant="secondary" className="text-xs group-hover:bg-amber-500/10 transition-colors">
                          <BarChart3 className="w-3 h-3 mr-1" />
                          成本分析
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

                {/* 底部提示 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="p-5 rounded-xl bg-gradient-to-r from-violet-500/5 to-purple-500/5 border border-violet-200/40 dark:border-violet-800/40 hover:shadow-md hover:border-violet-300/60 dark:hover:border-violet-700/60 transition-all">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        企业级安全保障
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        支持IP白名单、密钥加密、访问审计等安全策略，满足金融、政务等行业合规要求。
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4" variant="outline">核心能力</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">为什么选择我们的 API 网关</h2>
              <p className="text-lg text-muted-foreground">
                专业、稳定、易用的大模型 API 中转服务
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Card className="bg-background rounded-2xl p-6 border border-border/60 hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    极速响应
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    全球多节点部署，智能路由选择最优线路，平均响应时间小于 100ms，保障应用流畅体验。
                  </p>
                  <div className="mt-4 pt-4 border-t border-border group-hover:border-emerald-500/30 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 transition-colors">
                    <Activity className="w-4 h-4 group-hover:animate-pulse" />
                    <span className="font-medium">99.9% SLA 保证</span>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Card className="bg-background rounded-2xl p-6 border border-border/60 hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    企业级安全
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    支持 IP 白名单、密钥加密、访问审计等安全策略，满足金融、政务等行业合规要求。
                  </p>
                  <div className="mt-4 pt-4 border-t border-border group-hover:border-blue-500/30 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 transition-colors">
                    <Lock className="w-4 h-4 group-hover:animate-pulse" />
                    <span className="font-medium">SOC2 Type II 认证</span>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Card className="bg-background rounded-2xl p-6 border border-border/60 hover:shadow-xl hover:border-violet-500/40 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <BarChart3 className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    实时监控
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    可视化监控面板，实时查看调用量、成功率、延迟、成本等关键指标，精准掌控运营状况。
                  </p>
                  <div className="mt-4 pt-4 border-t border-border group-hover:border-violet-500/30 flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400 transition-colors">
                    <TrendingUp className="w-4 h-4 group-hover:animate-pulse" />
                    <span className="font-medium">秒级数据更新</span>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-violet-500/10 border-primary/20" variant="outline">
                <DollarSign className="w-3 h-3 mr-1" />
                灵活定价
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">灵活的计费方案</h2>
              <p className="text-lg text-muted-foreground">
                按需充值，按量计费，透明实惠
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`rounded-2xl p-8 border group ${
                    tier.highlight
                      ? "border-primary bg-gradient-to-br from-primary/5 via-background to-violet-500/5 shadow-xl shadow-primary/10 scale-105 relative"
                      : "border-border/60 bg-background hover:shadow-xl hover:border-primary/40 transition-all duration-300"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-violet-600 text-white shadow-lg">
                        <Stars className="w-3 h-3 mr-1" />
                        推荐方案
                      </Badge>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                    {tier.name}
                    {tier.highlight && <Sparkles className="w-5 h-5 text-primary" />}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2 flex items-baseline gap-1 group-hover:scale-105 transition-transform">
                    {tier.price}
                    {tier.price !== "定制" && <span className="text-sm text-muted-foreground font-normal">起</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 min-h-[2.5rem]">{tier.description}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 group/item">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm leading-relaxed group-hover/item:text-foreground transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      tier.highlight
                        ? "bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-700 shadow-lg shadow-primary/25"
                        : "group-hover:border-primary/60 group-hover:bg-primary/5 transition-all"
                    }`}
                    variant={tier.highlight ? "default" : "outline"}
                  >
                    {tier.price === "定制" ? (
                      <>
                        <Users className="w-4 h-4 mr-2" />
                        联系商务
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        立即充值
                      </>
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                所有方案均支持 7x24 小时技术支持和 99.9% SLA 保障
              </p>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
