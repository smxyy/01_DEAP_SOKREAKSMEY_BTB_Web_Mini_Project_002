"use server";

import { getAllWorkspaces, updateWorkspaceById, addWorkspace, updateWorkspaceFavoriteById } from "../../service/workspace-service"

export const getAllWorkspacesAction = async({ pageNo, pageSize, sortBy, sortDirection })=> {

  const res = await getAllWorkspaces({
    pageNo, 
    pageSize, 
    sortBy, 
    sortDirection
  });

  console.log("res in all workspaces service:",res);

  return res?.payload;

}

export const editWorkspaceAction = async(formData, {workspaceId})=> {
  const workspace = formData.get("workspace");

  const res = await updateWorkspaceById({
    workspaceId,
    workspace
  });

  console.log("res in edit workspace service:",res);
  
}

export const addWorkspaceAction = async(formData)=> {
  const workspace = formData.get("workspace");
  console.log("workspaceName in addWorkspaceAction:", workspace);

  const res = await addWorkspace({
    workspace
  });

  console.log("res in add workspace service:",res);
  
}

export const patchWorkspaceFavoriteAction = async(formData)=> {
  const favorite = formData.get("favorite");
  const id = formData.get("id");
  console.log("favorite in patchWorkspaceFavoriteAction:", favorite);

  const res = await updateWorkspaceFavoriteById({
    workspaceId: id,
    isFavorite: favorite
  });

  console.log("res in add patchWorkspaceFavoriteAction:",res);
  return res;
}