import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/_home.module.scss';
import {SearchBar} from "@components";
import Router from "next/router";
import {useState} from "react";
import useStateWithPromise from "../lib/useStateWithPromise";
import logo from "@public/hanyangLion.png";
import printAscii from "../lib/ascii";

const data = require('@data');

export default function Home() {

    printAscii();

    const [inputId, setInputId] = useStateWithPromise('');
    const [notInData, setNotInData] = useState(false);
    const [invalidId, setInvalidId] = useState('');

    const route = () => {
        setInputId(inputId.trim()).then((trimId) => {
            if (!!data[trimId]) {
                Router.push(`/${trimId}`);
            } else {
                setInvalidId(trimId);
                setNotInData(true);
            }
        });
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>한양오픈소스 프로젝트</title>
                <meta name="description" content="한양대생들이 오픈소스에 기여하는 기회를 제공하기 위해 제작하였습니다."/>
                <link rel="icon" href="/hanyangLion.ico"/>
            </Head>

            <div className={styles.main}>
                <div className={styles.logo}>
                    <div className={styles.logo_image}>
                        <Image src={logo} alt={"한양사자"}/>
                    </div>
                    <div className={styles.logo_text}>한양오픈소스</div>
                </div>
                <SearchBar text={inputId} route={route} setText={setInputId}/>
                {notInData ?
                    <div className={styles.invalidMsg}>
                        <div>"{invalidId}"로 작성된 글이 없네요...</div>
                        <div>잘 입력하신게 맞나요???</div>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}