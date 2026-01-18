"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { WordRotate } from "@/components/ui/word-rotate";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 sm:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex flex-wrap gap-2"
            >
              <Badge variant="outline" className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-foreground hover:from-emerald-500/20 hover:to-teal-500/20 transition-all">
                <Sparkles className="w-4 h-4 mr-1.5 text-emerald-500" />
                <span className="text-sm font-medium">国际大模型服务平台</span>
              </Badge>
              <Badge variant="outline" className="px-3 py-2 rounded-full bg-violet-500/10 border-violet-500/30 text-foreground">
                <TrendingUp className="w-3.5 h-3.5 mr-1 text-violet-500" />
                <span className="text-xs font-medium">稳定运行900+天</span>
              </Badge>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/60">
                连接世界
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground/80 to-muted-foreground">
                顶尖AI模型
              </span>
              <br />
              <WordRotate
                words={["GPT-5", "Claude-4.5", "Gemini-3-Pro", "Midjourney", "Sora", "Nano-Banana", "Suno", "Gork"]}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/60"
                duration={3000}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              提供国际主流大模型聚合服务、统一API网关和官网订阅解决方案，
              让您<span className="text-primary font-semibold">无需翻墙</span>，即可畅享全球顶尖AI能力
              <span className="inline-block ml-2 text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-md border border-blue-500/30">
                <Zap className="w-3 h-3 inline mr-0.5" />
                即开即用
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 pt-4"
            >
              <Button asChild size="lg" className="group w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20">
                <Link href="https://ai.gptw.top/">
                  立即试用
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/5">
                <Link href="/app/login.html">
                  （旧）会员登录
                </Link>
              </Button>
              
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-muted-foreground px-3 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>已有 <span className="text-primary font-semibold">15,000+</span> 用户正在使用</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8"
            >
              {[
                { value: "200+", label: "国际主流大模型" },
                { value: "900+", label: "稳定运行天数" },
                { value: "7x24h", label: "企业级运维保障" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full"
          >
            <div className="relative w-full h-full rounded-3xl border border-border/60 bg-black/80 p-2 sm:p-4 shadow-[0px_0px_70px_-20px_rgba(80,80,120,0.35)]">
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/70">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-muted-foreground/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
