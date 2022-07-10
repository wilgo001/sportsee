import { Header, Sidebar } from './ui/components';
import './App.css';
import { Home } from './ui/pages';
import PropTypes from 'prop-types';


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

App.propTypes = {

}

export default App;
