import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import List from '../List/List';

import Layout from './Layout';

function App() {
    return (
        <>
            <Layout>
                <>
                    <h1>Привет, Коваленко!</h1>
                    <h2>Привет,React!</h2>
                </>
            </Layout>
            {/* 
            <List />
            <Button name={'Я кнопка 1'} color='red' />
            <Button name={'Я кнопка 2'} color='blue' />
            <Counter>Привет, я между Counter и Counter</Counter>
            <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
            </p> */}
        </>
    );
}

export default App;
