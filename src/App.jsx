import './App.css'
import Navbar from './Navbar'

function App() {
  
  const p = ['Home', 'Menu', 'About', 'Contact']

  return (
    <div className=''> 
    <Navbar item={p} />
        {/* <h1 className="text-6xl font-bold underline">Hello World</h1> */}
    </div>
  )
}

export default App
