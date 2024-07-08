import React from 'react'



function Button({name,color}) {
console.log('Запустился компонент Button.js' + name);

  return (
      <>
      <p>Текст</p>
          <button style={{ color: color, fontSize: '16px' }}>
              {name}
          </button>
      </>
  );
}

export default Button
