import './App.css';
import { Box, Text, Button } from '@chakra-ui/react'
import Numbers from './components/Numbers';
import { useState } from 'react';
import CountButton from './components/CountButton';


function App() {
  const [result, setResult] = useState('')
  const [count, setCount] = useState(0)

  function applyExpression(countedNumber){
    setCount(countedNumber)
    setResult(eval(count))
}
console.log(applyExpression(countedNumber))
function resetValue(){
  setCount(0);
  setResult('')
}
  return (
    <div className="App">
      <Box borderRadius='10px' backgroundColor='blackAlpha.500' className='calc' display='flex' w='700px'  flexDirection="column" justifyContent='center' alignItems='center' h='700px'>
        
          <Text display='flex' justifyContent='center' alignItems='center' bg='gray.50' w='100%' h='38px' px='4px'
          borderRadius='8px'>
            {count}
          </Text>
          <Text  w='fitc-content' h='38px' color='black'>
            {result}
          </Text>
     <Numbers data={count} onClick={setCount}/>
     <Box>
     <CountButton data={count} expression={'+'} onClick={applyExpression}/>
     <CountButton data={count} expression={'-'} onClick={applyExpression}/>
     <CountButton data={count} expression={'*'} onClick={applyExpression}/>
     <CountButton data={count} expression={'/'} onClick={applyExpression}/>
     <Button onClick={() => {setResult(eval(count))}}>=</Button>
     <Button color='red' onClick={resetValue}>Сброс</Button>
     </Box>
     
     </Box>
    </div>
  );
}

export default App;
