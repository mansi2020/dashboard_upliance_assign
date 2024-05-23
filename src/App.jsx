
import './App.css'
// import Counter from './Components/Counter/Counter'
import HomePage from './Components/HomePage/HomePage'
import { ContextProvider } from './Context/Context'

function App() {
  

  return (
<ContextProvider>
  <HomePage/>
</ContextProvider>
  
  
)
}

export default App
