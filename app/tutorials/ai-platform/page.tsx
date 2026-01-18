"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowLeft,
  MessageSquare,
  Image as ImageIcon,
  Video,
  FileText,
  Check,
  TrendingUp,
  Users,
  Zap,
  Star,
  Info,
  Lightbulb,
  AlertCircle,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const platformFeatures = [
  {
    title: "AI对话助手",
    description: "使用GPT-5、Claude、Gemini等顶级模型进行智能对话,支持多轮上下文理解。",
    items: [
      "支持GPT-5、Claude-3.5、Gemini-2.0等主流模型",
      "上下文记忆,理解复杂多轮对话",
      "自定义角色设定和提示词",
      "导出对话历史为Markdown或PDF",
    ],
    icon: MessageSquare,
    color: "emerald",
  },
  {
    title: "AI绘画创作",
    description: "使用Midjourney、DALL-E、Stable Diffusion生成高质量图像。",
    items: [
      "Midjourney V6最新版本",
      "DALL-E 3高清图像生成",
      "图生图、局部重绘功能",
      "风格迁移和艺术化处理",
    ],
    icon: ImageIcon,
    color: "blue",
  },
  {
    title: "视频生成",
    description: "AI视频生成工具,从文字到视频一键创作。",
    items: [
      "文本转视频(Text-to-Video)",
      "图片转视频动画",
      "视频风格转换",
      "自动字幕和配音",
    ],
    icon: Video,
    color: "purple",
  },
  {
    title: "PPT与文档",
    description: "智能生成演示文稿和专业文档,提升工作效率。",
    items: [
      "一键生成PPT大纲和内容",
      "智能排版和设计建议",
      "文档自动摘要和润色",
      "多种模板风格选择",
    ],
    icon: FileText,
    color: "orange",
  },
];

const usageSteps = [
  {
    step: "01",
    title: "选择功能模块",
    description: "登录平台后,在主界面选择您需要的功能:对话、绘画、视频或文档。",
    tip: "首次使用建议从对话功能开始熟悉平台操作",
  },
  {
    step: "02",
    title: "选择AI模型",
    description: "根据任务特点选择最适合的AI模型,不同模型有不同的特长。",
    tip: "GPT-5适合复杂推理，Claude擅长长文本，Gemini多模态能力强",
  },
  {
    step: "03",
    title: "输入需求",
    description: "详细描述您的需求,提供越详细的描述,AI生成的结果越精准。",
    tip: "使用结构化的提示词可以获得更好的结果",
  },
  {
    step: "04",
    title: "调整与优化",
    description: "查看生成结果,可以进行二次编辑、调整参数或重新生成。",
    tip: "善用历史记录功能，对比不同版本的输出",
  },
];

const statistics = [
  {
    value: "10+",
    label: "国际主流AI模型",
    icon: Sparkles,
  },
  {
    value: "100万+",
    label: "累计服务用户",
    icon: Users,
  },
  {
    value: "99.9%",
    label: "服务可用性",
    icon: TrendingUp,
  },
  {
    value: "24/7",
    label: "在线技术支持",
    icon: Zap,
  },
];

const modelComparison = [
  {
    model: "GPT-5 Turbo",
    strengths: ["复杂推理", "代码生成", "数学问题"],
    weaknesses: ["价格较高", "响应速度中等"],
    bestFor: "需要强大推理能力的任务",
    status: "recommended",
  },
  {
    model: "Claude-3.5 Sonnet",
    strengths: ["长文本处理", "创意写作", "安全性高"],
    weaknesses: ["多模态能力较弱"],
    bestFor: "长文档分析和创意内容生成",
    status: "recommended",
  },
  {
    model: "Gemini-2.0 Pro",
    strengths: ["多模态理解", "响应速度快", "性价比高"],
    weaknesses: ["中文能力略弱"],
    bestFor: "图文混合内容处理",
    status: "popular",
  },
  {
    model: "DeepSeek-V3",
    strengths: ["性价比极高", "代码能力强", "中文友好"],
    weaknesses: ["创意能力一般"],
    bestFor: "预算有限的开发和编程任务",
    status: "value",
  },
];

const tips = [
  {
    type: "success",
    title: "💡 最佳实践",
    content: "使用AI对话时，建议将复杂任务拆分成多个步骤，逐步引导AI完成。这样可以获得更准确的结果，同时便于调试和优化。",
  },
  {
    type: "info",
    title: "📝 提示词技巧",
    content: "描述需求时，遵循\"角色-任务-格式-约束\"的结构。例如：你是一位资深文案策划(角色)，请为新产品撰写宣传文案(任务)，要求使用markdown格式(格式)，字数300字以内(约束)。",
  },
  {
    type: "warning",
    title: "⚠️ 注意事项",
    content: "AI生成的内容仅供参考，重要文档和代码请务必人工审核。涉及敏感信息、隐私数据或商业机密时，请谨慎使用AI工具。",
  },
];

