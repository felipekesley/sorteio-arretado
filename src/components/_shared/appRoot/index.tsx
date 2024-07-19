import { cn } from "@/lib/utils";

export const AppRoot = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full max-w-[475px] pt-6 mx-auto min-h-screen bg-appPrimary-strong appblur",
        className
      )}
    >
      {children}
    </div>
  );
};
