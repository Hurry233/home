"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Key,
  Plug,
  Sliders,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  PlayCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";
import Link from "next/link";

type ZoomImage = {
  src: string;
  alt: string;
};

type ZoomableImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  onOpen: (image: ZoomImage) => void;
};

const isGifSource = (src: string) => /\.gif($|\?)/i.test(src);

const ZoomableImage = ({
  src,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  imageClassName = "",
  onOpen,
}: ZoomableImageProps) => {
  const isGif = isGifSource(src);
  return (
    <button
      type="button"
      className={`group relative overflow-hidden focus:outline-none ${className}`}
      onClick={() => onOpen({ src, alt })}
      aria-label={`放大查看：${alt}`}
    >
      {isGif ? (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageClassName}`}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${imageClassName}`}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute right-2 top-2 rounded-full bg-black/60 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        放大
      </span>
    </button>
  );
};

const platformTags = [
  "OpenAI 兼容客户端",
  "工作流平台",
  "私有化部署 UI",
  "低代码工具",
  "自研应用",
];

const platformRecommendations = [
  {
    name: "Chatbox 桌面客户端",
    url: "https://chatboxai.app",
    advantage: "轻量桌面体验，支持 OpenAI 兼容 API 与多模型切换。",
    screenshots: [
      "/images/tutorials/api-key-usage/conversation-gpt-5.svg",
      "/images/tutorials/api-key-usage/conversation-claude.svg",
      "/images/tutorials/api-key-usage/conversation-gemini.svg",
    ],
  },
  {
    name: "OpenWebUI",
    url: "https://openwebui.com",
    advantage: "适合团队部署，提供权限管理与模型路由能力。",
    screenshots: [
      "/images/tutorials/api-key-usage/conversation-claude.svg",
      "/images/tutorials/api-key-usage/conversation-gemini.svg",
      "/images/tutorials/api-key-usage/conversation-gpt-5.svg",
    ],
  },
  {
    name: "LobeChat",
    url: "https://lobehub.com",
    advantage: "界面精致，插件生态丰富，便于模板化对话。",
    screenshots: [
      "/images/tutorials/api-key-usage/conversation-gemini.svg",
      "/images/tutorials/api-key-usage/conversation-gpt-5.svg",
      "/images/tutorials/api-key-usage/conversation-claude.svg",
    ],
  },
  {
    name: "Cherry Studio",
    url: "https://cherry-ai.com",
    advantage: "桌面端一体化，适合多项目密钥管理与快速切换。",
    screenshots: [
      "/images/tutorials/api-key-usage/conversation-gpt-5.svg",
      "/images/tutorials/api-key-usage/conversation-claude.svg",
      "/images/tutorials/api-key-usage/conversation-gemini.svg",
    ],
  },
];

const integrationSteps = [
  {
    title: "生成 GPTW API Key",
    description: "在控制台创建项目并生成密钥，建议区分测试与生产环境。",
    items: [
      "进入控制台创建或选择项目",
      "为不同环境生成独立密钥",
      "复制密钥并妥善保存",
      "设置调用限额与访问权限",
    ],
    icon: Key,
  },
  {
    title: "接入第三方平台",
    description: "在第三方平台或客户端中完成 API 配置，保持 OpenAI 兼容格式。",
    items: [
      "找到 API/模型配置入口",
      "填写 Base URL 与 API Key",
      "保存配置并发起测试请求",
      "确认响应内容与状态",
    ],
    icon: Plug,
  },
  {
    title: "选择模型并对话",
    description: "在同一平台内切换多模型，对比不同模型的对话效果。",
    items: [
      "选择 GPT-5 Pro/Claude-4.5/Gemini-2.5 Pro",
      "按场景切换模型提高效率",
      "支持流式响应优化体验",
      "记录对话与成本表现",
    ],
    icon: Sliders,
  },
  {
    title: "监控与优化",
    description: "通过日志与统计数据持续优化调用策略与成本。",
    items: [
      "查看调用日志与失败原因",
      "调整温度、Top_p 等参数",
      "为不同应用拆分密钥",
      "定期轮换 API Key",
    ],
    icon: Sparkles,
  },
];

