import { auth } from '../auth'

export async function addTaskByWorkspaceId( workspaceId, task ){
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  console.log("workspaceId in add task service: ", workspaceId);
  console.log("\ntask in add task service:", task);

  const session = await auth();

  try {
    const res = await fetch(`${BASE_URL}/task/workspace/${workspaceId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session?.token}`
      }, 
      body: JSON.stringify({
        taskTitle: task.taskTitle,
        taskDetails: task.taskDetails,
        tag: task.tag,
        endDate: task.endDate
      })
    });
  
    const data = await res.json();
    console.log("data in addTaskService: ", data);
    return data;
  } catch (error){
    console.error("Error adding new task: ", error);
    return { error: error.message };
  }
}

// export async function addTask( workspaceId, task ){
//   const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

//   console.log("workspaceId in add task service: ", workspaceId);

//   const session = await auth();

//   try {
//     const res = await fetch(`${BASE_URL}/task/workspace/${workspaceId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${session?.token}`
//       }, 
//       body: JSON.stringify({
//         taskTitle: task.taskTitle,
//         taskDetails: task.taskDetails,
//         tag: task.tag,
//         endDate: task.endDate
//       })
//     });
  
//     const data = await res.json();
//     console.log("data in addTaskService: ", data);
//     return data;
//   } catch (error){
//     console.error("Error adding new task: ", error);
//     return { error: error.message };
//   }
// }