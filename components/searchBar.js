import React from "react";
import styles from '@styles/_home.module.scss';
import {AiOutlineSearch} from "react-icons/ai";

function SearchBar({text, setText, route}) {

    const onChange = async (e) => await setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        route();
    };

    const onClick = () => {
        if (text.trim().length > 0) route();
    };

    return (
        <div>
            <form className={styles.searchBar} onSubmit={onSubmit}>
                <AiOutlineSearch className={styles[`searchBar_icon___${text === '' ? 'empty' : 'filled'}`]}
                                 onClick={onClick}/>
                <input className={styles.searchBar_text} type={"text"} onChange={onChange} value={text}
                       placeholder={'아이디를 검색하세요'}/>
            </form>
        </div>
    );
}

export default React.memo(SearchBar);