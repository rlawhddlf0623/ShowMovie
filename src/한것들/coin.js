import { useEffect, useState } from "react";
import Button from "./Button"
import styled from "./styled/App.module.css"


function App() {
      const [loading,setLoading] = useState(true);
      const [coins, setCoins ]= useState([]);
      const [usd,setUsd] = useState('')
      useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers?limit=15")
        .then((response) => response.json())
        .then((json)=>{
        setCoins(json);
        setLoading(false);
      });
      },[])
      const onChange=(e)=>{     
        setUsd(String(e.target.value / 51622))
        e.preventDefault();
      }
  return ( 
    <div>  
      <h1>The Coins!{ loading? "": `(${coins.length})`} </h1>
        <button>USD</button>
        <input type="text"  onChange={onChange} />
        <button>BTC</button>
        <input type="text"  onChange={onChange}  value={usd} />
      
     
      {loading ? <strong>loading...</strong> :  <ul>{coins.map((coin) => (<li>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}USD</li>))}  </ul>}
      <ul>
      </ul>
    </div>

  );
}

export default App;
