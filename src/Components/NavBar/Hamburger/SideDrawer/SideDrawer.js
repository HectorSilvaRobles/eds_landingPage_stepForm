import React from 'react';
import './sidedrawer.css';
import {Link} from 'react-scroll';

export default function SideDrawer(props){
    let drawerClasses = 'drawer'

    if(props.show) {
        drawerClasses = 'drawer open'
    }

    return (
        <div className={drawerClasses}>
            <Link>Home</Link>
        </div>
    )
}