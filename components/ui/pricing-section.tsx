"use client"

import * as React from "react"

import { Pricing, type PricingPlan } from "@/components/ui/pricing-cards"
import { Tab } from "@/components/ui/pricing-tab"

type ModeKey = "聚合站会员订阅" | "API网关系统" | "ChatGPT官网代充"

const MEMBER_PLANS: PricingPlan[] = [
  {
    name: "月度会员",
    description: "一站畅享GPT、Claude、Gemini、Nano-banana等主流大模型",
    price: "¥189",
    priceSuffix: "/ 月",
    features: [
      {
        title: "无限畅享主流模型",
        description: "会员期内不限次数调用GPT-5.2、Claude-4.5、Gemini-3-pro等主流AI大模型。",
      },
      {
        title: "Midjourney绘图",
        description: "包含Midjourney图像生成额度，快速创作高质量视觉内容。",
      },
      {
        title: "Nano-Banana-Pro",
        description: "包含Nano-Banana-Pro图像生成额度，更强大的文本理解、控制能力",
      },
      {
        title: "无需翻墙",
        description: "超低延迟接入海外官方服务，国内网络环境即可直接使用，省去网络代理费用",
      },
    ],
    action: {
      label: "立即开通",
      icon: "move-right",
      href: "/products/mirror",
    },
  },
  {
    name: "季度会员",
    description: "适合长期使用的专业用户，享受更多优惠价格与优先支持",
    price: "¥540",
    priceSuffix: "/ 季",
    features: [
      {
        title: "无限畅享主流模型",
        description: "会员期内不限次数调用GPT-5.2、Claude-4.5、Gemini-3-pro等主流AI大模型。",
      },
      {
        title: "Midjourney绘图",
        description: "更多的Midjourney图像生成额度，快速创作高质量视觉内容。",
      },
      {
        title: "Nano-Banana-Pro",
        description: "更多的Nano-Banana-Pro图像生成额度，更强大的文本理解、控制能力",
      },
      {
        title: "无需翻墙",
        description: "超低延迟接入海外官方服务，国内网络环境即可直接使用，省去网络代理费用",
      },
    ],
    action: {
      label: "首选方案",
      icon: "move-right",
      href: "/products/mirror",
    },
    highlight: true,
  },
  {
    name: "年度会员",
    description: "限时活动优惠：买一年赠一年，会员到手两年时长",
    price: "¥1,999",
    priceSuffix: "/ 年",
    features: [
      {
        title: "无限畅享主流模型",
        description: "会员期内不限次数调用GPT-5.2、Claude-4.5、Gemini-3-pro等主流AI大模型。",
      },
      {
        title: "Midjourney绘图",
        description: "更多的Midjourney图像生成额度，快速创作高质量视觉内容。",
      },
      {
        title: "Nano-Banana-Pro",
        description: "更多的Nano-Banana-Pro图像生成额度，更强大的文本理解、控制能力",
      },
      {
        title: "无需翻墙",
        description: "超低延迟接入海外官方服务，国内网络环境即可直接使用，省去网络代理费用",
      },
    ],
    action: {
      label: "预约顾问",
      icon: "move-right",
      variant: "outline",
      href: "/contact",
    },
  },
]

