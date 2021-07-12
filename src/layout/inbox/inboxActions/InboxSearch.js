import styles from "./InboxSearch.module.css";

const InboxSearch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <i className="fas fa-search"></i>
      </div>
      <input type="text" placeholder="Rechercher" className={styles.input} />
    </div>
  );
};

export default InboxSearch;
