// "use client";

import "../app/globals.css";
import { AddSquare } from 'iconsax-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import React, { useState } from "react";
import { addWorkspaceAction, editWorkspaceAction } from '../../actions/workspace-actions/workspace-actions';

export default function AddEditWorkspace({datatype}){
  console.log("data passing:", datatype);

  return (
    <>
      <Dialog>
        <div className="flex justify-between items-center px-4 pt-8">
          <h3 className="text-[var(--light-steel-blue)] text-lg font-semibold pb-2">
            Workspace
          </h3>
          <DialogTrigger asChild>
            <AddSquare size="22" color="var(--light-steel-blue)" 
                className="cursor-pointer" />
          </DialogTrigger>
        </div>
        <DialogContent className="sm:max-w-[425px] bg-[var(--ghost-white)]">
          <DialogHeader>
            {datatype === "add" && (
              <DialogTitle>Create New Workspace</DialogTitle>
            )} 

            {datatype === "edit" && (
              <DialogTitle>Edit Workspace</DialogTitle>
            )}
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
          </DialogHeader>
          <form 
              action = {datatype === "add" ? addWorkspaceAction : editWorkspaceAction}
              className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Workspace Name
              </Label>
              <Input type="text"
                id="name"
                name="workspace"
                className="col-span-3" 
                placeholder="Please type your workspace name" />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-[var(--sidebar-primary)] text-[var(--ghost-white)]">
                {datatype === "add" ? "Create" : "Update"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}