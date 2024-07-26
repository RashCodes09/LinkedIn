import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Profilemodal() {
  const user = useSelector((state: any) => state.userState);

  const [name, setName] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const updateprofile = async () => {
    const url = "http://localhost:3000/api";
    await fetch(`${url}/${user?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        profession,
        avatar,
      }),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border hover:bg-gray-100 transition-all duration-300 cursor-pointer outline-none w-full h-[50px] rounded-full px-4 placeholder:font-semibold placeholder:text-[12px] placeholder:text-black placeholder:flex justify-start"
        >
          Start Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update your profile</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="grid  ">
            <Label htmlFor="link" className="sr-only">
              Name
            </Label>
            <Input id="link" placeholder="Enter your name" />
          </div>
          <div className="grid ">
            <Label htmlFor="link" className="sr-only">
              profession
            </Label>
            <Input id="link" placeholder="Enter your profession" />
          </div>
          <div className="grid ">
            <Label htmlFor="link" className="sr-only">
              avatar
            </Label>
            <Input id="link" placeholder="Enter your avatar" />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Update Now
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
