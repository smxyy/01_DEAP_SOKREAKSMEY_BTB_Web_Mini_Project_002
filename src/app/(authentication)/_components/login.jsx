"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, Mail } from "lucide-react";
import Link from "next/link";
import React, {useActionState} from "react";
import { loginAction } from '../../../../actions/login-action';

export default function LoginComponent() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  return (
    <form 
        action = {formAction}
        className="space-y-6 bg-white">
      {/* email */}
      <div>
        <Label
          htmlFor="email"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <Mail size={20} /> Email
        </Label>

        <Input
          type="text"
          name="email"
          placeholder="Please type your email"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
        />
      </div>

      {/* password */}
      <div>
        <Label
          htmlFor="password"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <KeyRound size={20} /> Password
        </Label>

          <Input
            type="password"
            name="password"
            placeholder="Please type your password"
            className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
          />
      </div>

      {/* sign in button */}
      <Button
        type="submit"
        className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold"
      >
        {isPending ? "Loading" : "Login"}
      </Button>

      {/* underline */}
      <div>
        <div className="border-b border-b-light-steel-blue">
        </div>
        <div className="flex justify-between items-center">
          {state?.error && <p className="text-red-500 pt-2">{state.error}</p>}
          <div className="capitalize text-right mt-2 font-normal">
            create new accont?{" "}
            <Link
              href={"/register"}
              className="hover:text-persian-green hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* sign in with google */}
      <div className=" bg-ghost-white rounded-lg text-center">
        <Button className="flex gap-2 items-start justify-center w-full bg-ghost-white text-charcoal shadow-none hover:bg-ghost-white/50">
          <img src="/Google Icon.svg" alt="google icon" /> Login with google
        </Button>
      </div>
    </form>
  );
}
