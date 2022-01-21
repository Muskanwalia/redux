import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const [user, setUser] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios({
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
      method: "get",
    }).then((response) => {
      console.log(response, "getResponse");
      setUser(response.data);
    });
  }, []);
  console.log(user);

  return (
    <div>
      Name : {user?.name}
      <br />
      Username : {user?.username}
      <br />
      Email : {user?.email}
      <br />
      Phone : {user?.phone}
      <br />
      Website : {user?.website}
      <br />
    </div>
  );
}

