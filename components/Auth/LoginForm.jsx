import Link from "next/link";
import { useContext, useState } from "react";
import { postJsonOpt } from "../../helper/options";
import { toast } from "react-toastify";
import Router from "next/router";
import styles from "./Styles/LoginForm.module.css";
import { AppContext } from "../../context/AppContextProvider";

export default function LoginForm() {
  const [progress, setProgress] = useState(false);
  const { setLogged } = useContext(AppContext);

  async function submitHandler(e) {
    e.preventDefault();
    setProgress(true);

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/login`,
        postJsonOpt(data)
      );
      const resData = await res.json();

      if (resData?.data) {
        toast.success(`Successfully logged in 👌!`);
        const userData = resData.data;

        localStorage.setItem("email", userData.email);
        localStorage.setItem("UID", userData.userID);
        localStorage.setItem("token", userData.token);

        setLogged(true);

        Router.replace("/gallery");
      } else {
        const message =
          resData.message[0].toUpperCase() + resData.message.substring(1);
        toast.error(`${message} 🤯!`);
      }
    } catch (err) {
      toast.error("Something went wrong...");
    } finally {
      setProgress(false);
      e.target.reset();
    }
  }

  return (
    <form
      onSubmit={submitHandler}
      className="d-flex justify-content-center align-items-center"
    >
      <div className={styles.form_container}>
        {progress && <div className={styles.overlay}></div>}
        <h1 className={styles.form_title}>Sign In</h1>
        <div className={styles.form_input_container}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email..."
            name="email"
            required
          />
        </div>
        <div className={styles.form_input_container}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password..."
            name="password"
            required
          />
        </div>
        <div className={styles.register_link}>
          Don&apos;t have an account?
          <Link href="/register"> Register here!</Link>
        </div>
        <button
          disabled={progress}
          type="submit"
          className={styles.submit_login_button}
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
