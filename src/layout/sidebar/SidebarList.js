import styles from "./SidebarList.module.css";

const SidebarList = () => (
  <div className={styles.container}>
    <div className={styles.dossier}>
      <span>Dossiers</span>
      <div className={styles.icon}>
        <i className="fas fa-angle-down"></i>
      </div>
    </div>
    <div className={styles.listItemActive}>
      <div className={styles.iconActive}>
        <i className="far fa-folder"></i>
      </div>
      <span className={styles.name}>Boite de reception</span>
    </div>
    <div className={styles.listItem}>
      <div className={styles.icon}>
        <i className="fas fa-ban icon"></i>
      </div>
      <span className={styles.name}>Courrier indesirables</span>
    </div>
    <div className={styles.listItem}>
      <div className={styles.icon}>
        <i className="far fa-edit icon"></i>
      </div>
      <span className={styles.name}>Brouillons</span>
    </div>
    <div className={styles.listItem}>
      <div className={styles.icon}>
        <i className="far fa-paper-plane icon"></i>
      </div>
      <span className={styles.name}>Elements envoyes</span>
    </div>
    <div className={styles.listItem}>
      <div className={styles.icon}>
        <i className="far fa-trash-alt icon"></i>
      </div>
      <span className={styles.name}>Elements supprimes</span>
    </div>
    <div className={styles.listItem}>
      <div className={styles.icon}>
        <i className="far fa-file-archive icon"></i>
      </div>
      <span className={styles.name}>Archives</span>
    </div>
    <div className={styles.listItem}>
      <div className={styles.icon}>
        <i className="far fa-sticky-note icon"></i>
      </div>
      <span className={styles.name}>Notes</span>
    </div>
  </div>
);

export default SidebarList;
