import { Sparkles, Twitter, Github, Linkedin } from "lucide-react";

import { Footer } from "@/components/ui/footer";

export function SiteFooter() {
  return (
    <Footer
      logo={<Sparkles className="h-10 w-10 text-primary" />}
      brandName="AI大模型服务"
      socialLinks={[
        { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
        { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
        { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com", label: "LinkedIn" },
      ]}
      mainLinks={[
        { href: "/products/mirror", label: "大模型镜像" },
        { href: "/products/api-gateway", label: "API 网关" },
        { href: "/products/recharge", label: "官方代充" },
        { href: "/products/mirror-system", label: "镜像系统" },
      ]}
      legalLinks={[
        { href: "/privacy", label: "隐私政策" },
        { href: "/terms", label: "服务条款" },
      ]}
      copyright={{
        text: "© 2025 GPTW 大模型服务平台",
        license: "All rights reserved",
      }}
    />
  );
}
