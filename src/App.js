import logo from './logo.svg';
import './App.css';
import './Sidebar.css';
import Table from './Table';
import SidebarData  from './SidebarData';
import  Sidebar  from './Sidebar';

function App() {

  
  return (

    <div className='App'>
    <h3 align="center">Mandate Studies</h3>
    
      <Table/>
      <SidebarData/>
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
