import { auth } from '../../../../../auth';
import { redirect } from "next/navigation";
import CardComponent from '../../../../components/card';
import AddEditTask from '../../../../components/add-edit-task';
import {getWorkspaceById} from '../../../../../service/workspace-service'
import { Star1 } from "iconsax-react"
import SetIsFavorite from '../../../../components/todo/set-is-favorite';

export default async function TodoIdPage({params}){

  const id = (await params).id;
  console.log("id in todoId:", id);

  const session = await auth();

  console.log("session:", session);

  if (!session?.token){
    redirect("/login");
  }

  const res = await getWorkspaceById({workspaceId: id});
  console.log("res of getWorkspaceById:", res);

  return (
    <>
      <div className="px-14 pt-8 grid gap-5">
        <div className="flex justify-between ">
          <h2 className="text-2xl font-semibold">{res?.payload.workspaceName}</h2>
          {/* <Star1 size="26" color="var(--charcoal)"/> */}
          <SetIsFavorite wid={id} />
        </div>
        <div className="grid grid-cols-3 gap-14">
          <div>
            <p className="text-[var(--watermelon-red)] pb-2 text-lg">Not Started</p>
            <hr className="border-[var(--watermelon-red)]" />
            <CardComponent />
          </div>
          <div>
            <p className="text-[var(--royal-blue)] pb-2 text-lg">In Progress</p>
            <hr className="border-[var(--royal-blue)]" />
          </div>
          <div>
            <p className="text-[var(--persian-green)] pb-2 text-lg">Finished</p>
            <hr className="border-[var(--persian-green)]" />
          </div>
        </div>
      </div>
      <footer className="fixed bottom-16 right-20 w-full bg-white p-4">
          <div className="text-lg font-bold w-full flex justify-end">
            <AddEditTask workspaceId={id} dataType = "add" />
          </div>
      </footer>
    </>
  );
}