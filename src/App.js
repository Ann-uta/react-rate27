import './App.css';
import rateData from './rateData';
import CardFooter from './Components/CardFooter/CardFooter';
import CardHeader from './Components/CardHeader/CardHeader';
import Rate from './Components/Rate/Rate';
import Speed from './Components/Speed/Speed';

function App() {
  return (
    <div className="App">         
      {
        rateData.map ((item) =>
        <div className = {`item item__${item.rate}`} key = {item.rate}>        
          <CardHeader rate = {item.rate}/>
          <Rate rate = {item.rate}/>
          <Speed speed = {item.speed}/>
          <CardFooter/>
        </div>
        )
      }
    </div>      
  );
}

export default App;
