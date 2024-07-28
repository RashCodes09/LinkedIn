// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useSelector } from "react-redux";
// import { FC, useState } from "react";
// import { revalidateTag } from "next/cache";
// import { MdComment } from "react-icons/md";
// // import { revalidateTag } from "next/cache";

// interface iProp {
//   postID: string | unknown;
// }

// const Modalcomment: FC<iProp> = ({ postID }) => {
//   const user = useSelector((state: any) => state.userState);
//   console.log("seeing", user);

//   // const [content, setContent] = useState<string>("");
//   // const [image, setImage] = useState<string>("");
//   const data = user?.data?._id ? user?.data : user;

//   const makePost = async (formData: FormData) => {
//     const reply = formData.get("reply");
//     const url = "/api/users/post";
//     await fetch(`${url}/${data?._id}/${postID}`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         reply,
//       }),
//     });

//     revalidateTag("possts");
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <MdComment className="text-neutral-500" />
//       {/* </DialogTrigger> */}
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle>Share Your Post</DialogTitle>
//           <DialogDescription>
//             Anyone who has this link will be able to view this.
//           </DialogDescription>
//         </DialogHeader>
//         <form action={makePost}>
//           <div className="flex flex-col gap-3">
//             <div className="grid ">
//               <Label htmlFor="link" className="sr-only">
//                 Write comment
//               </Label>
//               <Input
//                 id="link"
//                 placeholder="write your post here"
//                 name="reply"
//               />
//             </div>
//           </div>
//           <DialogFooter className="sm:justify-start">
//             <DialogClose asChild>
//               <Button type="submit" variant="secondary">
//                 Create Post
//               </Button>
//             </DialogClose>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };
// export default Modalcomment;
