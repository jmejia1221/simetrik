import React, { useEffect, useRef, useState } from 'react';

// Components
import Search from '../components/Search';

// CSS
import styles from './index.module.scss';

const initialData = {
    usuariosResult: [],
    tablerosResult: [],
    fuentesResult: [],
    conciliacionesResult: [],
    result: []
};

const getPromise = (url, type) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                resolve({type, ...data});
            });
    });
};

const App = () => {
    const [allData, setAllData] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const URL = 'http://localhost:3000/api';

        const p1 = getPromise(URL + '/conciliaciones/', 'conciliaciones');
        const p2 = getPromise(URL + '/fuentes/', 'fuentes');
        const p3 = getPromise(URL + '/tableros/', 'tableros');
        const p4 = getPromise(URL + '/usuarios/', 'usuarios');

        const promises = Promise.all([p1, p2, p3, p4]);

        promises.then(result => {
            setAllData(result);
            console.log(result)
        })
        .catch(err => console.log(err));

    }, []);

    const searchByType = (data, searchInput, type) => {
        data.forEach((infoItem, i) => {
            if (type !== 'usuariosResult' && infoItem.description.includes(searchInput.toLowerCase())) {
                initialData[type].push(infoItem);
            }
            if (type === 'usuariosResult' && infoItem.email.includes(searchInput.toLowerCase())) {
                // debugger
                initialData[type].push(infoItem);
            }
        });
    }

    const filterData = (searchInput) => {
        initialData.conciliacionesResult = [];
        initialData.fuentesResult = [];
        initialData.tablerosResult = [];
        initialData.usuariosResult = [];
        allData.forEach(item => {
            switch(item.type) {
                case 'conciliaciones':
                    searchByType(item.data, searchInput, 'conciliacionesResult');
                    break;
                case 'fuentes':
                    searchByType(item.data, searchInput, 'fuentesResult');
                    break;
                case 'tableros':
                    searchByType(item.data, searchInput, 'tablerosResult');
                    break;
                case 'usuarios':
                    searchByType(item.data, searchInput, 'usuariosResult');
                    break;
                default:
                    break;
            }
        });

        initialData.result = [
            {type: 'conciliaciones', data: [...initialData.conciliacionesResult]},
            {type: 'fuentes', data: [...initialData.fuentesResult]},
            {type: 'tableros', data: [...initialData.tablerosResult]},
            {type: 'usuarios', data: [...initialData.usuariosResult]}
        ];
        setSearchResult(initialData.result);
        console.log('filtered', initialData.result)
    };

    const handlerSearch = (e) => {
        setSearch(e.target.value);
        filterData(search);
    }

    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <Search
                    search={search}
                    searchResult={searchResult}
                    handlerSearch={handlerSearch} />
            </section>
        </div>
    );
};

export default App;