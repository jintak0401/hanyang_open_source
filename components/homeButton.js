import React from "react";
import Image from "next/image";
import logo from '@public/hanyangLion.png';
import Link from 'next/link';
import styles from '@styles/_home.module.scss';

function HomeButton() {

    const size = 50;

    return (
        <Link href={'/'}>
            <a className={styles.homeButton}>
                <Image src={logo} alt={'그럴리 없는데...'} width={size} height={size}/>
                <div className={styles.homeButton_text}>한양오픈소스</div>
            </a>
        </Link>
    );
}

export default React.memo(HomeButton);