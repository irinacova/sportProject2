import React, { useState } from 'react';
import Layout from './Layout';
import Main from '../../pages/Main';
import About from '../../pages/About';
import Counters from '../../pages/Counters';

function App() {
    const [menu, setMenu] = useState('main');

    return (
        <>
            <Layout setMenu={setMenu}>
                {menu === 'main' && <Main />}
                {menu === 'about' && <About />}
                {menu === 'counters' && <Counters />}
            </Layout>
        </>
    );
}

export default App;
