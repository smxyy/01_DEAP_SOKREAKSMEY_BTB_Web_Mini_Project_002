import { auth } from '../auth';
import { revalidatePath } from 'next/cache';
export async function addWorkspace( workspaceName ){
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  console.log("workspaceName in add service: ", workspaceName.workspace);

  const session = await auth();

  try {
    const res = await fetch(`${BASE_URL}/workspace`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session?.token}`
      }, 
      body: JSON.stringify({
        workspaceName: workspaceName.workspace
      })
    });
  
    const data = await res.json();
    console.log("data in addWorkspaceService: ", data);
    revalidatePath(`/todo`);
    return data;
  } catch (error){
    console.error("Error adding new workspace: ", error);
    return { error: error.message };
  }
}

export async function updateWorkspaceById({ workspaceId, workspaceName }){
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  const session = await auth();

  try {
    const res = await fetch(`${BASE_URL}/workspace/${workspaceId}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${session?.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        workspaceName: workspaceName
      })
    });
    const data = (await res).json();
    console.log("data in updateWorkspace:", data);
    return data;
  } catch (error){
    console.error("Error updating workspace: ", error);
    return { error: error.message };
  }
}

export async function getWorkspaceById({ workspaceId }){
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  console.log("workspaceId in get:", workspaceId);

  const session = await auth();

  try {
    const res = await fetch(`${BASE_URL}/workspace/${workspaceId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${session?.token}`
      }
    });
    const data = (await res).json();
    console.log("data in getWorkspaceById:", data);
    return data;
  } catch (error){
    console.error("Error getting workspace by id: ", error);
    return { error: error.message };
  }
}

export async function updateWorkspaceFavoriteById({workspaceId, isFavorite}){
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const session = await auth();

  try {
    const res = await fetch(`${BASE_URL}/workspace/${workspaceId}/favorite?favorite=${isFavorite}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${session?.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        favorite: isFavorite
      })
    });
    const data = (await res).json();
    console.log("data in updateWorkspaceFavoriteById:", data);
    
    revalidatePath(`/todo`);
    return data;
  } catch (error){
    console.error("Error patching workspace favorite: ", error);
    return { error: error.message };
  }
}

export async function getAllWorkspaces({pageNo, pageSize, sortBy, sortDirection}){
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  pageNo = +pageNo || 0; 
  pageSize = +pageSize || 5; 
  sortBy = sortBy || "workspaceId"; 
  sortDirection = sortDirection || "ASC"; 

  const session = await auth();

  try {
    const res = await fetch(`${BASE_URL}/workspaces?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`, {
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
    console.log("data in getAllWorkspace:", data);
    
    return data;

  } catch (error){
    console.error("Error getting all workspaces: ", error);
    return { error: error.message };
  }
}
