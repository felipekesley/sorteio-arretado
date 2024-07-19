import type { PropsWithChildren } from "react";

export const Root = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-4">{children}</div>;
};
