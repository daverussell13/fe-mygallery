import Link from "next/link";
import styles from "./Styles/LoginForm.module.css";

export default function RegisterForm() {
  return (
    <div className={styles.form_container}>
      <h1 className={styles.form_title}>Register</h1>
      <div className={styles.form_input_container}>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Username..." />
      </div>
      <div className={styles.form_input_container}>
        <label htmlFor="">Password</label>
        <input type="text" placeholder="Password..." />
      </div>
      <div className={styles.register_link}>
        Already have account? <Link href="/login">Login here!</Link>
      </div>
      <div className={styles.submit_login_button}>Register</div>
    </div>
  );
}
