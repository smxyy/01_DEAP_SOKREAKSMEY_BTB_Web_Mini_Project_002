import {Airplane, Book, Camera, Code, Edit, EmojiHappy, Home2, Music, Video, Weight} from "iconsax-react";
import { getAllWorkspacesAction } from '../../actions/workspace-actions/get-all-workspaces-action';

export const items = [
    {
        title: "Home",
        url: "/",
        icon: Home2
    },
    {
        title: "Book Categories",
        url: "/book-categories",
        icon: Book
    },
    {
        title: "Old School Cartoons",
        url: "/old-school-cartoons",
        icon: EmojiHappy
    },
    {
        title: "Movies & TV Shows",
        url: "",
        icon: Video
    },
    {
        title: "Music",
        url: "",
        icon: Music
    },
    {
        title: "Photography",
        url: "",
        icon: Camera
    },
    {
        title: "Sports & Fitness",
        url: "",
        icon: Weight
    },
    {
        title: "Technology & Gadgets",
        url: "",
        icon: Code
    },
    {
        title: "Travel & Exploration",
        url: "",
        icon: Airplane
    },
    {
        title: "Writing & Journaling",
        url: "",
        icon: Edit
    },
]

export default async function SidebarData(){
  const workspaces = await getAllWorkspacesAction( 
    0, 
    5, 
    "workspaceId", 
    "ASC");
    console.log("workspaces:", workspaces);
}