import { useState } from 'react'
import List from './List'
import data from './data'

function App() {


  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>Today's birthday : {people.length}</h3>
        <List people={people}/>
        <button onClick={()=> setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App
