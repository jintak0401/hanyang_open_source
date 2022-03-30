import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/_home.module.scss';
import {SearchBar} from "@components";
import Router from "next/router";
import {useState} from "react";
import useStateWithPromise from "../lib/useStateWithPromise";
import logo from "@public/hanyangLion.png";
import printAscii from "../lib/ascii";
import * as gtag from "@lib/gtag";

const data = require('@data');

export default function Home() {

    printAscii();

    const [inputId, setInputId] = useStateWithPromise('');
    const [notInData, setNotInData] = useState(false);
    const [invalidId, setInvalidId] = useState('');
    let count = 0;

    const route = () => {
        setInputId(inputId.trim()).then((trimId) => {
            if (!!data[trimId]) {
                searchID(trimId);
                Router.push(`/${trimId}`);
            } else {
                setInvalidId(trimId);
                setNotInData(true);
            }
        });
    };

    const clickLogo = () => {
        if ((++count) === 10) {
            Router.push('/easter-egg');
        }
    }

    const searchID = (id) => {
        gtag.event({
            action: "search",
            category: "engagement",
            label: id,
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>한양오픈소스 프로젝트</title>
                <meta name="description" content="한양대생들이 오픈소스에 기여하는 기회를 제공하기 위해 제작하였습니다."/>
                <meta property="og:title" content="한양오픈소스 프로젝트"/>
                <meta property="og:description" content="아무 글이나 쓰고 오픈소스에 기여하세요!"/>
                <meta property="og:image" content="https://hanyang-open-source.vercel.app/thumbnail.png"/>
                <meta property="og:site_name" content="한양오픈소스 프로젝트"/>
                <meta name="twitter:description" content="한양대생들이 오픈소스에 기여하는 기회를 제공하기 위해 제작하였습니다."/>
                <meta name="twitter:title" content="한양오픈소스 프로젝트"/>
                <meta property="og:locale" content="ko_KR"/>
                <link rel="icon" href="/hanyangLion.ico"/>
            </Head>

            <div className={styles.main}>
                <div className={styles.logo} onClick={clickLogo}>
                    <div className={styles.logo_image}>
                        <Image src={logo} alt={"한양사자"}/>
                    </div>
                    <div className={styles.logo_text}>한양오픈소스</div>
                </div>
                <SearchBar text={inputId} route={route} setText={setInputId}/>
                <div className={styles.msg}>
                    {notInData ?
                        (
                            <>
                                <div>"{invalidId}"로 작성된 글이 없네요...</div>
                                <div>잘 입력하신게 맞나요???</div>
                            </>
                        ) :
                        <>
                            <span>예시로 "</span>
                            <span className={styles.msg_example}
                                  onClick={async () => await setInputId('jintak0401')}>jintak0401</span>
                            <span>"을 검색해보세요 </span>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}