import { createContext, useReducer } from "react";

const userReducer = (state, action) => {
  switch (action.type) {
    case "changeJob":
      return { ...state, job: action.text };

    default:
      break;
  }
};

const initialUser = {
  name: "young",
  job: "FE-dev",
};

const UserStore = (props) => {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  console.log(user);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext();

export default UserStore;
