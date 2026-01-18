"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import { Shield, ArrowLeft, Key, FileLock, Activity, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const bestPractices = [
  {
    icon: Key,
    title: "身份与权限",
    description: "通过最小权限原则管理账号和密钥，降低泄露风险。",
    items: [
      "为不同项目创建独立API密钥",
      "限制每个密钥的调用权限与额度",
      "结合IP白名单控制访问来源",
      "定期轮换密钥并更新配置",
    ],
  },
  {
    icon: FileLock,
    title: "数据保护",
    description: "确保输入输出数据的安全，满足隐私与合规要求。",
    items: [
      "启用传输加密（HTTPS/TLS）",
      "敏感数据脱敏后再上传",
      "按业务需求配置日志级别",
      "必要时启用本地加密存储",
    ],
  },
  {
    icon: Activity,
    title: "监控与告警",
    description: "实时掌握调用情况，快速响应异常。",
    items: [
      "启用调用日志和监控面板",
      "设置调用量、延迟、费用等阈值告警",
      "集成企业的安全审计系统",
      "每周评估使用情况并优化",
    ],
  },
  {
    icon: AlertTriangle,
    title: "应急预案",
    description: "制定清晰的应急流程，降低突发事件影响。",
    items: [
      "准备密钥泄露应急手册",
      "建立多活容灾方案",
      "定期进行安全演练",
      "设立应急联系人机制",
    ],
  },
];

const checklist = [
  "是否启用了多因素认证",
  "是否有完善的密钥管理机制",
  "是否按需记录日志并加密存储",
  "是否配置了告警系统",
  "是否准备了应急预案",
  "是否对团队进行了安全培训",
];

export default function SecurityBestPracticesPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-500"
              >
                <Shield className="mr-2 h-4 w-4" />
                安全最佳实践
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                构建安全可靠的AI使用体系
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                提供全方位的安全建议，帮助您在不同应用场景中保护数据与业务连续性
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {bestPractices.map((practice, index) => {
                const Icon = practice.icon;
                return (
                  <motion.div
                    key={practice.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="h-full p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{practice.title}</h3>
                          <p className="text-sm text-muted-foreground">{practice.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-sm">
                        {practice.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
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
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold">安全检查清单</h2>
              <Card className="p-8">
                <ul className="space-y-4">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full border border-orange-500/50 flex items-center justify-center text-xs text-orange-500">
                        ✓
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold">与我们一起构建安全体系</h2>
              <p className="text-muted-foreground">
                如需定制化的安全方案或合规支持，请联系我们的安全团队
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/services/knowledge-base"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  企业知识库方案
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                >
                  联系安全团队
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
