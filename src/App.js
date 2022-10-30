import './App.css';
import React, { useState } from 'react';
import rateData from './rateData';
import Card from './Components/Card/Card';

function App() {
  const [isSelected, setSelected] = useState(false);
 
  return (
    <div className="App">         
      {
        rateData.map ((item) =>                        
            <Card key = {item.rate}
            rate = {item.rate}
            speed = {item.speed}
            isSelected={isSelected === item.rate}
            onDivClick={setSelected}            
            />         
        )
      }
    </div>      
  );
}

export default App;