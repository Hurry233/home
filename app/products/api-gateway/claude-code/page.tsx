import Link from "next/link";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  Download,
  ListChecks,
  Plug,
  Settings2,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const steps = [
  {
    title: "安装 Claude Code 所需环境",
    description:
      "Claude Code 需要 Node.js 环境来运行。请打开终端，根据你的操作系统执行相应安装命令。",
    icon: Download,
    commands: [
      {
        label: "安装Node.js",
        code: (
          <>
          确认系统版本 → 打开{" "}
          <a href="https://nodejs.org/zh-cn/download" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-700" >
          Node.js官网
          </a>{" "}
          → 下载对应版本
          </>
          ),
      },
      {
        label: "验证Node.js版本,需高于18.0.0",
        code: "npm -v && node -v",
      },
    ],
  },
  {
    title: "一键安装Claude Code",
    description:
      "在终端中执行以下命令，一键安装Claude Code。",
    icon: Plug,
    commands: [
      {
        label: "一键安装Claude Code",
        code: "npm install -g @anthropic-ai/claude-code",
      },
      {
        label: "验证安装是否成功",
        code: "claude -version",
      },
    ],
  },
  {
    title: "创建并绑定 API Key",
    description:(
      <>
      打开 {" "}
      <a href="https://api.pro365.top" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-700" >
      大模型API网关
      </a>{" "}
      → 注册并登录 → 创建{" "}
      <a href="https://api.pro365.top/console/token" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-700" >
      API Key
      </a>{" "}
      → 复制API Key
      </>
      ),
    icon: ShieldCheck,
    commands: [
      {
        label: "设置API Key上限额度",
        code: "打开“无限额度”按钮，将API Key上限额度与账户余额自动匹配",
      },
      {
        label: "合理预存账户余额",
        code: "及时充值并关注自己的账户余额，避免因余额不足导致Claude Code无法正常使用",
      },
    ],
  },
  {
    title: "在Claude Code中配置API Key",
    description:
      "使用npx zcf插件配置API URL与API Key，并保存配置 → 在项目目录中启动Claude Code → 开始使用",
    icon: Terminal,
    commands: [
      {
        label: "启动终端，输入命令启动zcf插件",
        code: "npx zcf",
      },
      {
        label: "选择3，配置API",
        code: "API Url: https://api.pro365.top/v1, \n API Key: 你的API Key",
      },
      {
        label: "启动claude code",
        code: "在项目目录中打开终端，输入“claude”命令 → 开始使用",
      },
    ],
  },
];

const customisations = [
  {
    title: "Claude Code工作流与MCP服务",
    description:
      "Claude Code 支持多种工作流与MCP服务，如代码补全、代码重构、代码调试等。使用zcf插件可快速配置工作流与MCP服务",
    icon: Settings2,
  },
  {
    title: "CLAUDE.md",
    description:
      "在claude Code中输入“/init”命令，初始化项目 AI上下文，生成/更新根级与模块级CLAUDE.md索引，支持自行修改，用于指引Claude Code",
    icon: ListChecks,
  },
  {
    title: "安全与日志留痕",
    description:
      "与API网关实时日志打通，记录API Key使用情况：请求耗时、请求次数、Token 消耗等信息，实时审计项目消耗。（只记录tokens消耗，不记录请求内容，确保隐私安全）",
    icon: ShieldCheck,
  },
];

export default function ClaudeCodeGuidePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="space-y-6 max-w-3xl">
              <Badge className="w-fit bg-violet-500/10 text-violet-600">
                Claude Code 接入手册
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                利用AI驱动生产力，每个人都能“0代码”开发复杂应用
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                按照下面 4 个步骤，5 分钟内即可在本地开发环境中启用 Claude Code 。我们提供统一的网关地址与密钥管理，让Claude模型能力稳定、低延迟地服务于你的编码工作流。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                  <Link href="/products/api-gateway">
                    返回 API 网关 <ArrowLeft className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-violet-200">
                  <Link href="#customize">
                    跳转到Claude Code进阶指南
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">4 个步骤完成接入</h2>
              <p className="text-muted-foreground">
                适用于 VS Code、Cursor、Continue 等主流 IDE，流程统一且可复制到团队成员。
              </p>
            </div>
            <div className="space-y-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={step.title}
                    className="border border-border/60 bg-background/80 p-8 lg:p-10"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-violet-600" />
                        </div>
                        <div className="space-y-2">
                          <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600">
                            STEP {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-full lg:w-72 space-y-2">
                        {step.commands.map((cmd) => (
                          <div
                            key={cmd.label}
                            className="rounded-lg border border-violet-500/20 bg-violet-500/5 p-3"
                          >
                            <div className="text-xs font-semibold uppercase text-violet-600 tracking-wide">
                              {cmd.label}
                            </div>
                            <code className="mt-2 block text-sm text-foreground">
                              {cmd.code}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Customization */}
        <section id="customize" className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">Claude Code进阶指南</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">让你的Claude Code更智能</h2>
              <p className="text-muted-foreground">
                完成基础配置后，你可以根据项目需求，使用CLAUDE.md索引等功能，让Claude Code更智能地完成项目开发，提高效率节省成本。
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {customisations.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="border border-border/60 bg-background/80 p-6 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <Card className="border border-violet-200/50 bg-gradient-to-r from-violet-500/10 via-background to-background p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    需要帮助？获得工程师 1 对 1 接入支持
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    无论你在团队内推广 Claude Code，还是希望统一管理调用策略，我们都可以提供插件配置、密钥管理、成本控制等全流程支持。
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                    <Link href="/contact">
                      预约技术顾问 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/products/api-gateway#pricing">
                      查看按量计费方案
                    </Link>
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
