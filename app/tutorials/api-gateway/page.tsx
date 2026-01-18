"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import {
  Code,
  ArrowLeft,
  Key,
  Zap,
  Shield,
  BarChart,
  Check,
  Terminal,
  Copy,
  Lightbulb,
  AlertCircle,
  Info,
  CheckCircle2,
  Users,
  Clock
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const integrationSteps = [
  {
    title: "获取API密钥",
    description: "在控制台中创建项目并生成API密钥。支持多级权限控制,确保密钥安全。",
    items: [
      "注册并登录控制台",
      "创建新项目或选择现有项目",
      "生成API密钥(支持测试和生产环境)",
      "设置调用限额和访问权限",
    ],
    icon: Key,
    tip: "建议为不同环境创建独立的API密钥，测试环境key设置较低的调用限额",
  },
  {
    title: "快速接入",
    description: "使用统一的API格式,兼容OpenAI SDK,一行代码即可切换模型。",
    items: [
      "支持OpenAI SDK直接替换baseURL",
      "兼容Anthropic、Google等主流格式",
      "提供多语言SDK和示例代码",
      "完整的API文档和在线调试",
    ],
    icon: Zap,
    tip: "所有SDK都保持与官方接口100%兼容，无需修改现有代码逻辑",
  },
  {
    title: "安全与监控",
    description: "企业级安全防护,实时监控API调用状态和费用消耗。",
    items: [
      "HTTPS加密传输",
      "IP白名单和访问频率限制",
      "实时调用日志和告警",
      "异常检测和自动熔断",
    ],
    icon: Shield,
    tip: "启用IP白名单后，只有授权的IP才能调用API，大幅提升安全性",
  },
  {
    title: "数据统计",
    description: "详细的调用统计和费用分析,帮助优化AI使用成本。",
    items: [
      "按模型、时间维度统计调用量",
      "Token消耗和费用明细",
      "响应时间和成功率分析",
      "自定义报表导出",
    ],
    icon: BarChart,
    tip: "定期查看统计数据，识别高消耗接口并优化prompt以降低成本",
  },
];

const baseUrl = "https://api.pro365.top/v1";

const requestPresets = [
  {
    id: "standard",
    label: "标准对话",
    description: "常规请求，适合多数场景",
  },
  {
    id: "stream",
    label: "流式输出",
    description: "SSE 逐段返回，提升首字响应",
  },
  {
    id: "json",
    label: "结构化 JSON",
    description: "固定字段输出，便于解析",
  },
  {
    id: "vision",
    label: "多模态图像",
    description: "文本 + 图片理解",
  },
];

const modelVariants = [
  {
    id: "GPT-5",
    label: "GPT-5",
    model: "GPT-5",
    provider: "OpenAI",
    description: "高质量对话类场景",
  },
  {
    id: "claude-3-5-sonnet",
    label: "Claude 3.5 Sonnet",
    model: "claude-3-5-sonnet",
    provider: "Anthropic",
    description: "长文分析与写作",
  },
  {
    id: "gemini-2.0-flash",
    label: "Gemini 2.0 Flash",
    model: "gemini-2.0-flash",
    provider: "Google",
    description: "低延迟高并发",
  },
  {
    id: "deepseek-v3",
    label: "DeepSeek V3",
    model: "deepseek-v3",
    provider: "DeepSeek",
    description: "代码与数据推理",
  },
];

const buildPayload = (model: string, presetId: string) => {
  const baseMessages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "请用三句话介绍人工智能。" },
  ];

  if (presetId === "stream") {
    return {
      model,
      messages: baseMessages,
      temperature: 0.6,
      stream: true,
    };
  }

  if (presetId === "json") {
    return {
      model,
      messages: [
        { role: "system", content: "你是一个严格输出 JSON 的助手。" },
        {
          role: "user",
          content:
            "输出 JSON: {\"title\": \"\", \"summary\": \"\", \"tags\": []}，不要输出多余文字。",
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
    };
  }

  if (presetId === "vision") {
    return {
      model,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "描述图片的主要内容，并给出 3 个关键词。" },
            {
              type: "image_url",
              image_url: { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
            },
          ],
        },
      ],
      max_tokens: 300,
    };
  }

  return {
    model,
    messages: baseMessages,
    temperature: 0.7,
  };
};

