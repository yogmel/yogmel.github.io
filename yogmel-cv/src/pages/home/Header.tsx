import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.box}>
        <p>Hi, I'm</p>
        <h2>Mellina Yonashiro</h2>
        <p>Software Engineer</p>
      </div>
      <div className={styles.gradient}></div>
    </header>
  );
}