const faqs = [
  {
    question: "平台支持哪些AI模型?如何选择?",
    answer: "我们聚合了GPT-5、Claude-3.5、Gemini-2.0、DeepSeek-V3等10+主流模型。选择建议：复杂推理用GPT-5，长文本用Claude，多模态用Gemini，预算有限用DeepSeek。所有模型都可以免费试用。",
    category: "模型选择",
  },
  {
    question: "如何提高AI生成内容的质量?",
    answer: "1) 提供详细清晰的需求描述；2) 使用结构化提示词；3) 分步骤引导而非一次性提出复杂要求；4) 善用示例说明期望的输出格式；5) 多次迭代优化，利用平台的历史记录功能对比不同版本。",
    category: "使用技巧",
  },
  {
    question: "生成的图片/视频版权归谁?",
    answer: "使用我们平台生成的所有内容(文字、图片、视频)版权归用户所有。您可以自由使用这些内容进行商业或非商业用途，但请确保生成内容符合当地法律法规和平台使用条款。",
    category: "版权问题",
  },
  {
    question: "平台收费标准是什么?",
    answer: "我们采用按量计费模式，新用户赠送¥10体验金。不同模型价格不同：GPT-5约¥0.1/千tokens，Claude约¥0.08/千tokens，DeepSeek仅¥0.001/千tokens。企业用户可申请套餐优惠，最高节省40%费用。",
    category: "计费问题",
  },
];

const imageTextSections = [
  {
    title: "多场景应用示例",
    subtitle: "AI聚合平台在不同领域的实际应用",
    items: [
      {
        image: "/placeholder-chat.svg",
        title: "智能客服助手",
        description: "使用GPT-5搭建24/7在线客服，自动回答常见问题，识别客户意图，提供个性化服务推荐。相比传统客服，响应速度提升80%，人力成本降低60%。",
        tags: ["客户服务", "自动化", "成本优化"],
      },
      {
        image: "/placeholder-design.svg",
        title: "内容创作工作流",
        description: "从创意构思、文案撰写、配图生成到视频制作，一站式完成内容创作。某自媒体团队使用后，内容产出效率提升3倍，创意多样性显著增加。",
        tags: ["内容营销", "创意设计", "效率提升"],
      },
      {
        image: "/placeholder-code.svg",
        title: "代码开发辅助",
        description: "利用Claude和GPT-5进行代码生成、bug修复、文档撰写和代码审查。开发团队反馈：routine任务耗时减少50%，可以专注于核心业务逻辑开发。",
        tags: ["软件开发", "代码生成", "技术文档"],
      },
    ],
  },
];

export default function AIPlatformTutorialPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-500"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                AI聚合平台使用教程
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                一站式AI创作工作台
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                学习如何使用AI聚合平台进行对话、绘画、视频、PPT等多模态创作,释放AI生产力
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

        {/* 核心功能介绍 */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">核心功能介绍</h2>
              <p className="text-muted-foreground">聚合10+国际主流AI模型,满足各类创作需求</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {platformFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 text-${feature.color}-500`} style={{ color: `var(--${feature.color})` }} />
                        </div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                      <ul className="space-y-2 text-sm text-foreground">
                        {feature.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                            <span>{item}</span>
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

        {/* 模型对比表格 */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">AI模型对比指南</h2>
                <p className="text-muted-foreground">根据任务特点选择最适合的模型，提升工作效率</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {modelComparison.map((model, index) => (
                  <motion.div
                    key={model.model}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold">{model.model}</h3>
                        {model.status === "recommended" && (
                          <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-500/30">
                            <Star className="w-3 h-3 mr-1" />
                            推荐
                          </Badge>
                        )}
                        {model.status === "popular" && (
                          <Badge className="bg-blue-500/10 text-blue-700 border-blue-500/30">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            热门
                          </Badge>
                        )}
                        {model.status === "value" && (
                          <Badge className="bg-orange-500/10 text-orange-700 border-orange-500/30">
                            <Zap className="w-3 h-3 mr-1" />
                            高性价比
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-3 mb-4">
                        <div>
                          <div className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            优势
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {model.strengths.map((strength) => (
                              <Badge key={strength} variant="outline" className="text-xs">
                                {strength}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-1">
                            <XCircle className="w-4 h-4" />
                            局限
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {model.weaknesses.map((weakness) => (
                              <Badge key={weakness} variant="outline" className="text-xs text-muted-foreground">
                                {weakness}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-border">
                        <div className="text-sm">
                          <span className="text-muted-foreground">适用场景：</span>
                          <span className="ml-2 font-medium">{model.bestFor}</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 图文混排 - 应用场景 */}
        {imageTextSections.map((section, sectionIndex) => (
          <section key={section.title} className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  <p className="text-muted-foreground">{section.subtitle}</p>
                </div>
                <div className="space-y-12">
                  {section.items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                    >
                      {/* 图片占位符 */}
                      <div className="w-full lg:w-1/2">
                        <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-border flex items-center justify-center overflow-hidden">
                          <div className="text-center p-8">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                              <ImageIcon className="w-8 h-8 text-emerald-500" />
                            </div>
                            <p className="text-sm text-muted-foreground">示例图片占位符</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.image}</p>
                          </div>
                        </div>
                      </div>

                      {/* 文字内容 */}
                      <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* 快速上手流程 */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-12 text-center">快速上手流程</h2>
              <div className="space-y-8">
                {usageSteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                        <Lightbulb className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-emerald-700 dark:text-emerald-300">{item.tip}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 常见问题 */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">常见问题</h2>
                <p className="text-muted-foreground">关于AI聚合平台使用的常见疑问解答</p>
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

        {/* 推荐阅读 */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold">推荐阅读</h2>
              <p className="text-muted-foreground">
                继续了解更多AI服务使用方法
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/tutorials/api-gateway"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  API网关使用教程
                </Link>
                <Link
                  href="/tutorials/recharge"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                >
                  官方代充教程
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
