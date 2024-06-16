"use client";

import FormButton from "@/components/FormButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { createUser } from "../actions";
import { useFormState } from "react-dom";

export default function SignupForm() {
  const [state, formAction] = useFormState(createUser, null);

  return (
    <form className="space-y-4" action={formAction}>
      <div>
        <Label htmlFor="fullname">Name</Label>
        <Input name="fullname" id="fullname" placeholder="full name" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" placeholder="email address" required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          name="password"
          id="password-input"
          placeholder="password"
          required
        />
      </div>
      <FormButton className="w-full">Create account</FormButton>
    </form>
  );
}
