import './App.css';
import { Header } from './components/Header';
import { Information } from './components/Information/Information';
import { Form } from './components/forms/Form';

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Form />
      <Information />
    </div>
  );
}

export default App;
