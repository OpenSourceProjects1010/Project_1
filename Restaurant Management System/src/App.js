import Navbar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DishDetails from './Dishdetails';
import AddDish from './AddDish';
import EditDetails from './Editdetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/adddish" element = {<AddDish />} />
            <Route path="/dish/:id" element = {<DishDetails />} />
            <Route path="/dish/editdetails" element = {<EditDetails />} />
            <Route path="*" element = {<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;