const toPythonLiteral = (payload: any) =>
  JSON.stringify(payload, null, 2)
    .replace(/true/g, "True")
    .replace(/false/g, "False")
    .replace(/null/g, "None");

const buildPythonCode = (payloadPython: string, presetId: string) => {
  const header = `# 安装依赖
pip install openai

from openai import OpenAI

client = OpenAI(
  api_key="YOUR_API_KEY",
  base_url="${baseUrl}"
)

payload = ${payloadPython}
`;

  if (presetId === "stream") {
    return `${header}
stream = client.chat.completions.create(**payload)
for chunk in stream:
    delta = chunk.choices[0].delta
    if delta and delta.content:
        print(delta.content, end="", flush=True)
`;
  }

  return `${header}
response = client.chat.completions.create(**payload)
print(response.choices[0].message.content)`;
};

const buildNodeCode = (payloadJson: string, presetId: string) => {
  const header = `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "YOUR_API_KEY",
  baseURL: "${baseUrl}"
});

const payload = ${payloadJson};
`;

  if (presetId === "stream") {
    return `${header}
const stream = await client.chat.completions.create(payload);

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content ?? "");
}`;
  }

  return `${header}
const response = await client.chat.completions.create(payload);

console.log(response.choices[0].message.content);`;
};

const buildCurlCode = (payloadJson: string, presetId: string) => {
  const streamFlag = presetId === "stream" ? "-N " : "";
  const streamHeader =
    presetId === "stream" ? '  -H "Accept: text/event-stream" \\\n' : "";

  return `curl ${streamFlag}${baseUrl}/chat/completions \\
  -H "Content-Type: application/json" \\
${streamHeader}  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '${payloadJson}'`;
};

type CodeExampleParams = {
  model: string;
  presetId: string;
  payloadJson: string;
  payloadPython: string;
};

const codeExamples = [
  {
    language: "Python",
    title: "Python SDK 示例",
    code: ({ payloadPython, presetId }: CodeExampleParams) =>
      buildPythonCode(payloadPython, presetId),
  },
  {
    language: "JavaScript",
    title: "Node.js SDK 示例",
    code: ({ payloadJson, presetId }: CodeExampleParams) =>
      buildNodeCode(payloadJson, presetId),
  },
  {
    language: "cURL",
    title: "cURL 调用示例",
    code: ({ payloadJson, presetId }: CodeExampleParams) =>
      buildCurlCode(payloadJson, presetId),
  },
];

const supportedModels = [
  {
    name: "GPT-5 Turbo / GPT-5",
    provider: "OpenAI",
    features: ["强大推理", "代码生成", "多模态"],
    pricing: "¥0.1/千tokens",
    color: "emerald",
  },
  {
    name: "Claude-3.5 Sonnet / Opus",
    provider: "Anthropic",
    features: ["长文本", "创意写作", "安全性"],
    pricing: "¥0.08/千tokens",
    color: "blue",
  },
  {
    name: "Gemini-2.0 Pro / Flash",
    provider: "Google",
    features: ["多模态", "快速响应", "性价比"],
    pricing: "¥0.05/千tokens",
    color: "purple",
  },
  {
    name: "DeepSeek-V3",
    provider: "DeepSeek",
    features: ["代码能力", "中文友好", "超低价格"],
    pricing: "¥0.001/千tokens",
    color: "orange",
  },
  {
    name: "Qwen-Max / Plus",
    provider: "阿里云",
    features: ["中文优化", "企业级", "本地化"],
    pricing: "¥0.04/千tokens",
    color: "red",
  },
  {
    name: "GLM-4",
    provider: "智谱AI",
    features: ["多模态", "工具调用", "国产模型"],
    pricing: "¥0.03/千tokens",
    color: "indigo",
  },
];

