// import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';


function App() {
  const[text,settext]=useState('');
  const[Loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    const timer=setTimeout(()=>{
      setLoading(false);
    },1000);
    return ()=>clearTimeout(timer);
  },[])
  const handle=(e)=>{
    settext(e.target.value)
  }
  return (
    <>
     <div className="app">
    {Loading  ? (
 <div className='loading'>Loading...</div>
    ):(
      <div>
      <textarea className='textarea' value={text} onChange={handle}></textarea>
      <h1 className="preview">{text}</h1>
      </div>
    )}
    
     
      
     </div>
    </>
  );
}

export default App;
