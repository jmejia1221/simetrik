import React from 'react';

// CSS
import styles from './SearchContent.module.scss';

const SearchContent = (props) => {
    let classType = styles[`tag-${props.type}`]
    let boxContainer = null;
    if (props.type === 'usuarios') {
        boxContainer = (
            <>
                <span className={`${styles['tag-type']} ${classType}`}>
                    {props.type}
                </span>
                <div>
                    <span className={styles.blockInfo}>
                        <strong>Company: </strong> {props.data.company}
                    </span>
                    <span className={styles.blockInfo}>
                        <strong>Email: </strong> {props.data.email}
                    </span>
                    <span className={styles.blockInfo}>
                        <strong>Age: </strong> {props.data.age}
                    </span>
                    <span className={styles.blockInfo}>
                        <strong>Address: </strong> {props.data.address}
                    </span>
                    <span className={styles.blockInfo}>
                        <strong>Phone: </strong> {props.data.phone}
                    </span>
                    <span className={styles.blockInfo}>
                        <strong>Gender: </strong> {props.data.gender}
                    </span>
                    <span className={styles.blockInfo}>
                        <strong>Name: </strong> {props.data.name.firstName}
                    </span>
                    <span className={styles.blockInfo}>
                        <strong>Last Name: </strong> {props.data.name.lastName}
                    </span>
                    <span className={styles.blockInfo}>
                        <strong>Date Created: </strong>
                        {props.data.createdAt}
                    </span>
                </div>
            </>
        );
    }
    if (props.type !== 'usuarios') {
        boxContainer = (
            <>
                <span className={`${styles['tag-type']} ${classType}`}>
                    {props.type}
                </span>
                <div>
                    <span className={styles.blockInfo}>
                        <strong>Description: </strong>
                        {props.data.description}
                    </span>
                    <span className={styles.blockInfo}>
                        <strong>Date Created: </strong>
                        {props.data.timestamp.createdAt}
                    </span>
                    <span className={styles.blockInfo}>
                        <strong>Date Updated: </strong>
                        {props.data.timestamp.updateAt}
                    </span>
                    { props.type === 'tableros' && (
                        <>
                            <span className={styles.blockInfo}>
                                <strong>Dashboard Name: </strong>
                                {props.data.dashboardName}
                            </span>
                        </>
                    )}

                    { props.type === 'conciliaciones' && (
                        <>
                            <span className={styles.blockInfo}>
                                <strong>Conciliation Name: </strong>
                                {props.data.conciliationName}
                            </span>
                            <span className={styles.blockInfo}>
                                <strong>Source A: </strong>
                                {props.data.sourceA}
                            </span>
                            <span className={styles.blockInfo}>
                                <strong>Source B: </strong>
                                {props.data.sourceB}
                            </span>
                            <span className={styles.blockInfo}>
                                <strong>Balance: </strong>
                                {props.data.balance}
                            </span>
                        </>
                    )}

                    { props.type === 'fuentes' && (
                        <>
                            <span className={styles.blockInfo}>
                                <strong>Is Active: </strong>
                                {props.data.isActive ? 'Yes' : 'No'}
                            </span>
                            <span className={styles.blockInfo}>
                                <strong>Name: </strong>
                                {props.data.name}
                            </span>
                            <span className={styles.blockInfo}>
                                <strong>Company: </strong>
                                {props.data.company}
                            </span>
                        </>
                    )}
                </div>
            </>
        );
    }
    return (
        <div className={styles.searchContent}>
            {boxContainer}
        </div>
    )
}

export default SearchContent;