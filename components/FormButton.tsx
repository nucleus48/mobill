import { Button, ButtonProps } from "./ui/button";
// import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";

export default function FormButton({ children, ...props }: ButtonProps) {
  // const { pending } = useFormStatus();
  const pending = false;

  return (
    <Button disabled={pending} {...props}>
      {pending && <LoaderCircle className="animate-spin" />}
      {children}
    </Button>
  );
}
