import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { HeroSection } from "@/components/ui/hero-section";
import { Logos3 } from "@/components/ui/logos3";

import { ProductsSection } from "@/components/ui/products-section";
import { FeaturesBentoSection } from "@/components/ui/features-bento-section";
import { ResearchShowcase } from "@/components/ui/research-showcase";
import { SafetySection } from "@/components/ui/safety-section";
import { GlobalImpactSection } from "@/components/ui/global-impact-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { CTASection } from "@/components/ui/cta-section";
import DisplayCards from "@/components/ui/display-cards";
import { TimelineDemo } from "@/components/ui/timeline-demo";
import { Sparkles, ShieldCheck, Rocket, Github, Twitter, Linkedin } from "lucide-react";

const displayCards = [
  {
    icon: <Sparkles className="size-4 text-violet-300" />,
    title: "AI聚合站",
    description: "对话、绘画、视频、PPT 一站式服务",
    date: "无限畅想",
    iconClassName: "text-violet-500",
    titleClassName: "text-violet-600 dark:text-violet-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <ShieldCheck className="size-4 text-emerald-300" />,
    title: "大模型API网关",
    description: "GPT/Claude/Gemini等50+国际主流模型",
    date: "灵活扩展",
    iconClassName: "text-emerald-500",
    titleClassName: "text-emerald-600 dark:text-emerald-400",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Rocket className="size-4 text-sky-300" />,
    title: "ChatGPT代充服务",
    description: "最低的价格最优质的服务",
    date: "Plus代充仅需140元",  
    iconClassName: "text-sky-500",
    titleClassName: "text-sky-600 dark:text-sky-400",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        <HeroSection />
        <Logos3 heading=" " />

        <ProductsSection />
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center space-y-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                核心服务
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                一站式使用顶尖AI能力
              </h2>
              <p className="text-lg text-muted-foreground">
                覆盖AI聚合系统、统一API网关、ChatGPT官方代充和镜像服务，满足企业与个人的多样化场景需求。
              </p>
            </div>
            <div className="flex justify-center">
              <DisplayCards cards={displayCards} />
            </div>
          </div>
        </section>
        <FeaturesBentoSection />
        <ResearchShowcase />
        <SafetySection />
        <GlobalImpactSection />
        <section className="relative overflow-hidden bg-background">
  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
  <div className="relative" style={{ display: 'none' }}>
    <TimelineDemo />
  </div>
</section>

        <PricingSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
