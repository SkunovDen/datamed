import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { BrowserRouter } from "react-router-dom";

import { store } from '../../store/store'
import { Provider } from 'react-redux'

import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../../pages/Layout"
import MainPage from "../../pages/MainPage";
import InputDataPage from "../../pages/InputDataPage";
import TableViewPage from "../../pages/TableViewPage";
import SimpleTableViewPage from "../../pages/SimpleTableViewPage"
import NewHtmlTableViewPage from '../../pages/NewHtmlTableViewPage';




function App() {
  return (

    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
              <Route path={"/"} element={<Layout />}>
                  {/* <Route index           element={<MainPage />} />
                  <Route path={"input"}  element={<InputDataPage />} />
                  <Route path={"table"}  element={<TableViewPage />} />
                  <Route path={"htable"} element={<SimpleTableViewPage />} /> */}
                  {/* <Route path={"nhtable"} element={<NewHtmlTableViewPage />} /> */}

                  <Route index element={<NewHtmlTableViewPage />} />
                  
              </Route>
          </Routes>
        </div>
      </Provider>
    </HashRouter>
    
  );
}

export default App;
