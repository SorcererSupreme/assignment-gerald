import React from "react";
import styles from "./Sidebar.module.css";
import SidebarBrand from "./SidebarBrand";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <SidebarBrand />
      <SidebarList />
    </div>
  );
};

export default Sidebar;
