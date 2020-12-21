import React, { useState } from 'react';

// Components
import Input from '../UI/Input';
import SearchContent from './SearchContent';

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

    let conciliaciones = null,
        fuentes = null,
        tableros = null,
        usuarios = null

    if (props.searchResult.length) {
        props.searchResult.forEach((resultType) => {
            if (resultType.type === 'conciliaciones') conciliaciones = resultType.data.map((data, i) => {
                return <SearchContent
                        key={data._id}
                        type={resultType.type}
                        data={data} />
            });
            if (resultType.type === 'fuentes') fuentes = resultType.data.map((data, i) => {
                return <SearchContent
                        key={data._id}
                        type={resultType.type}
                        data={data} />
            });
            if (resultType.type === 'tableros') tableros = resultType.data.map((data, i) => {
                return <SearchContent
                        key={data._id}
                        type={resultType.type}
                        data={data} />
            });
            if (resultType.type === 'usuarios') usuarios = resultType.data.map((data, i) => {
                return <SearchContent
                        key={data._id}
                        type={resultType.type}
                        data={data} />
            });
        });
    }

    let noData = <p>No Data found</p>;

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
                    {searchFocus && usuarios && usuarios.slice(0, 4)}
                    {searchFocus && tableros && tableros.slice(0, 4)}
                    {searchFocus && conciliaciones && conciliaciones.slice(0, 4)}
                    {searchFocus && fuentes && fuentes.slice(0, 4)}
                </div>
            </div>
            <div className={styles['search-blur-result']}>
                {!searchFocus && usuarios && usuarios.slice(0, 4)}
                {!searchFocus && tableros && tableros.slice(0, 4)}
                {!searchFocus && conciliaciones && conciliaciones.slice(0, 4)}
                {!searchFocus && fuentes && fuentes.slice(0, 4)}
            </div>
        </>
    )
};

export default Search;