import { redirect } from "next/navigation";

export const loginService = async ({ email, password }) => {
  console.log("email: ", email);
  console.log("password: ", password);

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  console.log("data in login service: ", data);
  if (!data) {
    redirect("/login");
  }
  return data;
};