import './App.css';
import Heading from './components/Heading/Heading';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Heading>Welcome to my React App</Heading>
      <Welcome name="Your Name" />
      <Welcome />
    </div>
  );
}

export default App;