const tips = [
  {
    type: "info",
    title: "💡 接入建议",
    content: "首次接入建议使用测试环境密钥进行调试，确认接口调用正常后再切换到生产环境。测试环境有免费额度供您体验所有模型。",
  },
  {
    type: "success",
    title: "🚀 性能优化",
    content: "对于高频调用场景，建议使用连接池复用HTTP连接。同时可以开启流式响应(stream=true)，提升用户体验并降低首字延迟。",
  },
  {
    type: "warning",
    title: "⚠️ 安全提示",
    content: "请勿将API密钥硬编码在前端代码或公开仓库中。推荐使用环境变量或密钥管理服务存储API密钥，并定期轮换更新。",
  },
];

const pricingComparison = [
  {
    scenario: "对话应用",
    tokensPerRequest: "500",
    requestsPerDay: "1000",
    recommendedModel: "GPT-5 Turbo",
    monthlyCost: "¥1,500",
  },
  {
    scenario: "代码生成",
    tokensPerRequest: "800",
    requestsPerDay: "500",
    recommendedModel: "DeepSeek-V3",
    monthlyCost: "¥12",
  },
  {
    scenario: "文档分析",
    tokensPerRequest: "3000",
    requestsPerDay: "200",
    recommendedModel: "Claude-3.5 Sonnet",
    monthlyCost: "¥1,440",
  },
  {
    scenario: "客服机器人",
    tokensPerRequest: "300",
    requestsPerDay: "5000",
    recommendedModel: "Gemini-2.0 Flash",
    monthlyCost: "¥2,250",
  },
];

const faqs = [
  {
    question: "如何切换不同的AI模型?",
    answer: "只需修改请求参数中的model字段即可。例如从'GPT-5-turbo'改为'claude-3-sonnet'，无需修改其他代码。我们的网关会自动适配不同模型的API格式。",
    category: "使用方法",
  },
  {
    question: "调用失败如何排查?",
    answer: "1) 检查API密钥是否正确；2) 确认账户余额充足；3) 查看错误码和错误信息；4) 检查请求参数格式是否正确。控制台提供详细的调用日志，可以查看每次请求的完整信息。",
    category: "故障排查",
  },
  {
    question: "是否支持流式响应?",
    answer: "是的，所有模型都支持流式响应(Server-Sent Events)。只需在请求中设置stream=true，即可实时获取AI生成的内容，提升用户体验。示例代码请参考开发文档。",
    category: "功能支持",
  },
  {
    question: "如何控制API调用成本?",
    answer: "1) 在控制台设置每日/每月消费上限；2) 选择性价比更高的模型如DeepSeek；3) 优化prompt减少无效token；4) 使用缓存机制避免重复调用；5) 定期查看费用报表识别异常消耗。",
    category: "成本优化",
  },
];

const statistics = [
  {
    value: "50+",
    label: "支持AI模型",
    icon: Code,
  },
  {
    value: "99.99%",
    label: "服务可用性",
    icon: CheckCircle2,
  },
  {
    value: "<100ms",
    label: "平均响应延迟",
    icon: Clock,
  },
  {
    value: "10万+",
    label: "开发者用户",
    icon: Users,
  },
];

