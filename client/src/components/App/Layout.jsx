import React from 'react';
import Menu from '../Menu/Menu';

function Layout({ setMenu,children }) {
    return (
        <>
            <Menu setMenu={setMenu} />
            {children}
        </>
    );
}

export default Layout;
