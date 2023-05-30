import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import CommonContainer from './components/CommonContainer';



function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <CommonContainer />
      </ChakraProvider>
    </div>
  );
}

export default App;
