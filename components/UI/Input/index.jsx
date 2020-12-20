import React from 'react';

// Libraries
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CSS
import styles from './Input.module.scss';

const Input = (props) => {
    const propsClasses = [styles.Input];

    if (props.customclass) {
        propsClasses.push(props.className);
    }

    return (
        <div className={props.hasanimation ? styles['Input-animation'] : null}>
            <input
                className={propsClasses.join(' ')}
                {...props} />
            { props.hasanimation && (
                <>
                    <FontAwesomeIcon
                        className={styles['search-icon']}
                        icon={faSearch} />
                    <FontAwesomeIcon
                        className={styles['arrow-icon']}
                        icon={faChevronRight} />
                </>
            )}
        </div>
    );
};

export default Input;