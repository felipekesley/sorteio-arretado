import type { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};
