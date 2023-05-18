
import './css/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="contenedor">
        <div className="portrait">
        </div>
        <article>
          <h1>Miquel Abella Gustà</h1>
          <h3>~* Web developer Full Stack *~</h3>
          <p></p>
        </article>
        <button></button>
      </div >
    </BrowserRouter >
  )

}

export default App;
