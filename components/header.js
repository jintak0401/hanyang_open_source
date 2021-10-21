import React from "react";
import {HomeButton} from "@components/index";
import styles from "@styles/_home.module.scss";

function Header() {
    return (
        <div className={styles.header}>
            <HomeButton/>
        </div>
    );
}

export default React.memo(Header);