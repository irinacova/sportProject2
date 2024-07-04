import React from 'react';

function List(props) {
const List = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Petr' },
    { id: 3, name: 'Vasya' },
    { id: 4, name: 'Victor' }
];
    return (
        <>
            <div>
                <ul>
                    {List.map(item => {
                      if (item.id % 2 === 0) {
                        return <li key={item.id}>{item.name}</li>
                      }
                        else{
                          return ''
                        }
})}
                </ul>
            </div>
        </>
    );
}

export default List;
