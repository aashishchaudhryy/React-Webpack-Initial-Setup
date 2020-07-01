import React from 'react';
import classes from '../loader/Loader.module.css';

function LoaderComponent() {
    return (
        <div className={[classes.container, classes.newdiv].join(' ')}>
            <div className={[classes.yellow, classes.newdiv].join(' ')}></div>
            <div className={[classes.red, classes.newdiv].join(' ')}></div>
            <div className={[classes.blue, classes.newdiv].join(' ')}></div>
            <div className={[classes.violet, classes.newdiv].join(' ')}></div>
        </div>
    )
}

export default LoaderComponent;