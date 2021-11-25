// import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SignIn() {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // setStatus("Sending...");
  //   const { email, password } = e.target.elements;
  //   let details = {
  //     // name: name.value,
  //     email: email.value,
  //     password: password.value,
  //   };

  return (
    // <div>
    //     <h1>Sign In https://ruvictor.com/article/login-registration-form-react</h1>
    // </div>

    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <textarea id="password" required />
      </div>
      {/* <button onClick={handleSubmit}>Submit</button> */}
      <button> Submit</button>
    </form>
  );
}

export default SignIn;
