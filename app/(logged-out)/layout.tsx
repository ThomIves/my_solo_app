import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="gap-4 flex flex-col min-h-screen items-center p-24 justify-center">
        {children}
      </div>
      <LightDarkToggle className="fixed right-2 top-1/2" />
    </>
  );
}
