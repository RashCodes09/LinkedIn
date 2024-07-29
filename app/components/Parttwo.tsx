import React, { useEffect, useState } from "react";
import Searchcomp from "./Searchcomp";
import Postcomp from "./Postcomp";
import { useSelector } from "react-redux";

const Parttwo = () => {
  const user = useSelector((state: any) => state.userState);
  // console.log("post:", user?.data?.post);

  const data = user?.data ? user?.data : user;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetching = async (id: string = data?._id) => {
      const url = "/api/users/post";
      return await fetch(`${url}/${id}`, {
        method: "GET",
        cache: "no-cache",
        next: {
          tags: ["possts"],
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setPosts(res?.data);
        });
    };

    fetching();
  }, [user]);

  console.log(posts);
  return (
    <div>
      <Searchcomp />

      {posts.map((el: any) => (
        <Postcomp {...el} key={el.id} />
      ))}
    </div>
  );
};

export default Parttwo;
