"use server";

import {addWorkspace} from "../../service/workspace-service"
import { revalidateTag } from 'next/cache'

export const addWorkspaceAction = async(formData)=> {
  const workspace = formData.get("workspace");
  console.log("workspaceName in addWorkspaceAction:", workspace);

  const res = await addWorkspace({
    workspace
  });
  // revalidateTag("addWorkspace")

  console.log("res in add workspace service:",res);
  
}