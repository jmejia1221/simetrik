import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import React, { useState } from 'react';

// Components
import Input from '../UI/Input';

// CSS
import styles from './Search.module.scss';

const Search = (props) => {
    const [searchFocus, setSearchFocus] = useState(false);

    const searchFocused = () => {
        let isFocus = !searchFocus;
        setSearchFocus(isFocus);
    };

    let backdropClasses = [styles['search-backdrop']];
    let searchResultClasses = [styles['search-result']];
    if (searchFocus) {
        backdropClasses.push(styles.animated);
        searchResultClasses.push(styles.animated);
    }

    let searchedResult = null;

    if (props.searchResult.length) {
        props.searchResult.forEach((resultType) => {
            console.log('type', resultType)
            if (resultType.type !== 'usuarios') {
                searchedResult = resultType.data.map((data, i) => {
                    return <p key={data._id}>{data.description}</p>
                });
                // debugger
            }
        });
    }

    return (
        <>
            <div className={styles.search}>
                <div
                    className={backdropClasses.join(' ')}>
                </div>
                <h1 className={styles['search-title']}>
                    Simetrik Search
                </h1>
                <Input
                    type="text"
                    value={props.search}
                    onChange={props.handlerSearch}
                    onFocus={searchFocused}
                    onBlur={searchFocused}
                    placeholder="Search Data"
                    hasanimation="true" />
                <div className={searchResultClasses.join(' ')}>
                    {searchFocus && searchedResult}
                </div>
            </div>
            <div className={styles['search-blur-result']}>
                {!searchFocus && searchedResult}
            </div>
        </>
    )
};

export default Search;