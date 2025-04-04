import "../app/globals.css";
import { getUser } from '../../actions/user-action';
import { NotificationBing } from "iconsax-react"
import { auth } from '../../auth';
import Image from 'next/image';

export default async function ProfileUser(){

  const session = await auth();
  
  console.log("session:", session);

  const userData = await getUser(session?.token);
  console.log("user data: ", userData);
  const image = userData.payload.profile;
  const username = userData.payload.username;
  const email = userData.payload.email;
  console.log("image: ", image);
  return (
    <>
      <div className="flex gap-6 items-center">
        <NotificationBing size="24" color="#1e293b"/>
        <div className="flex gap-4 items-center">
          <Image
            className="rounded-full"
            src={image}
            width={50}
            height={50}
            alt="User Profile User"
          />
          <div>
            <p className="text-xl text-[var(--charcoal)] font-semibold">{username}</p>
            <p className="text-[var(--persian-green)]">{email}</p>
          </div>
        </div>
      </div>
    </>
  );
}