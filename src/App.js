import './App.css';

import {Footer, Blog, Possibility, Features, Wpt2, Header} from './sections';
import {Cta, Navbar} from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      
      <Features />
      <Possibility />
      <Wpt2 />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
