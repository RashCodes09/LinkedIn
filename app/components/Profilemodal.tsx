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
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../global/slice";
import { CameraIcon } from "lucide-react";
import Image from "next/image";

export function Profilemodal() {
  const user = useSelector((state: any) => state.userState);

  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const updateprofile = async () => {
    const url = "/api/users/post";
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
    }).then(async (res) => {
      let data = await res.json();
      // console.log("must show:", data);
      dispatch(authUser(data));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {user?.data?.avatar ? (
          <Image
            width={1000}
            height={1000}
            src={user?.data?.avatar}
            alt="text"
            className="rounded-full w-ful h-full object-cover"
          />
        ) : (
          <CameraIcon className="text-[20px] text-blue-600" />
        )}
        {/* </Button> */}
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
            <Input
              id="link"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid ">
            <Label htmlFor="link" className="sr-only">
              profession
            </Label>
            <Input
              id="link"
              placeholder="Enter your profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </div>
          <div className="grid ">
            <Label htmlFor="link" className="sr-only">
              avatar
            </Label>
            <Input
              id="link"
              placeholder="Enter your avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={
                updateprofile
                // console.log("job done!!");
              }
            >
              Update Now
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
