import React from "react";

const fetching = async (id: string) => {
  const url = "/api/users/post";
  return await fetch(`${url}/${id}`, {
    method: "GET",
    cache: "no-cache",
    next: {
      tags: ["possts"],
    },
  }).then((res) => {
    return res.json();
  });
};

// revalidateTag("possts");

// useEffect(() => {
//   console.log(fetching());
// }, []);

export default fetching;
