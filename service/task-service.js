import { auth } from '../auth'
import { revalidatePath } from 'next/cache';

export async function addTaskByWorkspaceId({ workspaceId, task }){
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
        taskTitle: task.title,
        taskDetails: task.details,
        tag: task.tag,
        endDate: task.endDate
      })
    });
  
    const data = await res.json();
    console.log("data in addTaskService: ", data);
    revalidatePath(`/todo/${workspaceId}?q=workspace`);
    return data;
  } catch (error){
    console.error("Error adding new task: ", error);
    return { error: error.message };
  }
}

export async function getAllTasksByWorkspaceId({workspaceId, pageNo, pageSize, sortBy, sortDirection}){
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  pageNo = +pageNo || 0; 
  pageSize = +pageSize || 5; 
  sortBy = sortBy || "taskId"; 
  sortDirection = sortDirection || "ASC"; 

  const session = await auth();

  try {
    const res = await fetch(`${BASE_URL}/tasks/workspace/${workspaceId}?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${session?.token}`
      }
    },
    // {
    //   next: { tags : ["addWorkspace"]}
    // }
  );

    const data = await res.json();
    console.log("data in getAllTasksByWorkspaceID:", data);
    
    return data;

  } catch (error){
    console.error("Error getting all workspaces: ", error);
    return { error: error.message };
  }
}

export async function updateTaskStatusByWorkspaceIdAndTaskId({ taskId, workspaceId, status }){
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  console.log("workspaceId in add task service: ", workspaceId);
  console.log("\ntask in add task service:", task);

  const session = await auth();

  try {
    const res = await fetch(`${BASE_URL}/task/${taskId}/workspace/${workspaceId}/status?status=${status}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session?.token}`
      }});
  
    const data = await res.json();
    console.log("data in updateTaskStatusByWorkspaceIdAndTaskId: ", data);
    revalidatePath(`/todo/${workspaceId}?q=workspace`);
    return data;
  } catch (error){
    console.error("Error adding new task: ", error);
    return { error: error.message };
  }
}
