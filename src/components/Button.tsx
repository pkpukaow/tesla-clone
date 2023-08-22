import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@utils/cn"


const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                outline: "text-white border border-[3px] border-white",
                black: "text-white bg-black",
                white: "text-black bg-slate-200",
                textWhite: "text-white",
                navMenuBtn: "text-white py-2 px-4 bg-[#0000000D]"
            },
            size: {
                default: "h-9 px-4 py-2 w-full sm:w-60",
                base: ""
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }