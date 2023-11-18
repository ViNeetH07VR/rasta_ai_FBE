import React, { useState } from 'react';
import Filters from './Filters';
import DataVisulization from './DataVisulization';
// import Mapcomponent from './Mapcomponent';
// ... (your existing imports)

// ... (your existing React component)
// ... (your existing React component)
// ... (your existing React component)

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [selectedNavItem, setSelectedNavItem] = useState(null);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    const handleNavItemClick = (item) => {
      setSelectedNavItem(item);
      setSidebarOpen(true);
    };
  

    return (
    <>
    <div className={`header ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <header>
          <nav>
            <div>
              <ul>
              <li className={`logo ${selectedNavItem === 'logo' ? 'selected' : ''}`} onClick={() => handleNavItemClick('logo')}>
                <img className='logo' src='Rasta.Ai.png' alt='logo' />
              </li>
              <li className={`filter ${selectedNavItem === 'filter' ? 'selected' : ''}`} onClick={() => handleNavItemClick('filter')}>
                <img src='filter.png' alt='filter' />
              </li>
              <li className={`data ${selectedNavItem === 'data' ? 'selected' : ''}`} onClick={() => handleNavItemClick('data')}>
                <img src='Data.png' alt='data' />
              </li>  
              
              <li onClick={() => handleNavItemClick('data')}><img src='notes.png'></img></li>
                <li onClick={() => handleNavItemClick('data')}><img src='calculator.png'></img></li>
                <li onClick={() => handleNavItemClick('search')}><img src='search.png'></img></li>
                <li onClick={() => handleNavItemClick('data')}><img src='bell.png'></img></li>
                <li onClick={() => handleNavItemClick('highway')}><img src='highway.png'></img></li>
                {/* Add more items as needed */}
              </ul>
            </div>
            <div className='nav_toggle'>
            <div className="toggle-icon">
        <span>&#9776;</span>
    </div>
            </div>
          </nav>
        </header>
  
        <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          {selectedNavItem && (
            <div className="sidebar-content">
              {selectedNavItem === 'filter' && <Filters/>}
              {selectedNavItem === 'data' && <DataVisulization/>}
              {/* Add more content for other items as needed */}
            </div>
          )}
  
          <div
            className={`toggle-btn ${isSidebarOpen ? 'right' : 'left'}`}
            onClick={toggleSidebar}
          >
            <span>&#9654;</span>
          </div>
        </aside>
       
      </div>
      {/*  add here Map component 
      <MapComponent issidebarOpen={isSidebarOpen} */}
      {/* <Mapcomponent isSidebarOpen={isSidebarOpen} /> */}

</>    );
};

export default Header;
  
  