const latestModels = [
  {
    badge: "通用",
    label: "通用大模型",
    note: "覆盖主流对话与推理场景",
    models: [
      {
        name: "GPT-5 Pro",
        logoSrc: "/logos/gpt.svg",
        detail: "擅长复杂推理、结构化输出与决策支持。",
      },
      {
        name: "Claude-4.5 Sonnet",
        logoSrc: "/logos/claude.svg",
        detail: "文风稳定，适合长文本与创意写作。",
      },
      {
        name: "Gemini-2.5 Pro",
        logoSrc: "/logos/gemini.svg",
        detail: "多模态与检索场景表现稳定。",
      },
    ],
  },
  {
    badge: "图片",
    label: "图片生成模型",
    note: "用于图像创作与设计",
    models: [
      {
        name: "Midjourney V6",
        logoSrc: "/logos/midjourney.svg",
        detail: "高质感视觉风格，适合品牌与海报。",
      },
      {
        name: "Flux Pro",
        logoSrc: "/logos/flux.svg",
        detail: "风格稳定，适合批量图像生成。",
      },
      {
        name: "Nano-banana",
        logoSrc: "/logos/nano-banana.svg",
        detail: "轻量高效，适合快速出图与草案。",
      },
    ],
  },
  {
    badge: "视频",
    label: "视频生成模型",
    note: "用于视频创作与剪辑",
    models: [
      {
        name: "Sora",
        logoSrc: "/logos/sora.svg",
        detail: "适合脚本可视化与高质感短片。",
      },
      {
        name: "Runway Gen-3",
        logoSrc: "/logos/runway.svg",
        detail: "镜头控制丰富，适合剪辑与创意短片。",
      },
      {
        name: "PixVerse",
        logoSrc: "/logos/pixverse.svg",
        detail: "快速出片，适合多场景快速预览。",
      },
    ],
  },
];

const walkthroughSections = [
  {
    title: "配置入口与密钥粘贴",
    description: "在第三方平台的设置页填写 Base URL 与 API Key，快速完成授权。",
    bullets: [
      "配置入口集中在账号或模型设置",
      "建议先用测试密钥验证连通性",
      "保存后立即发起测试对话",
    ],
    images: [
      "/images/tutorials/api-key-usage/conversation-gpt-5.svg",
      "/images/tutorials/api-key-usage/conversation-claude.svg",
      "/images/tutorials/api-key-usage/conversation-gemini.svg",
    ],
  },
  {
    title: "多模型切换与参数调节",
    description: "在同一会话中切换模型，按任务选择推理/创意/多模态能力。",
    bullets: [
      "GPT-5 Pro 适合结构化输出",
      "Claude-4.5 更自然的写作风格",
      "Gemini-2.5 更强的多模态理解",
    ],
    images: [
      "/images/tutorials/api-key-usage/conversation-claude.svg",
      "/images/tutorials/api-key-usage/conversation-gemini.svg",
      "/images/tutorials/api-key-usage/conversation-gpt-5.svg",
    ],
  },
  {
    title: "调用日志与成本对比",
    description: "对比不同模型的响应速度、成本与效果，形成稳定的调用策略。",
    bullets: [
      "记录单次调用成本与耗时",
      "高频场景使用更高性价比模型",
      "周期性复盘模型选择策略",
    ],
    images: [
      "/images/tutorials/api-key-usage/conversation-gemini.svg",
      "/images/tutorials/api-key-usage/conversation-gpt-5.svg",
      "/images/tutorials/api-key-usage/conversation-claude.svg",
    ],
  },
];

const conversationShots = [
  {
    title: "GPT-5 Pro｜结构化总结",
    description: "适合复杂信息抽取、行动项整理与结构化输出。",
    image: "/images/tutorials/api-key-usage/conversation-gpt-5.svg",
    tags: ["强推理", "总结", "结构化"],
  },
  {
    title: "Claude-4.5 Sonnet｜创意表达",
    description: "更自然的表达与文风控制，适合创意写作与品牌文案。",
    image: "/images/tutorials/api-key-usage/conversation-claude.svg",
    tags: ["创意写作", "语气控制", "长文本"],
  },
  {
    title: "Gemini-2.5 Pro｜多模态理解",
    description: "聚焦多模态与视觉理解，对图表和图片理解更稳定。",
    image: "/images/tutorials/api-key-usage/conversation-gemini.svg",
    tags: ["多模态", "图表理解", "高响应"],
  },
];

