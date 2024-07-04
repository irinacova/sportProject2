import React from 'react';
import Menu from '../Menu/Menu';

function Layout({ children }) {
    return (
        <>
            <Menu/>
            {children}
        </>
    );
}

export default Layout;
