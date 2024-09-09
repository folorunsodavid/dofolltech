import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Header from "./Header";
import Contact from "./Contact";

function App() {
  return (
    
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home title='Welcome to Dofoll Technologies'/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/categories' element={<Categories />}>
          <Route path=':catId' element={<Category />} />
        </Route>
        <Route path='/contact' element={<Contact />}/>
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

     <footer className="container">
        &copy; 2024 | <a href="https://dofoll.com.ng">Dofoll Technologies</a>
     </footer>
    </div>
  );
}

export default App;
