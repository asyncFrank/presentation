

import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home'
import New from './pages/New';
import Grafico from './pages/Grafico/index';
import Processos from './pages/Processos';
import Matriz from './pages/Matriz';
function App() {
  
  const theme = {
    primary: "#322153",
    secondary: "#c6c3ff",
    background: "#f0f0f5",
    text: "#6C6C80",
    white: "#fff"
  }
  return (
    // a partir de agora todos os componentes que utilizaremos terao acesso ao esquema de cores
    <ThemeProvider theme={theme}>
      {/* construindo as rotas */}
      <BrowserRouter>
       
        <Routes>
          <Route  path="/" element={<HomePage/>} ></Route>
          <Route path='/new' element={<New/>}></Route>
          <Route path='/grafico' element={<Grafico/>}></Route>
          <Route path='/processos' element={<Processos/>}></Route>
          <Route path='/matriz' element={<Matriz/>}></Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
