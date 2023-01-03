import styles from "./Styles/LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className={styles.form_container}>
      <h1 className={styles.form_title}>Sign In</h1>
      <div className={styles.form_input_container}>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Username..." />
      </div>
      <div className={styles.form_input_container}>
        <label htmlFor="">Password</label>
        <input type="text" placeholder="Password..." />
      </div>
      <div className={styles.register_link}>
        Don&apos;t have an account? <a href="#">Register here!</a>
      </div>
      <div className={styles.submit_login_button}>Sign In</div>
    </div>
  );
}
