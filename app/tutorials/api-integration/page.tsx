"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import { Code2, ArrowLeft, Laptop, Network, Lock, Server } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const integrationSteps = [
  {
    title: "获取API密钥",
    description: "在控制台中创建项目并生成API密钥。我们提供多级权限控制，确保密钥安全。",
    items: [
      "进入控制台的API管理页面",
      "创建或选择现有项目",
      "为不同环境创建独立密钥",
      "可设置调用限额和访问权限",
    ],
    icon: Laptop,
  },
  {
    title: "配置网络",
    description: "根据部署环境配置网络访问策略，支持公网访问、企业专线和私有化部署。",
    items: [
      "选择适合的接入点",
      "配置IP白名单",
      "如需，申请专线或私有部署",
      "开启多区域容灾",
    ],
    icon: Network,
  },
  {
    title: "调用接口",
    description: "使用HTTP或SDK方式调用API。我们支持多种语言的SDK和示例代码。",
    items: [
      "通过HTTPS POST请求调用",
      "设置适当的超时时间",
      "使用幂等机制处理重试",
      "查看示例仓库获取最佳实践",
    ],
    icon: Server,
  },
  {
    title: "安全加固",
    description: "通过密钥轮换、日志审计等方式提升安全性，满足企业合规要求。",
    items: [
      "定期轮换API密钥",
      "启用调用日志和告警",
      "设置权限分级",
      "开启异常检测功能",
    ],
    icon: Lock,
  },
];

const codeExample = `curl -X POST https://api.ai-platform.cn/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
        "model": "gpt-5-pro",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "给我写一段文案"}
        ],
        "temperature": 0.7,
        "stream": false
      }'
`;

export default function ApiIntegrationPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-500"
              >
                <Code2 className="mr-2 h-4 w-4" />
                API对接指南
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                构建可靠的API对接方案
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                通过标准化接口和完备的安全机制，让AI能力快速集成到您的业务系统中
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
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
                    <Card className="h-full p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                      <ul className="space-y-2 text-sm text-foreground">
                        {step.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
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
            <div className="mx-auto max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold">示例代码</h2>
              <Card className="p-6 bg-background">
                <pre className="text-sm text-muted-foreground overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </Card>
              <p className="text-sm text-muted-foreground">
                更多语言的SDK和Demo，请访问我们的开发者中心。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold">推荐阅读</h2>
              <p className="text-muted-foreground">
                为了更全面地了解API能力，建议继续阅读以下教程
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/tutorials/security-best-practices"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  安全最佳实践
                </Link>
                <Link
                  href="/tutorials/troubleshooting"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                >
                  故障排查指南
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
