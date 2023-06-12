import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import './App.css';
import  FormComponent  from './Components/FormComponent';
import DataComponent from './Components/DataComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
              <Route exact path='/' element={<FormComponent/>}/>
            </Routes>
            </Router>
    </div>
  );
}

export default App;
