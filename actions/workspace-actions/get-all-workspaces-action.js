"use server";

import { getAllWorkspaces } from "../../service/workspace-service"

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