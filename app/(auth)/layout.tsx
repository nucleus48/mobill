import { Card } from "@/components/ui/card";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="container min-h-max h-screen py-16 flex items-center  justify-center">
      <Card className="w-full max-w-[400px]">{children}</Card>
    </main>
  );
}
