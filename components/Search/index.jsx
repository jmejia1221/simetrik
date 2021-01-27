import React, { useState } from 'react';

// Components
import Input from '../UI/Input';
import SearchContent from './SearchContent';
import Tags from '../UI/tags';

// CSS
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
    const [searchFocus, setSearchFocus] = useState(false);
    const [filterSelected, setFilterSelected] = useState('text');

    const searchFocused = () => {
        let isFocus = !searchFocus;
        setSearchFocus(isFocus);
    };

    const tagsConfg = [
        {
            label: 'Text',
            value: 'text'
        },
        {
            label: 'Number',
            value: 'number'
        },
        {
            label: 'Date',
            value: 'date'
        }
    ];

    const filterByDataType = (value) => {
        setFilterSelected(value);
    }

    let backdropClasses = [styles['search-backdrop']];
    let searchResultClasses = [styles['search-result']];
    let expandButton = [styles.expandAll];
    if (searchFocus) {
        backdropClasses.push(styles.animated);
        searchResultClasses.push(styles.animated);
        expandButton.push(styles.animated);
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
                <header>
                    <h1 className={styles['search-title']}>
                        Search
                    </h1>
                    <div className={styles['filters']}>
                        <h4 className={styles['filter-title']}>Filters</h4>
                        { tagsConfg.map((tag, i) => (
                            <Tags
                                key={i + '' + tag}
                                active={filterSelected}
                                value={tag.value}
                                clicked={filterByDataType}>
                                <span>{tag.label}</span>
                            </Tags>
                        )) }
                    </div>
                </header>
                <div className={styles.inputContent}>
                    <Input
                        type={filterSelected}
                        value={props.search}
                        onChange={props.handlerSearch}
                        onFocus={searchFocused}
                        onBlur={searchFocused}
                        placeholder="Search Data"
                        hasanimation="true" />
                    { props.search && (
                        <button onClick={props.cleanSearchBar}>
                            <FontAwesomeIcon className={styles.cleanIcon} icon={faTimes} />
                            Clean
                        </button>
                    )}
                </div>
                <div className={searchResultClasses.join(' ')}>
                    {usuarios && usuarios.slice(0, 10)}
                    {tableros && tableros.slice(0, 10)}
                    {conciliaciones && conciliaciones.slice(0, 10)}
                    {fuentes && fuentes.slice(0, 10)}
                </div>
            </div>
        </>
    )
};

export default Search;