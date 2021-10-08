
import './App.css';
import { Router } from '@reach/router'
import Detail from './views/Detail';
import View from './views/View'


function App() {
  return (
    <div className="wrapper">
      <Router>
        <View path="/products" />
        <Detail path="/products/:id" />
      </Router>
    </div>
  );
}

export default App;
