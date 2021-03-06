
import './App.css';
import { Router } from '@reach/router'
import Detail from './views/Detail';
import View from './views/View'
import Update from './views/Update';


function App() {
  return (
    <div className="wrapper">
      <Router>
        <View path="/products" />
        <Detail path="/products/:id" />
        <Update path="/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
