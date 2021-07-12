import { useState } from "react";
import Toggle from "../../components/Toggle";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import styles from "./Inbox.module.css";
import InboxActions from "./inboxActions/InboxActions";
import InboxList from "./inboxList/InboxList";
import InboxMail from "./inboxMail/InboxMail";

const Inbox = () => {
  const [openedMailId, setOpenedMailId] = useState(0);
  const [theme, toggleTheme] = useThemeToggle();

  const openMail = (id) => {
    setOpenedMailId(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.toggle}>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <InboxActions />
      <div className={styles.inboxContainer}>
        <InboxList openedMailId={openedMailId} openMail={openMail} />
        <InboxMail openedMailId={openedMailId} />
      </div>
    </div>
  );
};

export default Inbox;
