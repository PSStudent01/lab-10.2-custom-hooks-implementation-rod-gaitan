

import Pagination from './components/PaginationDemo'
import DebounceSearchDemo from './components/DebounceSearchDemo'
import './App.css'

function App() {
  return (
    <div>
      <h1>Lab 10.2 - Custom Hooks</h1>

      <section>
        <h2>Pagination</h2>
        <Pagination />
      </section>

      <hr></hr>
      <section>
        <h2>Debounce Search Demo</h2>
        <DebounceSearchDemo />
      </section>

    </div>
  )
}

export default App

