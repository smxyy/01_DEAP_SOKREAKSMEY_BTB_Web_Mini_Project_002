import { auth } from '../../../../../auth';
import { redirect } from "next/navigation";
import CardComponent from '../../../../components/card';
import AddEditTask from '../../../../components/add-edit-task';
import {getWorkspaceById} from '../../../../../service/workspace-service'
import { getAllTasksByWorkspaceId } from '../../../../../service/task-service'
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

  const tasks = await getAllTasksByWorkspaceId({workspaceId: id}, "0", "5", "taskId", "ASC");
  console.log("tasks:", tasks);

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
            {tasks.payload.map((task) => 
              task.status === 'NOT_STARTED' && (
                <CardComponent key={task.taskId} task={task} workspaceId={id} />
              )
            )}
          </div>
          <div>
            <p className="text-[var(--royal-blue)] pb-2 text-lg">In Progress</p>
            <hr className="border-[var(--royal-blue)]" />
            {tasks.payload.map((task) => 
              task.status === 'IN_PROGRESS' && (
                <CardComponent key={task.taskId} task={task} />
              )
            )}
          </div>
          <div>
            <p className="text-[var(--persian-green)] pb-2 text-lg">Finished</p>
            <hr className="border-[var(--persian-green)]" />
            {tasks.payload.map((task) => 
              task.status === 'FINISHED' && (
                <CardComponent key={task.taskId} task={task} />
              )
            )}
          </div>
        </div>
      </div>
      <footer className="fixed bottom-16 right-20 w-full p-4">
          <div className="text-lg font-bold w-full flex justify-end">
            <AddEditTask workspaceId={id} dataType = "add" />
          </div>
      </footer>
    </>
  );
}