const galleryHighlights = [
  {
    title: "配置页细节",
    description: "展示 Base URL 与 API Key 输入区域。",
    image: "/images/tutorials/api-key-usage/conversation-gpt-5.svg",
  },
  {
    title: "多模型切换",
    description: "同一会话内快速切换模型进行对比。",
    image: "/images/tutorials/api-key-usage/conversation-claude.svg",
  },
  {
    title: "响应流式展示",
    description: "启用流式响应后实时输出的界面。",
    image: "/images/tutorials/api-key-usage/conversation-gemini.svg",
  },
  {
    title: "调用日志",
    description: "查看单次调用的耗时与成本。",
    image: "/images/tutorials/api-key-usage/conversation-gpt-5.svg",
  },
  {
    title: "费用统计",
    description: "按模型统计消耗与成本占比。",
    image: "/images/tutorials/api-key-usage/conversation-claude.svg",
  },
  {
    title: "多项目管理",
    description: "为不同团队管理多组 API Key。",
    image: "/images/tutorials/api-key-usage/conversation-gemini.svg",
  },
];

const videoHighlights = [
  "在平台中填写 Base URL 与 API Key",
  "一键切换模型并发起对话",
  "对比响应风格与成本表现",
];

const primaryVideo = {
  title: "第三方平台配置与切换演示",
  description: "展示在第三方平台中配置 GPTW API Key 并切换模型的完整流程。",
  thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  videoUrl: "/api-key-usage-primary.mp4",
};

const videoShowcases = [
  {
    title: "平台配置演示",
    description: "展示创建项目、填写 Base URL 与 API Key 的完整流程。",
    thumbnailUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "/api-key-usage-setup.mp4",
  },
  {
    title: "多模型切换对比",
    description: "同一问题使用不同模型快速对比响应。",
    thumbnailUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2069&auto=format&fit=crop",
    videoUrl: "/api-key-usage-model-switch.mp4",
  },
  {
    title: "流式响应体验",
    description: "演示 stream 模式的实时输出效果。",
    thumbnailUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2069&auto=format&fit=crop",
    videoUrl: "/api-key-usage-streaming.mp4",
  },
  {
    title: "成本与日志复盘",
    description: "展示控制台日志与成本统计。",
    thumbnailUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2069&auto=format&fit=crop",
    videoUrl: "/api-key-usage-cost-review.mp4",
  },
];

const safetyTips = [
  "API Key 仅保存在服务端或安全配置中，避免前端暴露。",
  "开启调用限额与 IP 白名单，降低滥用风险。",
  "定期轮换密钥并关注调用日志异常。",
];

