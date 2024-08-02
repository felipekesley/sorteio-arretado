import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
  text: string;
};

export const Text = (props: Props) => {
  const { className, text } = props;
  return <p className={cn("text-appText-400", className)}>{text}</p>;
};
