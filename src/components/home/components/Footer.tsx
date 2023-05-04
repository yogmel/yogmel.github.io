import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.disclaimer}>
        <h4>About this site</h4>
        <div>
          <p>Built with NextJS.</p>
          <p>
            If you find a bug, please register an{' '}
            <a
              href="https://github.com/yogmel/yogmel.github.io/issues"
              target="_blank"
              rel="noreferrer"
            >
              issue
            </a>
            . Thanks!
          </p>
          <p>
            This website <strong>does not</strong> collect any personal data.
          </p>
        </div>
      </div>
      <p className={styles.cc}>
        Made with love by Mellina Yonashiro 2023 @{' '}
        <a
          href="https://github.com/yogmel/yogmel.github.io"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </footer>
  );
}
