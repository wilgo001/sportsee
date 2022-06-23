import { Header, Sidebar } from './ui/components';
import './App.css';
import { Home } from './ui/pages';

function App() {
  return (
    <div className="root-container">
        <Header/>
        <div className="page-container">
            <Sidebar/>
            <Home/>
        </div>
    </div>
  );
}

export default App;
