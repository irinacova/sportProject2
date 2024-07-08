import React from 'react';

function Menu({setMenu}) {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-secondary-subtle'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        Привет, Коваленко!
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a
                                    className='nav-link active'
                                    aria-current='page'
                                    href='#'
                                    onClick={() => setMenu('main')}
                                >
                                    Главная
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    href='#'
                                    onClick={() => setMenu('about')}
                                >
                                    About
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    href='#'
                                    onClick={() => setMenu('counters')}
                                >
                                    Counter
                                </a>
                            </li>
                        </ul>
                        <form className='d-flex' role='search'>
                            <input
                                className='form-control me-2'
                                type='search'
                                placeholder='Search'
                                aria-label='Search'
                            />
                            <button
                                className='btn btn-outline-success'
                                type='submit'
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Menu;
