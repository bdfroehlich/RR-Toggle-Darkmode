import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { darkModeOn, lightModeOn } from './features/modeSlice'

function App() {

  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode);

  const toggleMode = () => {
    mode.darkMode ? dispatch(lightModeOn()) : dispatch(darkModeOn())
  }
  
  return (
    <div style={{ backgroundColor: mode.color1, color: 'black' }} className="App">
      <Nav />
      <button onClick={toggleMode}>{ mode.darkMode ? 'Light Mode' : 'Dark Mode' }</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
