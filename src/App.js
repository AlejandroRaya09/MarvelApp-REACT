import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//? IMPORTACION DE PAGINAS ?//
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";

//? IMPORTACION DE COMPONENTES ?//
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";

function App() {

  const exampleApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=3233c734626fae272cc41427d0cc1ce2&hash=caf5483bb68bccf7916005f86face109')
  console.log(exampleApi)


  return (
        //! ---------- REACT ROUTER DOM ------------- !//
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inicio" element={<Home/>} />
          <Route path="/Series" element={<Series/>} />
          <Route path="/Comics" element={<Comics/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