export default function APIGatewayTutorialPage() {
  const [activeLanguage, setActiveLanguage] = useState(codeExamples[0].language);
  const [activeModel, setActiveModel] = useState(modelVariants[0].id);
  const [activePreset, setActivePreset] = useState(requestPresets[0].id);
  const [copied, setCopied] = useState(false);

  const activeExample =
    codeExamples.find((example) => example.language === activeLanguage) ?? codeExamples[0];
  const activeModelConfig =
    modelVariants.find((model) => model.id === activeModel) ?? modelVariants[0];
  const activePresetConfig =
    requestPresets.find((preset) => preset.id === activePreset) ?? requestPresets[0];
  const payload = buildPayload(activeModelConfig.model, activePresetConfig.id);
  const payloadJson = JSON.stringify(payload, null, 2);
  const payloadPython = toPythonLiteral(payload);
  const codeSnippet = activeExample.code({
    model: activeModelConfig.model,
    presetId: activePresetConfig.id,
    payloadJson,
    payloadPython,
  });

  useEffect(() => {
    setCopied(false);
  }, [activeLanguage, activeModel, activePreset]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      setCopied(false);
    }
  };

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
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-500"
              >
                <Code className="mr-2 h-4 w-4" />
                API网关使用教程
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                一行代码接入50+AI模型
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                统一API格式,兼容OpenAI SDK,快速接入GPT-5、Claude、Gemini等主流大模型
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

        {/* 接入流程 */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">接入流程</h2>
              <p className="text-muted-foreground">四步完成API网关接入,开始使用AI能力</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {integrationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-violet-500" />
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                      <ul className="space-y-2 text-sm text-foreground mb-4">
                        {step.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 text-violet-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-violet-500/5 border border-violet-500/20">
                        <Lightbulb className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-violet-700 dark:text-violet-300">{step.tip}</p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 代码示例 */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">代码示例</h2>
                <p className="text-muted-foreground">多语言 + 多场景 + 多模型调用格式，一键切换即可查看</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden border-border/60 bg-background/80 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)]">
                  <div className="flex flex-col gap-5 border-b border-border/60 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6 text-slate-100">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-rose-500" />
                        <span className="h-3 w-3 rounded-full bg-amber-400" />
                        <span className="h-3 w-3 rounded-full bg-emerald-500" />
                        <span className="ml-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                          API Gateway Playground
                        </span>
                      </div>
                      <Badge variant="outline" className="border-slate-700 text-slate-200">
                        base_url: {baseUrl}
                      </Badge>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">语言</p>
                        <div className="flex flex-wrap items-center gap-2">
                          {codeExamples.map((example) => (
                            <button
                              key={example.language}
                              type="button"
                              aria-pressed={activeLanguage === example.language}
                              onClick={() => setActiveLanguage(example.language)}
                              className={
                                activeLanguage === example.language
                                  ? "rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(148,163,184,0.35)]"
                                  : "rounded-full border border-white/15 px-4 py-1.5 text-sm text-slate-300 transition hover:text-white hover:border-white/40"
                              }
                            >
                              {example.language}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">调用场景</p>
                        <div className="flex flex-wrap items-center gap-2">
                          {requestPresets.map((preset) => (
                            <button
                              key={preset.id}
                              type="button"
                              aria-pressed={activePreset === preset.id}
                              onClick={() => setActivePreset(preset.id)}
                              className={
                                activePreset === preset.id
                                  ? "rounded-full bg-violet-500/20 px-4 py-1.5 text-sm font-semibold text-violet-100 shadow-[0_0_0_1px_rgba(167,139,250,0.5)]"
                                  : "rounded-full border border-white/15 px-4 py-1.5 text-sm text-slate-300 transition hover:text-white hover:border-white/40"
                              }
                            >
                              {preset.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">模型</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {modelVariants.map((model) => (
                          <button
                            key={model.id}
                            type="button"
                            aria-pressed={activeModel === model.id}
                            onClick={() => setActiveModel(model.id)}
                            className={
                              activeModel === model.id
                                ? "rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(148,163,184,0.35)]"
                                : "rounded-full border border-white/15 px-4 py-1.5 text-sm text-slate-300 transition hover:text-white hover:border-white/40"
                            }
                          >
                            {model.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <Badge variant="outline" className="border-slate-700 text-slate-300">
                        {activeModelConfig.provider}
                      </Badge>
                      <span>{activeModelConfig.description}</span>
                      <span>·</span>
                      <span>{activePresetConfig.description}</span>
                    </div>
                    {(activePresetConfig.id === "json" || activePresetConfig.id === "vision") && (
                      <div className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
                        <AlertCircle className="mt-0.5 h-4 w-4 text-amber-300" />
                        <span>
                          {activePresetConfig.id === "json"
                            ? "结构化输出需要模型支持 JSON 格式或函数/工具能力。"
                            : "多模态示例需要模型支持图像理解能力。"}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="grid gap-6 p-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-900/80 bg-slate-950">
                      <pre className="p-6 text-sm text-slate-100 overflow-x-auto">
                        <code>{codeSnippet}</code>
                      </pre>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20"
                      >
                        <Copy className="h-3.5 w-3.5" />
                        {copied ? "已复制" : "复制"}
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-slate-900/80 bg-slate-950/80 p-4 text-slate-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                            请求信息
                          </span>
                          <Badge variant="outline" className="border-slate-700 text-slate-200">
                            POST
                          </Badge>
                        </div>
                        <div className="mt-4 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Endpoint</span>
                            <span className="font-medium text-slate-200">/chat/completions</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Model</span>
                            <span className="font-medium text-slate-200">{activeModelConfig.model}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Mode</span>
                            <span className="font-medium text-slate-200">{activePresetConfig.label}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Stream</span>
                            <span className="font-medium text-slate-200">
                              {"stream" in payload ? "是" : "否"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-border/60 bg-muted/20">
                        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 text-xs text-muted-foreground">
                          <span className="uppercase tracking-[0.2em]">请求体预览</span>
                          <Badge variant="outline">JSON</Badge>
                        </div>
                        <pre className="p-4 text-xs text-muted-foreground overflow-x-auto">
                          <code>{payloadJson}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 bg-muted/40 px-6 py-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-violet-500" />
                      <span>{activeExample.title}</span>
                    </div>
                    <span>切换模型仅需修改 model 字段，接口格式保持一致。</span>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 支持的AI模型 */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">支持的AI模型</h2>
                <p className="text-muted-foreground">聚合全球主流大模型，一个接口调用所有AI</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {supportedModels.map((model, index) => (
                  <motion.div
                    key={model.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                      <div className="space-y-3">
                        <div>
                          <Badge variant="outline" className="mb-2">{model.provider}</Badge>
                          <h3 className="font-semibold text-lg">{model.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {model.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-border">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">定价</span>
                            <span className="font-semibold text-violet-600">{model.pricing}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 成本估算 */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">成本估算参考</h2>
                <p className="text-muted-foreground">不同应用场景的月度成本预估</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">应用场景</th>
                      <th className="text-left p-4 font-semibold">平均Tokens/次</th>
                      <th className="text-left p-4 font-semibold">日调用量</th>
                      <th className="text-left p-4 font-semibold">推荐模型</th>
                      <th className="text-right p-4 font-semibold">月度成本</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingComparison.map((item, index) => (
                      <motion.tr
                        key={item.scenario}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <td className="p-4 font-medium">{item.scenario}</td>
                        <td className="p-4 text-muted-foreground">{item.tokensPerRequest}</td>
                        <td className="p-4 text-muted-foreground">{item.requestsPerDay}</td>
                        <td className="p-4">
                          <Badge variant="outline">{item.recommendedModel}</Badge>
                        </td>
                        <td className="p-4 text-right font-semibold text-violet-600">{item.monthlyCost}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-violet-500/5 border border-violet-500/20">
                <p className="text-sm text-muted-foreground">
                  <Info className="w-4 h-4 inline mr-2 text-violet-600" />
                  以上成本为估算值，实际费用取决于具体的token消耗量。选择合适的模型可以大幅降低成本。
                </p>
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
                <p className="text-muted-foreground">关于API网关的常见疑问解答</p>
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
                  href="/tutorials/ai-platform"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  AI聚合平台使用教程
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
