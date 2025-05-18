import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'shimmer'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 font-medium transition-all duration-300",
          variant === 'default' && "bg-[#182D20] text-white hover:bg-[#2A4A30]",
          variant === 'outline' && "border-2 border-[#182D20] text-[#182D20] hover:bg-[#182D20] hover:text-white",
          variant === 'shimmer' && `
            bg-gradient-to-r from-[#182D20] via-[#182D20] to-[#182D20]
            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-transparent before:via-[#FFD700]/20 before:to-transparent
            before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-[1.5s]
            after:absolute after:inset-0
            after:bg-gradient-to-r after:from-transparent after:via-[#FF69B4]/20 after:to-transparent
            after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-[2s]
            text-white
          `,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button } 