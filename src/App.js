import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import { Header } from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { ProductList } from './component/ProductList/ProductList';
import { Form } from './component/Form/Form';

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />

      </Routes>
    </div>
  );
}

export default App;
