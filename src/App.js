import React, {useState} from 'react'
import './App.css';

function App() {

  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name] : value.target.value,
    }))
  }

  const handleClickButton = () => {
    console.log(values)
  }

  return (
    <div className="App--container">
      <div className='register--container'>
        <h1 className='register--title'>Shop</h1>
        <input 
        type='tex'
        name='name' 
        placeholder='Nome' 
        className='register--input'
        onChange={handleChangeValues}
        />

      <input 
        type='tex'
        name='cost' 
        placeholder='Preço' 
        className='register--input'
        onChange={handleChangeValues}
        />

      <input 
        type='tex'
        name='category' 
        placeholder='Categoria' 
        className='register--input'
        onChange={handleChangeValues}
        />

        <button className='register--button' onClick={() => handleClickButton()}>Cadastrar</button>

      </div>
    </div>
  );
}

export default App;
