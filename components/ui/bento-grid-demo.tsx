import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "文件分析",
    description: "支持上传文件，快速完成文献理解、总结翻译、数据读取等任务，提取关键信息，完成分析和整理。",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "自然语言对话",
    description: "GPT-5、Claude-4.5、Gemini-3-Pro等最新AI模型，更强大的语义理解和思考能力，更长的上下文长度，更精准的回答质量。",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-6 left-6 h-20 w-20 rounded-full bg-blue-500/5 blur-2xl" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "联网搜索",
    description: "支持联网搜索，在线搜索最新资讯，融入上下文信息，提供更精准的回答。",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <div className="absolute -right-12 top-6 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-8 h-16 w-16 rounded-full bg-emerald-500/5 blur-2xl" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "绘画与视频",
    description: "支持Midjourney、Sora-2、Nano-banana-pro等图像/视频生成模型，快速生成高质量图片/视频。",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Claude Code",
    description:
      "一键接入Claude Code，让大模型直接与本地文件进行交互，读取、修改、创建文件，用自然语言驱动生产力。",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-12 left-8 h-20 w-20 rounded-full bg-amber-500/5 blur-2xl" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function BentoDemo() {
  return (
    <div className="relative">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export { BentoDemo };
