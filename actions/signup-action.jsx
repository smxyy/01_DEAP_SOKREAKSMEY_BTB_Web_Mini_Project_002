"use server";
import { redirect } from "next/navigation";
import { registerService } from "../service/register-service";

export const registerAction = async (_, formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!username) {
    return { error: "Username is required!" };
  } else if (!email) {
    return { error: "Email is required!" };
  } else if (!password) {
    return { error: "Password is required!" };
  }

  console.log("email:", email);
  console.log("pass:", password);
  console.log("username:", username);

  try {
    const res = await registerService({
      username,
      email,
      password,
    });

    console.log("res in register action:", res);

    // Check for failure
    if (res?.status !== "CREATED") {
      return { error: res?.message || "Registration Failed" };
    }

    return { success: true };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
};