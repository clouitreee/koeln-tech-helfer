import * as React from "react"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-400",
  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-400",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300"
}

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-11 px-6 text-base"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => {
    const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`
    return <button ref={ref} className={cls} {...props} />
  }
)
Button.displayName = "Button"
