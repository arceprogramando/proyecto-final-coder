import { Header, NavBar, Welcome } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './style'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.flexCenter}>
          <Header />
          <NavBar />
        </div>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
