"use client";

// Imports
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";

// Components
import InfoAlert from "@/components/alerts/InfoAlert";

export default function Page() {
  // States of the page
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("")
  const router = useRouter();
  
    // handleForm function
    const handleForm = async (event) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            if (error.message == "")
            return console.log(error.message);
        }

        console.log(result);
        return router.push('/')
    }

  return (
    <>
      <div className="d-flex flex-column justify-content-center bg-secondary-subtle rounded p-4 mb-4">
        {/* Header for form */}
        <div className="mb-4">
          <h1 className="display-4">Log In</h1>
          <p>Please use the form below to log in to the application.</p>
        </div>

        {/* Form */}
        <form className="mb-4" onSubmit={handleForm}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We&apos;ll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-4">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
      {/* Create account message */}
      <InfoAlert
        content={
          "If you don't have an account, then contact the system administrator."
        }
      />
    </>
  );
}
