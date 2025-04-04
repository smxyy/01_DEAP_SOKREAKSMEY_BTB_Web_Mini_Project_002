"use server";

import {updateWorkspaceById} from "../../service/workspace-service"

export const editWorkspaceAction = async(formData, {workspaceId})=> {
  const workspace = formData.get("workspace");

  const res = await updateWorkspaceById({
    workspaceId,
    workspace
  });

  console.log("res in edit workspace service:",res);
  
}