const API_PLANS: PricingPlan[] = [
  {
    name: "$0.2 API额度",
    description: "免费试用，零门槛接入统一大模型网关。",
    price: "￥0",
    priceSuffix: "免费试用",
    features: [
      {
        title: "一个API Key调用多个模型",
        description: "仅需修改model值，即可调用GPT、Claude、Gemini等模型",
      },
      {
        title: "一键接入Claude Code",
        description: "享受更智能的代理编码，大幅节省开发时间",
      },
      {
        title: "按量计费",
        description: "随用随充，1刀起充",
      },
      {
        title: "监控面板",
        description: "实时查看QPS、延迟、消耗。",
      },
      {
        title: "企业化支持",
        description: "支持签订合同、对公转账、开具增值税发票",
      },
    ],
    action: {
      label: "立即试用",
      icon: "move-right",
      href: "https://api.pro365.top",
    },
  },
  {
    name: "¥100 API额度",
    description: "长期使用首选，95折优惠，额度永久有效",
    price: "¥700",
    priceSuffix: "充值包",
    features: [
      {
        title: "一个API Key调用多个模型",
        description: "仅需修改model值，即可调用GPT、Claude、Gemini等模型",
      },
      {
        title: "一键接入Claude Code",
        description: "享受更智能的代理编码，大幅节省开发时间",
      },
      {
        title: "按量计费",
        description: "随用随充，1刀起充",
      },
      {
        title: "监控面板",
        description: "实时查看QPS、延迟、消耗。",
      },
      {
        title: "企业化支持",
        description: "支持签订合同、对公转账、开具增值税发票",
      },
    ],
    action: {
      label: "立即充值",
      icon: "move-right",
      href: "https://api.pro365.top/console/topup",
    },
    highlight: true,
  },
  {
    name: "企业定制额度",
    description: "面向大规模调用场景，更高的优惠折扣，提供专线加速与SLA保障。",
    price: "联系我们",
    priceSuffix: " ",
    features: [
      {
        title: "一个API Key调用多个模型",
        description: "仅需修改model值，即可调用GPT、Claude、Gemini等模型",
      },
      {
        title: "一键接入Claude Code",
        description: "享受更智能的代理编码，大幅节省开发时间",
      },
      {
        title: "按量计费",
        description: "随用随充，1刀起充",
      },
      {
        title: "监控面板",
        description: "实时查看QPS、延迟、消耗。",
      },
      {
        title: "企业化支持",
        description: "支持签订合同、对公转账、开具增值税发票",
      },
    ],
    action: {
      label: "联系商务",
      icon: "phone-call",
      variant: "outline",
      href: "/contact",
    },
  },
]

const RECHARGE_PLANS: PricingPlan[] = [
  {
    name: "ChatGPT Plus",
    description: "OpenAI官方Plus会员代充，适合个人用户日常使用GPT-5系列模型。",
    price: "¥140",
    priceSuffix: "/ 月",
    features: [
      {
        title: "GPT-5.2-Thinking & Sora-2",
        description: "更高的OpenAI最强推理模型使用权限，享受高峰期优先访问。",
      },
      {
        title: "更高的消息与上传额度",
        description: "相比免费版，提供更高的消息与文件上传上限，适合长对话与复杂工作负载。",
      },
      
      {
      title: "深度研究（Deep Research）",  
      description: "可使用深度研究工具进行更系统的信息收集与结构化总结（如账号支持）。",
      },
      
      
      {
      title: "语音、文件上传与分析、图像生成等更多功能",
      description: "包含语音通话、文件上传与分析、图像生成等高级功能入口。",
      },
      {
        title: "官方正版保障",
        description: "直连OpenAI官方渠道，1小时内完成激活，零封号风险。",
      },
    ],
    action: {
      label: "立即订阅",
      icon: "move-right",
      href: "/products/recharge",
    },
    highlight: true,
  },
  {
    name: "ChatGPT Pro",
    description: "为专业人士和重度使用者提供更强大且无限制的使用权限",
    price: "¥1699",
    priceSuffix: "/ 月",
    features: [
      {
        title: "GPT Plus订阅全部权限",
        description: "包含plus订阅的全部功能与权限",
      },
      {
      title: "GPT-5.2 Pro 专业推理",
      description: "在 Plus 基础上，解锁 GPT-5.2 Pro 用于更高强度、更专业的推理工作。",
      },
      {
      title: "消息与上传数量无限",
      description: "移除消息与上传数量上限，更适合重度与高频工作流。",
      },
      {
      title: "Sora 2 视频生成功能高级使用权限",
      description: "提供更高等级的 Sora 2 视频生成使用权限（生成更长时间的视频）。",
      },
      {
      title: "新功能研究预览",
      description: "可优先体验部分新能力的研究预览版本（以实际上线为准）。",
      }
    ],
    action: {
      label: "立即订阅",
      icon: "move-right",
      href: "/products/recharge",
    },
  },
  {
    name: "ChatGPT Business",
    description: "综合性价比更高的订阅方案，0封号风险",
    price: "¥89",
    priceSuffix: "/ 月",
    features: [
      {
        title: "GPT Plus订阅全部权限",
        description: "包含plus订阅的全部功能与权限",
      },
      {
      title: "更强的模型与容量组合",
      description: "提供无限制的 GPT-5.2 消息、充足的 GPT-5.2 thinking 使用权限，以及 GPT-5.2 pro 使用权",
      },
      {
      title: "默认不使用业务数据训练 + 全程加密",
      description: "静态与传输过程加密，且默认不使用你的业务数据进行模型训练。",
      },
      {
      title: "Codex 与 ChatGPT 智能体执行能力",
      description: "可使用 Codex 与 ChatGPT 智能体，在文档、工具与代码库中进行推理并执行操作。",
      },
    ],
    notice: {
      title: "⚠️ 重要提示",
      description: "对话记录存于工作空间，需及时保存重要记录，避免数据丢失。",
      action: {
        label: "记录导出插件",
        href: "https://chromewebstore.google.com/detail/chatgpt-to-pdf/hiiildgldbpfbegcfgemoliikibfhaeh",
      },
    },
    action: {
      label: "立即订阅",
      icon: "move-right",
      variant: "outline",
      href: "/contact",
    },
  },
]

