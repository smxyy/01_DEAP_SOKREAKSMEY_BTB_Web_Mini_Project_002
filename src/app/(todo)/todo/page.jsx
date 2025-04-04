
import { auth } from '../../../../auth';
import SidebarData from '../../../lib/sidebar-data'
import { redirect } from "next/navigation";

export default async function TodoPage(){
  
  const session = await auth();

  console.log("session:", session);

  if (!session?.token){
    redirect("/login");
  }

  return (
    <>
      Todo Page
    </>
  );
}