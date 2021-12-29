import React from "react";
import { useNavigate } from "react-router-dom";
import "../sign_up_forms.scss";

function Login({ login, userName }) {
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const log = await login(
      event.target.email.value,
      event.target.password.value
    );
    if (log) {
      navigate("/dashboard");
    }
  };

  React.useEffect(() => {
    if (userName) {
      navigate("/dashboard");
    }
  });
  // React.useLayoutEffect(() => {
  //   if (userName) {
  //     navigate("/dashboard");
  //   }
  // });

  return (
    <React.Fragment>
      <form className="container-sm mt-5" onSubmit={onSubmit}>
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 col-lg-5 align-items-center d-flex flex-column px-5 py-3 form-decorate">
            <div className="d-flex flex-column w-100 my-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="juano@carrancho.com"
                name="email"
                required
              />
            </div>
            <div className="d-flex flex-column w-100 my-4">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" required />
            </div>
            <button type="submit">Log In</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export { Login };
