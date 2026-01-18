"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, ArrowRight, ScanLine } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const faqs = [
  {
    question: "如何选择镜像会员与按量计费？",
    answer:
      "如果您主要使用 GPT/Claude 等对话与创作功能，推荐选择镜像会员；需要集成到业务系统、调用 API 的场景，则建议使用按量计费或企业定制方案。",
  },
  {
    question: "支持哪些部署方式？",
    answer:
      "我们支持 SaaS 托管、专属实例、私有化部署三种模式，可根据企业合规要求进行灵活组合。",
  },
  {
    question: "是否提供定制化开发？",
    answer:
      "提供，包括知识库搭建、工作流自动化、模型微调、插件生态接入等服务，欢迎提交需求获取详细方案。",
  },
];

const availability = [
  {
    icon: Clock,
    title: "服务响应",
    description: "售前需求 2 小时内响应，售后工单 15 分钟内接入。",
  },
  {
    icon: ShieldCheck,
    title: "安全保障",
    description: "签署保密协议，支持数据脱敏、私有网络传输与审计。",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24 min-h-screen bg-slate-50/50 dark:bg-background">
        {/* Simple Gradient Background - very subtle */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 to-transparent dark:from-slate-900/10 pointer-events-none -z-10" />

        {/* Hero & QR Code Section */}
        <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-24">
          <div className="container relative mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    与我们<span className="text-primary/90 block mt-2">建立连接</span>
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                    无论是产品咨询、商务合作还是技术支持，只需扫描右侧二维码，我们的专属顾问将为您提供一对一的专业服务。
                  </p>
                </div>

                <div className="space-y-4">
                  {availability.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm">
                        <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-800">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right Content - QR Code Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative mx-auto lg:mr-0"
              >
                <Card className="relative p-8 sm:p-10 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-2xl overflow-hidden text-center max-w-sm w-full mx-auto shadow-xl shadow-slate-200/50 dark:shadow-none">
                  <div className="mb-8 space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm font-medium mb-2">
                      <ScanLine className="w-4 h-4" /> 扫码添加顾问
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">微信咨询</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">WeChat Support</p>
                  </div>

                  <div className="relative w-64 h-64 mx-auto mb-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl">
                    {/* Placeholder for QR Code */}
                    <div className="w-full h-full relative">
                      <Image
                        src="/wechat-qr-placeholder.png"
                        alt="WeChat QR Code"
                        fill
                        className="object-contain mix-blend-multiply dark:mix-blend-normal"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-900">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      工作时间：周一至周五 10:00 - 19:00
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      非工作时间留言将在次日优先处理
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 border-t border-slate-200 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">常见疑问</h2>
              <p className="text-slate-500 dark:text-slate-400">
                在添加顾问之前，您可能想了解以下信息
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full p-6 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:shadow-md transition-shadow duration-300">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-4">
                      <ArrowRight className="w-4 h-4 text-slate-900 dark:text-slate-100" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">{faq.question}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

