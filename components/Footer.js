import styles from "./Footer.module.css"
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.anchor}>
        <a>English</a>
        <a>Hindi</a>
        <a>Tamil</a>
        <a>Malayalam</a>
        <a>Kanada</a>
      </div>
      <hr />
      <p className={styles.copyright}> Clone 2021</p>
    </div>
  );
}

export default Footer;
