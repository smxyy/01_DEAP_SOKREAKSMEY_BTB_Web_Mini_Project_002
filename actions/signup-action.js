"use server";
import { redirect } from 'next/navigation';
import { registerService} from '../service/register-service'

export const registerAction = async(formData) =>{
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await registerService({
    username,
    email,
    password,
  });

  console.log("res in register action:", res);
  if (res)
    redirect("/login");
  // return res;
}