export default function ApiKeyUsagePage() {
  const [activeImage, setActiveImage] = useState<ZoomImage | null>(null);

  useEffect(() => {
    if (!activeImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  const [walkthroughIndex, setWalkthroughIndex] = useState(() =>
    walkthroughSections.map(() => 0)
  );

  const setWalkthroughSlide = (sectionIndex: number, nextIndex: number) => {
    setWalkthroughIndex((prev) =>
      prev.map((value, index) => (index === sectionIndex ? nextIndex : value))
    );
  };

  const shiftWalkthroughSlide = (
    sectionIndex: number,
    direction: "prev" | "next",
    total: number
  ) => {
    setWalkthroughIndex((prev) =>
      prev.map((value, index) => {
        if (index !== sectionIndex) return value;
        if (direction === "prev") return (value - 1 + total) % total;
        return (value + 1) % total;
      })
    );
  };

  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
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

        <section className="relative pt-16 pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-500"
              >
                <Key className="mr-2 h-4 w-4" />
                便捷使用 API Key
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                在第三方平台快速接入 GPTW API Key
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                通过兼容 OpenAI 的配置方式，一次输入即可在多平台切换模型，并用图片与视频直观展示对话效果。
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">支持主流第三方平台</h2>
                <p className="text-muted-foreground">
                  只要支持 OpenAI 兼容接口，就可以直接使用 GPTW API Key。
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {platformTags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                推荐示例可按你的实际平台替换，点击图片可放大查看细节。
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {platformRecommendations.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full p-6 space-y-5">
                    <div className="grid gap-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-muted-foreground">名称：</span>
                        <span className="font-semibold">{platform.name}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-muted-foreground">链接：</span>
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-600 hover:text-cyan-700 transition-colors"
                        >
                          {platform.url}
                        </a>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-muted-foreground">优势：</span>
                        <span>{platform.advantage}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">界面展示</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {platform.screenshots.map((shot, shotIndex) => (
                          <div key={`${platform.name}-${shotIndex}`} className="relative aspect-[4/3]">
                            <ZoomableImage
                              src={shot}
                              alt={`${platform.name} 界面展示 ${shotIndex + 1}`}
                              sizes="(min-width: 1024px) 140px, 30vw"
                              className="h-full w-full rounded-lg bg-slate-950/40"
                              imageClassName="object-contain"
                              onOpen={setActiveImage}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">图文接入指引</h2>
              <p className="text-muted-foreground">
                使用截图与步骤说明快速掌握第三方平台的配置与调用方式。
              </p>
            </div>
            <div className="space-y-12">
              {walkthroughSections.map((block, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={block.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center ${
                      isEven ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <Card className="p-8 space-y-6 bg-background border border-border/60 shadow-none">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full border border-border/60 bg-cyan-500/10 flex items-center justify-center text-cyan-600 font-semibold">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold">{block.title}</h3>
                        </div>
                        <p className="text-base text-muted-foreground leading-8">
                          {block.description}
                        </p>
                        <ul className="space-y-4 text-[15px] text-foreground leading-7">
                          {block.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-600 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                          <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                              transform: `translateX(-${walkthroughIndex[index] * 100}%)`,
                            }}
                          >
                            {block.images.map((image, imageIndex) => (
                              <div
                                key={`${block.title}-slide-${imageIndex}`}
                                className="relative min-w-full aspect-[16/9]"
                              >
                                <ZoomableImage
                                  src={image}
                                  alt={`${block.title} 配图 ${imageIndex + 1}`}
                                  className="h-full w-full bg-slate-950/10"
                                  imageClassName="object-contain"
                                  onOpen={setActiveImage}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
                          <button
                            type="button"
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border border-border/70 bg-background/90 text-slate-700 shadow-sm transition-colors hover:bg-background"
                            onClick={() =>
                              shiftWalkthroughSlide(index, "prev", block.images.length)
                            }
                            aria-label="上一张"
                          >
                            ‹
                          </button>
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border border-border/70 bg-background/90 text-slate-700 shadow-sm transition-colors hover:bg-background"
                            onClick={() =>
                              shiftWalkthroughSlide(index, "next", block.images.length)
                            }
                            aria-label="下一张"
                          >
                            ›
                          </button>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{walkthroughIndex[index] + 1} / {block.images.length}</span>
                          <div className="flex items-center gap-1.5">
                            {block.images.map((_, dotIndex) => (
                              <button
                                key={`${block.title}-dot-${dotIndex}`}
                                type="button"
                                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                                  walkthroughIndex[index] === dotIndex
                                    ? "bg-cyan-500"
                                    : "bg-border/70"
                                }`}
                                onClick={() => setWalkthroughSlide(index, dotIndex)}
                                aria-label={`切换到第 ${dotIndex + 1} 张`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 max-w-xs">
                          {block.images.map((image, thumbIndex) => (
                            <button
                              key={`${block.title}-thumb-${thumbIndex}`}
                              type="button"
                              onClick={() => setWalkthroughSlide(index, thumbIndex)}
                              className={`relative h-14 w-full overflow-hidden rounded-md border ${
                                walkthroughIndex[index] === thumbIndex
                                  ? "border-cyan-500"
                                  : "border-border/60"
                              }`}
                              aria-label={`查看第 ${thumbIndex + 1} 张`}
                            >
                              {isGifSource(image) ? (
                                <img
                                  src={image}
                                  alt={`${block.title} 缩略图 ${thumbIndex + 1}`}
                                  className="absolute inset-0 h-full w-full object-cover"
                                />
                              ) : (
                                <Image
                                  src={image}
                                  alt={`${block.title} 缩略图 ${thumbIndex + 1}`}
                                  fill
                                  sizes="(min-width: 1024px) 120px, 30vw"
                                  className="object-cover"
                                />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">接入流程</h2>
              <p className="text-muted-foreground">
                四步完成第三方平台配置，立即开始多模型对话。
              </p>
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
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-cyan-600" />
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2 text-sm text-foreground">
                        {step.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-600 flex-shrink-0" />
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

        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">选择最新的模型</h2>
                <p className="text-muted-foreground">
                  基于不同模态，优先选择最新版本以获得最佳效果。
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {latestModels.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="group relative p-6 h-full border border-border/60 bg-background shadow-none transition-all hover:border-border hover:bg-muted/10">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="border-border/70 text-xs">
                              {item.badge}
                            </Badge>
                            <span className="text-xs text-muted-foreground">最新推荐</span>
                          </div>
                          <h3 className="text-lg font-semibold">{item.label}</h3>
                          <p className="text-xs text-muted-foreground">{item.note}</p>
                        </div>
                      </div>
                      <ul className="mt-4 divide-y divide-border/60">
                        {item.models.map((model) => (
                          <li
                            key={model.name}
                            className="group/model relative px-3 py-3 transition-colors hover:bg-muted/20 focus-within:bg-muted/20"
                            tabIndex={0}
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full border border-border/60 bg-background/90 flex items-center justify-center">
                                <img
                                  src={model.logoSrc}
                                  alt={`${model.name} logo`}
                                  className="h-5 w-5"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-foreground">
                                  {model.name}
                                </div>
                              </div>
                            </div>
                            <div className="mt-2 overflow-hidden text-xs text-muted-foreground max-h-0 opacity-0 transition-all duration-300 group-hover/model:max-h-16 group-hover/model:opacity-100 group-focus-within/model:max-h-16 group-focus-within/model:opacity-100">
                              <div className="flex items-start gap-2 rounded-md border border-border/60 bg-background/90 px-3 py-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                                <span className="leading-relaxed">{model.detail}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center space-y-3">
                <h2 className="text-3xl font-bold">多模型对话展示</h2>
                <p className="text-muted-foreground">
                  同一个 API Key，切换模型即可获得差异化的对话体验。
                </p>
                <p className="text-xs text-muted-foreground">点击图片可放大查看对话细节。</p>
              </div>
              <div className="grid gap-8 lg:grid-cols-3">
                {conversationShots.map((shot, index) => (
                  <motion.div
                    key={shot.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative aspect-[16/9]">
                        <ZoomableImage
                          src={shot.image}
                          alt={shot.title}
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="h-full w-full bg-slate-950/30"
                          imageClassName="object-contain"
                          onOpen={setActiveImage}
                        />
                      </div>
                      <div className="p-6 space-y-3">
                        <h3 className="text-lg font-semibold">{shot.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {shot.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {shot.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">场景素材墙</h2>
                <p className="text-muted-foreground">
                  多场景图文排版示例，可直接替换为你的真实素材。
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {galleryHighlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative aspect-[4/3]">
                        <ZoomableImage
                          src={item.image}
                          alt={item.title}
                          sizes="(min-width: 1024px) 28vw, 100vw"
                          className="h-full w-full bg-slate-950/30"
                          imageClassName="object-contain"
                          onOpen={setActiveImage}
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="text-base font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center space-y-3">
                <h2 className="text-3xl font-bold">视频演示合集</h2>
                <p className="text-muted-foreground">
                  视频数量较多时的排版示例，支持批量替换。
                </p>
              </div>

              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="p-4 bg-background/80">
                    <VideoPlayer
                      thumbnailUrl={primaryVideo.thumbnailUrl}
                      videoUrl={primaryVideo.videoUrl}
                      title={primaryVideo.title}
                      description={primaryVideo.description}
                      className="rounded-xl shadow-none"
                      aspectRatio="16/9"
                    />
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-5"
                >
                  <Badge className="w-fit bg-cyan-500/10 text-cyan-600">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    录屏演示
                  </Badge>
                  <h2 className="text-3xl font-bold">第三方平台配置与切换演示</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    视频演示展示在第三方平台中配置 GPTW API Key，并在不同模型之间快速切换的完整流程。
                  </p>
                  <ul className="space-y-3 text-sm">
                    {videoHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videoShowcases.map((video, index) => (
                  <motion.div
                    key={video.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="p-4 border-b border-border bg-muted/30">
                        <h3 className="text-sm font-semibold">{video.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {video.description}
                        </p>
                      </div>
                      <div className="p-4">
                        <VideoPlayer
                          thumbnailUrl={video.thumbnailUrl}
                          videoUrl={video.videoUrl}
                          title={video.title}
                          description={video.description}
                          className="rounded-lg shadow-none"
                          aspectRatio="16/9"
                        />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-6 border border-cyan-500/20 bg-cyan-500/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-semibold">安全与最佳实践</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-foreground">
                    {safetyTips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-600 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                <h2 className="text-3xl font-bold">继续深入了解</h2>
                <p className="text-muted-foreground">
                  如果需要更详细的 API 调用细节或安全建议，可以继续阅读以下教程。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/tutorials/api-integration"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                  >
                    API 对接指南
                  </Link>
                  <Link
                    href="/tutorials/security-best-practices"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                  >
                    安全最佳实践
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {activeImage && (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="w-full max-w-6xl space-y-3"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  className="rounded-full bg-white/90 text-slate-900 px-4 py-1.5 text-sm font-medium hover:bg-white"
                  onClick={() => setActiveImage(null)}
                >
                  关闭
                </button>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black/40">
                {isGifSource(activeImage.src) ? (
                  <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                ) : (
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
