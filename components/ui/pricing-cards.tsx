import * as React from "react"
import { Check, MoveRight, PhoneCall } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PricingFeature {
  title: string
  description?: string
}

interface PricingAction {
  label: string
  variant?: ButtonProps["variant"]
  icon?: "move-right" | "phone-call"
  className?: string
  href?: string
}

interface PricingNotice {
  title: string
  description: string
  action?: {
    label: string
    href: string
  }
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  priceSuffix?: string
  features: PricingFeature[]
  action: PricingAction
  highlight?: boolean
  notice?: PricingNotice
}

export interface PricingProps {
  badge?: React.ReactNode
  title?: string
  description?: string
  plans: PricingPlan[]
  switcher?: React.ReactNode
}

const ICONS = {
  "move-right": MoveRight,
  "phone-call": PhoneCall,
}

function Pricing({
  badge = "Pricing",
  title = "Prices that make sense!",
  description = "Managing a small business today is already tough.",
  plans,
  switcher,
}: PricingProps) {
  return (
    <div className="w-full py-16 sm:py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex text-center justify-center items-center gap-3 sm:gap-4 flex-col">
          {badge ? (
            typeof badge === "string" ? <Badge>{badge}</Badge> : badge
          ) : null}
          <div className="flex gap-2 flex-col">
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base sm:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center px-4">
                {description}
              </p>
            )}
          </div>
          {switcher}
          <div className="grid pt-12 sm:pt-16 lg:pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-6 sm:gap-8">
            {plans.map((plan) => {
              const Icon = plan.action.icon ? ICONS[plan.action.icon] : undefined
              const variant = plan.action.variant ?? (plan.highlight ? "default" : "outline")

              return (
                <Card
                  key={plan.name}
                  className={cn(
                    "w-full rounded-md",
                    plan.highlight && "shadow-2xl"
                  )}
                >
                  <CardHeader>
                    <CardTitle>
                      <span className="flex flex-row gap-4 items-center font-normal">
                        {plan.name}
                      </span>
                    </CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-6 sm:gap-8 justify-start">
                      <p className="flex flex-row items-center gap-2 text-lg sm:text-xl">
                        <span className="text-3xl sm:text-4xl">{plan.price}</span>
                        {plan.priceSuffix ? (
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {plan.priceSuffix}
                          </span>
                        ) : null}
                      </p>
                      {plan.features.length ? (
                        <div className="flex flex-col gap-4 justify-start">
                          {plan.features.map((feature) => (
                            <div className="flex flex-row gap-4" key={`${plan.name}-${feature.title}`}>
                              <Check className="w-4 h-4 mt-2 text-primary" />
                              <div className="flex flex-col">
                                <p>{feature.title}</p>
                                {feature.description ? (
                                  <p className="text-muted-foreground text-sm">
                                    {feature.description}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                      {plan.notice ? (
                        <div className="flex flex-col gap-3 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
                          <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                              {plan.notice.title}
                            </p>
                            <p className="text-xs text-amber-800 dark:text-amber-200">
                              {plan.notice.description}
                            </p>
                          </div>
                          {plan.notice.action ? (
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="w-fit gap-2 border-amber-500/30 hover:bg-amber-500/10"
                            >
                              <Link href={plan.notice.action.href} target="_blank" rel="noopener noreferrer">
                                {plan.notice.action.label}
                                <MoveRight className="w-3.5 h-3.5" />
                              </Link>
                            </Button>
                          ) : null}
                        </div>
                      ) : null}
                      {plan.action.href ? (
                        <Button
                          asChild
                          variant={variant}
                          className={cn("gap-4", plan.action.className)}
                        >
                          <Link href={plan.action.href}>
                            {plan.action.label}
                            {Icon ? <Icon className="w-4 h-4" /> : null}
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant={variant}
                          className={cn("gap-4", plan.action.className)}
                        >
                          {plan.action.label}
                          {Icon ? <Icon className="w-4 h-4" /> : null}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Pricing }
