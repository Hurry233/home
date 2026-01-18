"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, Server, Wifi, Lock, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const issues = [
  {
    icon: Server,
    title: "API调用失败",
    description: "请求返回错误或超时",
    solutions: [
      "检查API密钥是否正确且未过期",
      "确认余额充足",
      "验证请求参数格式是否符合文档要求",
      "查看服务状态页面确认是否有计划维护",
      "增加请求超时时间并实现重试机制",
    ],
    errorCode: "4xx/5xx 错误码",
  },
  {
    icon: Wifi,
    title: "网络连接问题",
    description: "无法访问服务或响应缓慢",
    solutions: [
      "检查本地网络连接是否正常",
      "尝试切换到备用接入点",
      "确认防火墙或代理配置允许访问",
      "使用ping/traceroute诊断网络路径",
      "如需专线接入，请联系客服",
    ],
    errorCode: "ETIMEDOUT, ECONNREFUSED",
  },
  {
    icon: Lock,
    title: "权限与认证错误",
    description: "提示无权限或认证失败",
    solutions: [
      "确认请求头中的Authorization格式正确",
      "检查密钥是否对应正确的项目",
      "验证IP白名单配置",
      "确认账号状态正常，无欠费停服",
      "联系管理员检查团队权限设置",
    ],
    errorCode: "401, 403",
  },
  {
    icon: Clock,
    title: "响应速度慢",
    description: "请求处理时间过长",
    solutions: [
      "优化Prompt以减少Token消耗",
      "使用较快的模型满足基本需求",
      "开启流式响应提升用户体验",
      "合理设置并发数避免排队",
      "考虑使用缓存减少重复请求",
    ],
    errorCode: "响应时间 > 预期",
  },
];

const faqItems = [
  {
    question: "如何查看API调用日志？",
    answer: "登录控制台，进入【API管理】-【调用日志】，可以查看最近30天的详细调用记录，包括请求参数、响应结果和错误信息。",
  },
  {
    question: "密钥泄露后如何处理？",
    answer: "立即在控制台禁用或删除泄露的密钥，生成新密钥并更新业务配置。同时检查调用日志是否有异常调用，必要时联系客服进行安全排查。",
  },
  {
    question: "如何选择合适的模型？",
    answer: "根据任务复杂度选择：简单任务使用快速模型降低成本，复杂推理使用高级模型提升质量。可参考各模型的benchmark数据和使用案例。",
  },
];

export default function TroubleshootingPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-500"
              >
                <AlertCircle className="mr-2 h-4 w-4" />
                故障排查指南
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                快速诊断与解决常见问题
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                系统化的故障排查流程，帮助您快速定位并解决使用中的各类问题
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl space-y-8">
              {issues.map((issue, index) => {
                const Icon = issue.icon;
                return (
                  <motion.div
                    key={issue.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{issue.title}</h3>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                              {issue.errorCode}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{issue.description}</p>
                          <div>
                            <h4 className="text-sm font-semibold mb-2">解决方案：</h4>
                            <ol className="space-y-2">
                              {issue.solutions.map((solution, idx) => (
                                <li key={solution} className="flex items-start gap-2 text-sm">
                                  <span className="font-semibold text-red-500 flex-shrink-0">{idx + 1}.</span>
                                  <span>{solution}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
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
              <h2 className="text-3xl font-bold">常见问题解答</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="p-6">
                      <h3 className="font-semibold mb-2">Q: {item.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">A: {item.answer}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold">问题仍未解决？</h2>
              <p className="text-muted-foreground">
                如果以上方法无法解决您的问题，请联系我们的技术支持团队获取帮助
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  联系技术支持
                </Link>
                <Link
                  href="/tutorials"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                >
                  查看其他教程
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
