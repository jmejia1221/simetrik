import React, { useEffect, useState } from 'react';

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

    const isProd = process.env.NODE_ENV === 'production';

    useEffect(() => {
        const URL = isProd ?
            'https://simetrik.vercel.app/api' :
            'http://localhost:3000/api';

        const p1 = getPromise(URL + '/conciliaciones/', 'conciliaciones');
        const p2 = getPromise(URL + '/fuentes/', 'fuentes');
        const p3 = getPromise(URL + '/tableros/', 'tableros');
        const p4 = getPromise(URL + '/usuarios/', 'usuarios');

        const promises = Promise.all([p1, p2, p3, p4]);

        promises.then(result => {
            setAllData(result);
        })
        .catch(err => console.log(err));

    }, []);

    const searchByType = (data, searchInput, type) => {
        data.forEach((infoItem, i) => {
            if (type === 'usuariosResult' && (
                infoItem.email.includes(searchInput.toLowerCase()) ||
                infoItem.address.includes(searchInput.toLowerCase()) ||
                infoItem.name.firstName.includes(searchInput.toLowerCase()) ||
                infoItem.name.lastName.includes(searchInput.toLowerCase()) ||
                infoItem.gender.includes(searchInput.toLowerCase())
            )) {
                initialData[type].push(infoItem);
            }
            if (type === 'tablerosResult' && (
                infoItem.description.includes(searchInput.toLowerCase()) ||
                infoItem.dashboardName.includes(searchInput.toLowerCase())
            )) {
                initialData[type].push(infoItem);
            }
            if (type === 'fuentesResult' && (
                infoItem.description.includes(searchInput.toLowerCase()) ||
                infoItem.name.includes(searchInput.toLowerCase()) ||
                infoItem.company.includes(searchInput.toLowerCase())
            )) {
                initialData[type].push(infoItem);
            }
            if (type === 'conciliacionesResult' && (
                infoItem.description.includes(searchInput.toLowerCase()) ||
                infoItem.sourceA.includes(searchInput.toLowerCase()) ||
                infoItem.conciliationName.includes(searchInput.toLowerCase()) ||
                infoItem.balance.includes(searchInput.toLowerCase()) ||
                infoItem.sourceB.includes(searchInput.toLowerCase())
            )) {
                initialData[type].push(infoItem);
            }
        });
    }

    const filterData = (searchInput) => {
        initialData.fuentesResult = [];
        initialData.tablerosResult = [];
        initialData.usuariosResult = [];
        initialData.conciliacionesResult = [];
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
    };

    const cleanSearchBarHandler = () => {
        setSearch('');
        setSearchResult([]);
    }

    const handlerSearch = (e) => {
        let value = e.target.value;

        if (e.target.type === 'date') value.toString("yyyyMMdd");

        setSearch(value);
        filterData(search);
    }

    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <Search
                    search={search}
                    cleanSearchBar={cleanSearchBarHandler}
                    searchResult={searchResult}
                    handlerSearch={handlerSearch} />
            </section>
        </div>
    );
};

export default App;