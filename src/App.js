import './App.css';
import { ApiProvider } from './context/apicontext';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <ApiProvider>
        <Header />
        <Container />
        <hr />
        <Footer />
      </ApiProvider>
    </div>
  );
}

export default App;
