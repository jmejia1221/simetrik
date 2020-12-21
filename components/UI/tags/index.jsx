import React from 'react';

// CSS
import styles from './Tags.module.scss';

const Tags = (props) => {
    const customClass = [styles.tag];
    if (props.customclass) customClass.push(styles[props.customclass]);
    if (props.active === props.value) customClass.push(styles['active']);

    return (
        <span
            onClick={() => props.clicked(props.value)}
            className={customClass.join(' ')}>
            {props.children}
        </span>
    );
};

export default Tags;