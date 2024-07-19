import { cn } from "@/lib/utils";
import Link from "next/link";

export const Root = ({
  children,
  className,
  href,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  title?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex overflow-hidden rounded-lg border-2 border-appPrimary bg-white",
        className
      )}
    >
      <Link
        href={href}
        title={title}
        className="absolute top-0 left-0 z-10 w-full h-full"
      />
      {children}
    </div>
  );
};
