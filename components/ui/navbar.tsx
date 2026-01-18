"use client"

import { Sparkles, Code, CreditCard, Globe, Workflow, Database, Settings2, Menu, Shield, AlertCircle, Key } from "lucide-react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    title: "AI大模型服务",
  },
  menu = [
    {
      title: "产品服务",
      url: "#",
      items: [
        {
          title: "AI聚合站",
          description: "对话、绘画、视频、PPT一站式创作",
          icon: <Sparkles className="size-5 shrink-0" />,
          url: "/products/mirror",
        },
        {
          title: "API网关",
          description: "统一的大模型API中转",
          icon: <Code className="size-5 shrink-0" />,
          url: "/products/api-gateway",
        },
        {
          title: "官方代充",
          description: "ChatGPT官方订阅代充",
          icon: <CreditCard className="size-5 shrink-0" />,
          url: "/products/recharge",
        },
        /*{
          title: "镜像系统",
          description: "国内直连ChatGPT官网",
          icon: <Globe className="size-5 shrink-0" />,
          url: "/products/mirror-system",
        },*/
        {
          title: "GPT-学术优化",
          description: "翻译、润色等批量化处理文档，",
          icon: <Globe className="size-5 shrink-0" />,
          url: "https://academic.gptw.top/",
        },
      ],
    },
    {
      title: "定制服务",
      url: "#",
      items: [
        {
          title: "创作工作流",
          description: "自动化创作流程",
          icon: <Workflow className="size-5 shrink-0" />,
          url: "/services/workflow",
        },
        {
          title: "知识库搭建",
          description: "企业专属知识库",
          icon: <Database className="size-5 shrink-0" />,
          url: "/services/knowledge-base",
        },
        {
          title: "模型微调",
          description: "定制化模型训练",
          icon: <Settings2 className="size-5 shrink-0" />,
          url: "/services/fine-tuning",
        },
      ],
    },
    {
      title: "使用教程",
      url: "#",
      items: [
        {
          title: "AI聚合平台使用教程",
          description: "学习如何使用AI聚合站进行对话、绘画、视频、PPT创作",
          icon: <Sparkles className="size-5 shrink-0" />,
          url: "/tutorials/ai-platform",
        },
        {
          title: "API网关使用教程",
          description: "开发者快速接入统一API网关的完整指南",
          icon: <Code className="size-5 shrink-0" />,
          url: "/tutorials/api-gateway",
        },
        {
          title: "官方代充教程",
          description: "ChatGPT Plus/Team官方订阅代充购买与使用流程",
          icon: <CreditCard className="size-5 shrink-0" />,
          url: "/tutorials/recharge",
        },
        {
          title: "便捷使用API Key",
          description: "第三方平台快速配置GPTW API Key，演示多模型对话效果",
          icon: <Key className="size-5 shrink-0" />,
          url: "/tutorials/api-key-usage",
        },
      ],
    },
    {
      title: "定价方案",
      url: "/#pricing",
    },
    {
      title: "联系我们",
      url: "/contact",
    },
  ],
  auth = {
    login: { text: "AI聚合站", url: "https://ai.gptw.top" },
    signup: { text: "API控制台", url: "https://api.pro365.top" },
  },
}: NavbarProps) => {
  return (
    <section className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/20">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="hidden justify-between lg:flex py-4">
          <div className="flex items-center gap-6">
            <Link href={logo.url} className="flex items-center gap-2 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/70 dark:from-primary dark:via-blue-500 dark:to-purple-600 flex items-center justify-center shadow-lg shadow-primary/25 dark:shadow-primary/40 transition-all group-hover:shadow-xl group-hover:shadow-primary/40 dark:group-hover:shadow-primary/60 group-hover:scale-105 dark:ring-1 dark:ring-white/20">
                <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-br from-white/20 to-transparent dark:from-white/30 dark:to-white/5" />
                <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 dark:from-white dark:to-gray-300">{logo.title}</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm">
              <Link href={auth.login.url}>{auth.login.text}</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={auth.signup.url}>{auth.signup.text}</Link>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between py-4">
            <Link href={logo.url} className="flex items-center gap-2 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/70 dark:from-primary dark:via-blue-500 dark:to-purple-600 flex items-center justify-center shadow-lg shadow-primary/25 dark:shadow-primary/40 transition-all group-hover:shadow-xl group-hover:shadow-primary/40 dark:group-hover:shadow-primary/60 group-hover:scale-105 dark:ring-1 dark:ring-white/20">
                <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-br from-white/20 to-transparent dark:from-white/30 dark:to-white/5" />
                <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 dark:from-white dark:to-gray-300">{logo.title}</span>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href={logo.url} className="flex items-center gap-2 group">
                        <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/70 dark:from-primary dark:via-blue-500 dark:to-purple-600 flex items-center justify-center shadow-lg shadow-primary/25 dark:shadow-primary/40 transition-all group-hover:shadow-xl group-hover:shadow-primary/40 dark:group-hover:shadow-primary/60 group-hover:scale-105 dark:ring-1 dark:ring-white/20">
                          <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-br from-white/20 to-transparent dark:from-white/30 dark:to-white/5" />
                          <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 dark:from-white dark:to-gray-300">
                          {logo.title}
                        </span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline">
                        <Link href={auth.login.url}>{auth.login.text}</Link>
                      </Button>
                      <Button asChild>
                        <Link href={auth.signup.url}>{auth.signup.text}</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                    href={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <Link
      key={item.title}
      className="inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-primary/10"
      href={item.url}
    >
      {item.title}
    </Link>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="font-semibold py-2">
      {item.title}
    </Link>
  );
};

export { Navbar };
