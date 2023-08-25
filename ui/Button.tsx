import * as React from "react";
import { cn } from "@/utils/cn";

type ButtonElement = HTMLButtonElement;
type ButtonElementProps = React.ButtonHTMLAttributes<ButtonElement>;

export const Button = React.forwardRef<ButtonElement, ButtonElementProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "box-border rounded-md border border-zinc-700 px-6 py-2 text-service-desc-light transition-all duration-200 ease-in-out hover:border-zinc-400 hover:bg-service-card hover:text-gray-200",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
