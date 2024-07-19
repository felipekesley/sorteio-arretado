import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={cn("py-6 w-full", className)}>{children}</section>;
};