const MODES: Record<ModeKey, {
  badge: string;
  title: string;
  description: string;
  plans: PricingPlan[];
  tabBadge: string;
  tabBadgeVariant?: "default" | "secondary" | "destructive" | "outline";
  tabTip: string;
}> = {
  "聚合站会员订阅": {
    badge: "聚合站会员订阅",
    title: "聚合服务不限次数，全面解锁国际大模型",
    description: "会员期内畅享ChatGPT、Claude、Gemini、Nano-banana、Midjourney等顶尖模型镜像，提供企业级运维保障。",
    plans: MEMBER_PLANS,
    tabBadge: "不限对话次数",
    tabBadgeVariant: "secondary",
    tabTip: "会员期内无限次数调用GPT-5.2、Claude-4.5、Gemini-3-Pro等主流模型",
  },
  "API网关系统": {
    badge: "API网关系统",
    title: "统一网关，按量付费",
    description: "按需购买额度,一键接入主流模型API,适用于应用开发、自动化工作流、企业系统集成。",
    plans: API_PLANS,
    tabBadge: "按量计费",
    tabBadgeVariant: "secondary",
    tabTip: "按实际调用量计费，支持50+AI模型统一接入",
  },
  "ChatGPT官网代充": {
    badge: "ChatGPT官网代充",
    title: "ChatGPT官方订阅代充服务",
    description: "安全、快捷的ChatGPT Plus/Team官方订阅代充，支持企业批量购买和发票开具，10分钟内完成激活。",
    plans: RECHARGE_PLANS,
    tabBadge: "10分钟激活",
    tabBadgeVariant: "secondary",
    tabTip: "ChatGPT官方订阅代充，安全快捷零封号风险",
  },
}

export function PricingSection() {
  const [selectedMode, setSelectedMode] = React.useState<ModeKey>("聚合站会员订阅")
  const { badge, title, description, plans } = MODES[selectedMode]

  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      <div className="relative">
        <Pricing
          badge={badge}
          title={title}
          description={description}
          plans={plans}
          switcher={
            <div className="flex w-fit rounded-full bg-muted p-1">
              {(Object.keys(MODES) as ModeKey[]).map((mode) => {
                const modeConfig = MODES[mode];
                return (
                  <Tab
                    key={mode}
                    text={mode}
                    selected={selectedMode === mode}
                    setSelected={() => setSelectedMode(mode)}
                    badge={modeConfig.tabBadge}
                    badgeVariant={modeConfig.tabBadgeVariant}
                    tip={modeConfig.tabTip}
                  />
                );
              })}
            </div>
          }
        />
      </div>
    </section>
  )
}
