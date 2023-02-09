import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { appRoute } from "../../../const/routes.const";
import FullLayout from "../../../layouts/FullLayout";
import { loginAction } from "../../../stores/action/auth.action";
import "./style.scss";

function LoginPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  if (user) return <Navigate to={appRoute.home} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    dispatch(
      loginAction({
        email: e.target[0].value,
        password: e.target[1].value,
      })
    );
  };

  return (
    <FullLayout>
      <div className="login-page">
        <LoginComponent mode="login" onSubmit={handleSubmit} />
      </div>
    </FullLayout>
  );
}

export default LoginPage;

const mode = "login";

const LoginComponent = (props) => {
  const [mode, setMode] = useState(props.mode);

  function toggleMode() {
    var newMode = mode === "login" ? "signup" : "login";
    setMode(newMode);
  }

  return (
    <div>
      <div
        className={`form-block-wrapper form-block-wrapper--is-${mode}`}
      ></div>
      <section className={`form-block form-block--is-${mode}`}>
        <header className="form-block__header">
          <h1>{mode === "login" ? "Welcome back!" : "Sign up"}</h1>
          <div className="form-block__toggle-block">
            <span>
              {mode === "login" ? "Don't" : "Already"} have an account? Click
              here &#8594;
            </span>
            <input id="form-toggler" type="checkbox" onClick={toggleMode} />
            <label htmlFor="form-toggler"></label>
          </div>
        </header>
        <LoginForm mode={mode} onSubmit={props.onSubmit} />
      </section>
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-block__input-wrapper">
        <div className="form-group form-group--login">
          <Input
            type="text"
            id="username"
            label="user name"
            disabled={props.mode === "signup"}
          />
          <Input
            type="password"
            id="password"
            label="password"
            disabled={props.mode === "signup"}
          />
        </div>
        <div className="form-group form-group--signup">
          <Input
            type="text"
            id="fullname"
            label="full name"
            disabled={props.mode === "login"}
          />
          <Input
            type="email"
            id="email"
            label="email"
            disabled={props.mode === "login"}
          />
          <Input
            type="password"
            id="createpassword"
            label="password"
            disabled={props.mode === "login"}
          />
          <Input
            type="password"
            id="repeatpassword"
            label="repeat password"
            disabled={props.mode === "login"}
          />
        </div>
      </div>
      <button className="button button--primary full-width" type="submit">
        {props.mode === "login" ? "Log In" : "Sign Up"}
      </button>
    </form>
  );
};

const Input = ({ id, type, label, disabled }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
  />
);

const App = () => (
  <div className={`app app--is-${mode}`}>
    <LoginComponent
      mode={mode}
      onSubmit={function () {
        console.log("submit");
      }}
    />
  </div>
);
