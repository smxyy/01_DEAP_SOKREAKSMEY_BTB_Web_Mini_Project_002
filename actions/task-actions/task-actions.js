"use server";

import { addTaskByWorkspaceId, updateTaskStatusByWorkspaceIdAndTaskId } from "../../service/task-service"

export const addTaskAction = async ( formData ) => {
  const title = formData.get("title");
  const tag = formData.get("tag");
  const endDate = formData.get("date");
  const details = formData.get("details");
  const id = formData.get("id");

  console.log("title: ", title);
  console.log("tag:", tag);
  console.log("endDate:", endDate);
  console.log("details:", details);
  console.log("id in add task:", id);

  const task = {
    title,
    tag,
    endDate,
    details,
  };

  console.log("task:", task)

  const res = await addTaskByWorkspaceId({
    workspaceId: id,
    task: task
  });

  console.log("res in addTaskByWorkspaceId: ", res);
  return res;
}

export async function updateTaskStatusAction({ taskId, workspaceId, status }) {
  try {
    const res = await updateTaskStatusByWorkspaceIdAndTaskId({
      taskId,
      workspaceId,
      status,
    });
    return res; // Return the response (success or error)
  } catch (error) {
    console.error("Error in updateTaskStatusAction:", error);
    return { error: error.message };
  }
}