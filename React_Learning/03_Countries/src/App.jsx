
import './App.css'
import CountriesList from './Components/CountriesList'
import Header from './Components/Header'
import Searchbar from './Components/Searchbar'
import SelectMenu from './Components/SelectMenu'

function App() {

  return (
    <>

      <Header />
      <main>
        <div className="search-filter-container">
          <Searchbar />
          <SelectMenu />
        </div>
        <CountriesList/>
      </main>

    </>
  )
}

export default App
