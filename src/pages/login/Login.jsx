import "./login.css";

import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import AuthContext from "../../context/auth/context";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = React.useState(false);
  const authContext = React.useContext(AuthContext);

  const history = useHistory();
  const onSubmit = async (data) => {
    await authContext.login({ data, history, isLoading, setIsLoading });
  };

  return (
    <div className="login-wrapper">
      <h1 className="title">Please Log In</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="formItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("UserName", { required: true })}
          />
        </div>
        <div className="formItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("Password", { required: true })}
          />
        </div>
        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
