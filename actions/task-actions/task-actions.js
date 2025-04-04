"use server";

export const addTaskAction = async ( formData ) => {
  const title = formData.get("title");
  const tag = formData.get("tag");
  const endDate = formData.get("date");
  const details = formData.get("details");

  console.log("title: ", title);
  console.log("tag:", tag);
  console.log("endDate:", endDate);
  console.log("details:", details);

  const task = {
    title,
    tag,
    endDate,
    details,
  };

  const res = await addTaskByWorkspaceId({
    workspaceId,
    task
  });

  console.log("res in addTaskByWorkspaceId: ", res);
  return res;
}

// export const getAllWorkspacesAction = async({ pageNo, pageSize, sortBy, sortDirection })=> {

//   const res = await getAllWorkspaces({
//     pageNo, 
//     pageSize, 
//     sortBy, 
//     sortDirection
//   });

//   console.log("res in all workspaces service:",res);

//   return res?.payload;

// }