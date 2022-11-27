import React, {useState, useEffect} from 'react'
import './App.css';
import Axios from 'axios';
import Card from './components/cards/Card'

function App() {

  const [values, setValues] = useState();
  const [listGames, setListGames] = useState()
  console.log(listGames)
  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name] : value.target.value,
    }))
  }

  const handleClickButton = () => {
    Axios.post('http://localhost:3002/register', {
      name: values.name,
      cost: values.cost,
      category: values.category
    }).then((response) => {
      console.log(response)
    })
  }

  useEffect(() => {
    Axios.get('http://localhost:3002/getCards').then((response) => {
      setListGames(response.data)
    })
  }, [])
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
      {typeof listGames !== "undefined" &&
      listGames.map((value) => {
        return <Card  
        key={value.id} 
        listCard={listGames} 
        setListCard={setListGames}
        id={value.id}
        name={value.name}
        cost={value.cost}
        category={value.category}> </Card>
      })}
      
    </div>
  );
}

export default App;
