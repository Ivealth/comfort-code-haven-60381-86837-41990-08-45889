import { useState, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FloatingInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  label: string;
  reversePlaceholder: string;
  value: string;
  error?: boolean;
}

export const FloatingInput = ({ 
  label, 
  reversePlaceholder, 
  value, 
  error,
  className,
  ...props 
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const isFloating = isFocused || hasValue;

  return (
    <div className="relative">
      <input
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "w-full text-sm px-4 py-3 rounded-xl border bg-background transition-all duration-200",
          "focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary",
          error ? "border-destructive" : "border-input",
          className
        )}
        {...props}
      />
      
      {/* Floating Label with Border Cutout */}
      <label
        className={cn(
          "absolute left-3 pointer-events-none transition-all duration-200 font-semibold bg-background px-1.5 leading-none",
          isFloating
            ? "-top-[9px] text-[11px] text-primary"
            : "top-3 text-sm text-muted-foreground"
        )}
      >
        {label}
      </label>

      {/* Reverse Placeholder - visible only on focus and when empty */}
      {isFocused && !hasValue && (
        <span className="absolute left-4 top-3 text-sm text-muted-foreground/60 pointer-events-none animate-fade-in">
          {reversePlaceholder}
        </span>
      )}
    </div>
  );
};
