"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Tag, ArrowUpRight } from "lucide-react";

const featuredPost = {
  title: "揭秘企业如何快速落地大模型能力",
  excerpt:
    "从镜像访问到知识库构建，我们总结了 10 个项目的交付经验，帮助企业精准规划 AI 落地路径。",
  date: "2024-10-15",
  tag: "实践洞察",
  href: "#",
};

const posts = [
  {
    title: "全新大模型网关升级：延迟再降 30%",
    excerpt:
      "我们在全球节点部署与调度策略上的最新优化，显著提升了 API 调用的稳定性与响应速度。",
    date: "2024-09-27",
    tag: "产品动态",
    href: "#",
  },
  {
    title: "AI 安全合规实战指南",
    excerpt:
      "总结金融、政企客户在数据安全、访问管控方面的最佳实践，助力企业轻松应对监管要求。",
    date: "2024-09-12",
    tag: "安全合规",
    href: "#",
  },
  {
    title: "客户成功案例：客服效率翻倍的奥秘",
    excerpt:
      "某大型零售企业如何通过知识库+微调模型，实现客服平均响应时间缩短 60%。",
    date: "2024-08-30",
    tag: "客户故事",
    href: "#",
  },
  {
    title: "团队访谈：工程师的一天",
    excerpt:
      "走近我们的技术团队，了解他们如何保障 7x24 小时的稳定服务。",
    date: "2024-08-18",
    tag: "团队文化",
    href: "#",
  },
];

const categories = [
  { name: "产品动态", description: "了解最新能力、功能升级与路线图" },
  { name: "实践洞察", description: "项目复盘、行业洞察、落地方法论" },
  { name: "客户故事", description: "企业如何借助大模型实现业务突破" },
  { name: "技术研发", description: "深入解析架构、算法、性能优化策略" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        {/* Hero */}
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                洞察 AI 时代的每一次跃迁
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                第一时间获取我们在产品迭代、行业落地、技术研发与安全合规方面的实践经验与观点。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">栏目导航</h2>
              <p className="text-lg text-muted-foreground">
                根据关注重点快速浏览内容
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {categories.map((category) => (
                <Card key={category.name} className="p-6 border-border/60 bg-background">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-5xl"
            >
              <Card className="overflow-hidden border-primary/30 bg-card/40 backdrop-blur">
                <div className="grid gap-8 p-10 lg:grid-cols-2">
                  <div className="flex flex-col space-y-4">
                    <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      {featuredPost.tag}
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                      {featuredPost.title}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div>
                      <Button variant="ghost" asChild>
                        <Link href={featuredPost.href} className="group">
                          阅读全文
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/50 bg-muted/20 p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      &ldquo;在过去一年里，我们帮助 60+ 企业完成了大模型项目交付。经验告诉我们，成功关键在于数据治理、流程设计与持续运营的平衡。&rdquo;
                    </p>
                    <div className="mt-6 text-sm">
                      <p className="font-semibold text-foreground">王宁</p>
                      <p className="text-muted-foreground">交付与成功团队负责人</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">最新文章</h2>
              <Button variant="outline" size="sm">
                订阅更新
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                >
                  <Card className="h-full p-6 flex flex-col justify-between border-border/60 bg-card/60 backdrop-blur">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Tag className="h-4 w-4" />
                          {post.tag}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{post.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    </div>
                    <div className="pt-6">
                      <Button variant="ghost" asChild>
                        <Link href={post.href} className="group">
                          阅读更多
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                订阅月度通讯，洞察行业先锋实践
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                加入超过 10,000 名读者，与我们一起探索大模型技术与商业落地的新趋势。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex h-12 w-full sm:w-auto min-w-[240px] rounded-md border border-input bg-background px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button size="lg" className="w-full sm:w-auto">
                  立即订阅
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
