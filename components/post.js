import React from "react";
import styles from "@styles/_post.module.scss";

const data = require("@data");

function Post({id}) {
    return id ? (
        <div className={styles.Post}>
            <div className={styles.Post_title}>{data[id]?.['title'].trim()}</div>
            <div className={styles.Post_body}>{data[id]?.['body'].trim()}</div>
        </div>
    ) : <div>loading</div>;
}

export default React.memo(Post);