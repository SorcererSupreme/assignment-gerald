import styles from "./SidebarBrand.module.css";

const SidebarBrand = () => (
  <div className={styles.container}>
    <i className="fas fa-bars"></i>
    <span className={styles.brandName}>Outlook</span>
  </div>
);

export default SidebarBrand;
