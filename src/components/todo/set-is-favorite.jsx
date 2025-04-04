"use client";

import { useState } from 'react';

import { Star1 } from "iconsax-react"
import { Toggle } from "@/components/ui/toggle"
import { patchWorkspaceFavoriteAction } from "../../../actions/workspace-actions/workspace-actions"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SetIsFavorite({wid}){
  const [isFavorite, setIsFavorite] = useState(false);
  const handleToggle = () => {
    setIsFavorite((prev) => !prev); 
  };
  return (
    <>
       <form 
          action = {patchWorkspaceFavoriteAction}
          className="space-y-6 bg-white">
            <Input 
              type="hidden"
              name="id"
              value={wid}
            />
            <Input 
              type="hidden"
              name="favorite"
              value={isFavorite}
            />
            <Toggle aria-label="Toggle favorite star"
              pressed={isFavorite}
              onPressedChange={handleToggle}
              asChild
            >
              <Button type="submit" >
                <Star1 className="star" size="30" 
                color={isFavorite ? "oklch(82.8% 0.189 84.429)" : "var(--charcoal)"}
                variant={isFavorite ? "Bold" : "Outline"}
                />
              </Button>
              {/* <Bold className="h-4 w-4" /> */}
            </Toggle>
      </form>
    </>
  );
}