import { AppRoot } from "@/components/_shared/appRoot";
import { Header } from "@/components/_shared/header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppRoot>
        <Header />
        {children}
      </AppRoot>
    </>
  );
};

export default AppLayout;
