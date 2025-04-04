"use server";
import { userService} from '../service/user-service'

export const getUser = async(token) =>{
  const res = await userService(token);
  console.log("res in user service:", res);
  return res;
}