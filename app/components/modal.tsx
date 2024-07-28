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
import { useSelector } from "react-redux";
import { useState } from "react";
import { revalidateTag } from "next/cache";
// import { revalidateTag } from "next/cache";

export function DialogCloseButton() {
  const user = useSelector((state: any) => state.userState);
  // console.log("seeing", user);

  // const [content, setContent] = useState<string>("");
  // const [image, setImage] = useState<string>("");
  const data = user?.data?._id ? user?.data : user;

  const makePost = async (formData: FormData) => {
    const content = formData.get("content");
    const avatar = formData.get("image");
    const url = "/api/users/post";
    await fetch(`${url}/${data?._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        content,
        avatar,
      }),
      next: {
        tags: ["possts"],
      },
    });

    revalidateTag("possts");
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
          <DialogTitle>Share Your Post</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <form action={makePost}>
          <div className="flex flex-col gap-3">
            <div className="grid ">
              <Label htmlFor="link" className="sr-only">
                Write Post
              </Label>
              <Input
                id="link"
                placeholder="write your post here"
                name="content"
              />
            </div>
            <div className="grid ">
              <Label htmlFor="link" className="sr-only">
                Image
              </Label>
              <Input
                id="link"
                placeholder="pass your image url here"
                name="image"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="submit" variant="secondary">
                Create Post
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
