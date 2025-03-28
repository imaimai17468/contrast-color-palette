import { Aurora } from "../parts/aurora";
import { Header } from "../parts/header";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props): React.ReactNode => {
  return (
    <>
      <Aurora />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex">
          <div className="flex-grow">{children}</div>
        </main>
      </div>
    </>
  );
};
