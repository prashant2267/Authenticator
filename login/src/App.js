import Component from './Component';  
import './App.css';
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
    <Component/>   
    </CookiesProvider>
  );
}

export default App;
