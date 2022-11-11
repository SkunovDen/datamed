import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { store } from '../../store/store'
import { Provider } from 'react-redux'

import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../../pages/Layout"
import MainPage from "../../pages/MainPage";
import InputDataPage from "../../pages/InputDataPage";
import TableViewPage from "../../pages/TableViewPage";
import SimpleTableViewPage from "../../pages/SimpleTableViewPage"



function App() {
  return (

    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
              <Route path={"/"} element={<Layout />}>
                  <Route index           element={<MainPage />} />
                  <Route path={"input"}  element={<InputDataPage />} />
                  <Route path={"table"}  element={<TableViewPage />} />
                  <Route path={"htable"} element={<SimpleTableViewPage />} />
              </Route>
          </Routes>
        </div>
      </Provider>
    </HashRouter>
    
  );
}

export default App;
