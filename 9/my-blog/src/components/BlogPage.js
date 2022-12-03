import React, { useContext } from "react";
import { UserContext } from "../contexts/user";

export default function BlogPage() {
  const { user, dispatch } = useContext(UserContext);

  console.log(user, dispatch);
  return (
    <div>
      <h1>BlogPage</h1>
      <p>{user.job}</p>
      <button onClick={() => dispatch({ type: "changeJob", text: "BE-dev" })}>
        Change Job
      </button>
    </div>
  );
}
