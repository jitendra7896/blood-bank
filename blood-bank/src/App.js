import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import DonorInfoTable from './components/donor-info';
function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route exact path="/" element={<DonorInfoTable/>} />
          <Route path="/about" element={<DonorInfoTable/>} />
          <Route path="/donor-list" element={<DonorInfoTable/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
