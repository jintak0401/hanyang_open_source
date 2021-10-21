import React from "react";
import {useRouter} from "next/router";
import {Post, Header} from "@components";

function PostContainer() {

    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            <Header/>
            <Post id={id}/>
        </div>
    );
}

export default React.memo(PostContainer);