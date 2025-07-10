import { cn } from "@/lib/utils";

function Input({ className, type, placeholder, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      placeholder={placeholder || "Enter text..."}
      className={cn(
        "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-sm border bg-transparent px-5 py-3 text-lg shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
