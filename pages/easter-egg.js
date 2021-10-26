import styles from "@styles/_post.module.scss";
import {Header} from "@components";

function EasterEgg() {

    const title = '이스터에그';

    const body =
        `무슨 이유로 홈페이지 로고를 10번이나 누르셨어요?
        
        할 일이 정말 없으신가보네요...
        
        측은합니다...
    `;

    return (
        <>
            <Header/>
            <div className={styles.Post}>
                <div className={styles.Post_title}>{title}</div>
                <div className={styles.Post_body}>{body}</div>
            </div>
        </>
    );
}

export default EasterEgg;