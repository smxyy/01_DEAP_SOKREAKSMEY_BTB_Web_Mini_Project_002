"use server";

import { signIn } from "../auth";
import { redirect } from "next/navigation";
import { loginService } from '../service/auth-service';

export const loginAction = async (_, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!password){
    return {
      error: "Password is required!"
    }
  } else if (!email){
    return {
      error: "Email is required!"
    }
  }

  try {
    var res = await loginService({ email, password });
    console.log("res from loginService:", res);

    if (res?.status !== "OK") {
      console.log("message:", res.message);
      console.log("res:", res)
      return { error: res?.message || "Login Failed" };
    }
  } catch(error){
    return { error: res?.message || "Login Failed" };
  }

  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  redirect("/todo");
};