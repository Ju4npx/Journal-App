import { Link } from "react-router-dom";
import Alert from "../Alert";

export const LoginScreen = () => {
  return (
    <>
      <h1 className="auth__title center">Login</h1>
      <form>
        <small className="d-block center">Connect with</small>
        <div className="auth__social-networks">
          <div className="btn btn-social btn-google">
            <div className="social-icon-wrapper">
              <img
                className="social-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="social-text">Google</p>
          </div>
          <div className="btn btn-social btn-facebook">
            <div className="social-icon-wrapper">
              <img
                className="social-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="facebook button"
              />
            </div>
            <p className="social-text">Facebook</p>
          </div>
        </div>
        <div className="divider">
          <span>or</span>
        </div>
        {/* <Alert type="error" description="Passwords doesn't match" /> */}
        <input
          className="auth__input"
          id="email"
          name="email"
          placeholder="Enter email..."
          type="email"
        />
        <input
          className="auth__input"
          id="password"
          name="password"
          placeholder="Enter password..."
          type="password"
        />
        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>
        <small className="d-block mt-2">
          Not account yet? <Link className="link" to="/auth/register">Register</Link>
        </small>
      </form>
    </>
  );
};
