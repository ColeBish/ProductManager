
import './App.css';
import { Router } from '@reach/router'
import Form from './components/Form';


function App() {
  return (
    <Router>
      <Form path="/new" />
    </Router>
  );
}

export default App;
