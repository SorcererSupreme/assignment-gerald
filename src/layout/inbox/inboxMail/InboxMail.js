import { inboxListItems } from "../../../db";
import styles from "./InboxMail.module.css";
import InboxMailControls from "./InboxMailControls";

function createMarkup(id) {
  return { __html: inboxListItems[id]["mail"] };
}

const InboxMail = ({ openedMailId }) => (
  <div className={styles.container}>
    <InboxMailControls openedMailId={openedMailId} />
    <div id="iframe-1" name="mail-iframe" sandbox="allow-same-origin">
      <div dangerouslySetInnerHTML={createMarkup(openedMailId)} />
    </div>
  </div>
);

export default InboxMail;
