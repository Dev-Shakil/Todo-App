import React , {useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  
  const [input , setInput] = useState();
  const [items , setItems] = useState([]);

  const inputHandler = () => {
    setItems((prevItems)=>{
      return [...prevItems , input]
    
    })
    setInput("")
  }
  const addItem = (e) => {
    setInput(e.target.value)
  }
  const delBtn = (ind) => {
    console.log("deleting");
    setItems((prevItems)=>{
      return prevItems.filter((arr, index)=>{
        return ind!==index && arr;

      })
    })
  }
  return (
    <>
      <Header/>
      <div className="TodoBox">
        <div className="input">
          <input type="text" placeholder="Write Your Note" onChange={addItem} id="note" name="note" value={input} />
           <button className="addBtn" onClick={inputHandler}> + </button>
        </div>
        <div className="TodoItem">
          <ul>
            {/* <button className="delBtn">X</button> */}
           
            {
              items.map((itemVal , ind ) => {
                return <div className="contain"><button className="delBtn" onClick={()=>{delBtn(ind)}}>X</button>
                <li className="item" key={ind} id={ind}>
                {itemVal}
              </li><br/></div>
              })
            }
          </ul>
      </div>
      </div>
     
      <Footer/>
      </>
  );
}

export default App;
