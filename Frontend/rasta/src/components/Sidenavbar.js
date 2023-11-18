import React, { useState } from 'react';
import { BsToggles } from "react-icons/bs";
import { IoSearchCircle } from "react-icons/io5";

import '../index.css';
import Mapcomponent from './Mapcomponent';
import Details from './Details';
import Calculate from './Calculate';
import Notification from './Notification';
import Chart from './Chart';
import Roads from './Roads';

const Sidenavbar = () => {
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [showConditions, setShowConditions] = useState(true);
  const [checkboxSelections, setCheckboxSelections] = useState({
    all: false,
    level0: false,
    level1: false,
    level2: false,
    level3: false,
    level4: false,
    unassessed: false,
    majorPathholes: false,
    minorPotholes: false,
    // Add more checkboxes as needed
  });
  const toggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  const handleShowConditions = () => {
    setShowConditions(true);
  };

  const handleShowFeatures = () => {
    setShowConditions(false);
  };

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxSelections((prevSelections) => ({
      ...prevSelections,
      [checkboxName]: !prevSelections[checkboxName],
    }));
  };


  return (
    <div>
      <div className={`sidebar ${sidebarClosed ? 'close' : ''}`}>
        <ul className="nav-links">
          <li onClick={toggleSidebar}>
            <div className="iocn-link">
              <a href="#">
                <i className='bx bx-grid-alt'><BsToggles />
</i>
                <span className="link_name">Dashboard</span>
              </a>
            </div>
            {showConditions && (
              <ul className="sub-menu">
                <div className="container">
                  <div className="search">
                    <div className="search-text">
                      <h2>Search</h2>
                      <p>Search through a location which has been surveyed by us.</p>
                    </div>
                    <form className="nosubmit">
                      <span className="search-icon"></span>
                      <input className="nosubmit" type="search" placeholder="Search..." />
                    </form>
                  </div>

                  <div className="global-image">
                    <img src="https://earthobservatory.nasa.gov/ContentWOC/images/biosphere/global_biosphere_2006_lrg.jpg" alt="" className="survey-image" />
                  </div>

                  <div className="survey">
                    <h4 className="section-title">SURVEY HISTORY</h4>

                    <h4 className="section-title">ROADWAYS</h4>

                    <div className="drop-down-from">
                      <div className="dropdown">
                        <div className="dd-button">
                          <p>Mumbai-12Jan 2022</p>
                          <p>Distance: 13.13km</p>
                        </div>
                        <div className="dd-menu">
                          {/* Add your dropdown menu content here */}
                        </div>
                      </div>
                    </div>

                    <div className="drop-down-to">
                      <div className="dropdown">
                        <div className="dd-button">
                          <p>Chennai</p>
                        </div>
                        <div className="dd-menu">
                          {/* Add your dropdown menu content here */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            )}
          </li>
          <li onClick={toggleSidebar}>
            <div className="iocn-link">
              <a href="#">
              <i className='bx bx-grid-alt'><IoSearchCircle />
</i>                <span className="link_name">Categories</span>
              </a>
            </div>
            <ul class="sub-menu">
            <li>
  {" "}
  <div className="filter">
    <div className="container_filter">
      <h3>Filters</h3>
      <p>
        Filters through segments and points and only view the conditions you are
        interested in.
      </p>
    </div>
    <div className="filter_main_box">
      <div className="row">
        <div className="nav-item" onclick="showConditions()">
          Conditions
        </div>
        <div className="nav-item" onclick="showFeatures()">
          Features
        </div>
        <div className="col conditions" id="conditions-section">
          <div className="Conditions">
            <h4>POINTS</h4>
            <div className="row">
              <div className="col">
                <div className="leftside">
                  <div className="orange-circle" />
                  <div className="round_icon" />
                  All
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
              </div>
              <div className="col">
                <div className="leftside">
                  <div className="darkGreen-circle" />
                  <div className="round_icon" />
                  Level 0
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
              </div>
              <div className="col">
                {" "}
                <div className="leftside">
                  <div className="light_green-circle" />
                  <div className="round_icon" />
                  Level 1
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
              </div>
              <div className="col">
                {" "}
                <div className="leftside">
                  <div className="dark_yellow-circle" />
                  <div className="round_icon" />
                  Level 2
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
              </div>
              <div className="col">
                {" "}
                <div className="leftside">
                  <div className="light_red-circle" />
                  <div className="round_icon" />
                  Level 3
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
              </div>
              <div className="col">
                {" "}
                <div className="leftside">
                  <div className="red-circle" />
                  <div className="round_icon" />
                  Level 4
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
              </div>
              <div className="col">
                {" "}
                <div className="leftside">
                  <div className="grey-circle" />
                  <div className="round_icon" />
                  Unassessed
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
              </div>
              <div className="col">
                {" "}
                <div className="leftside">
                  <div className="orange-triangle" />
                  <div className="round_icon" />
                  Major Pathholes
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
              </div>
              <div className="col">
                {" "}
                <div className="leftside">
                  <div className="yellow-triangle" />
                  <div className="round_icon" />
                  Minor Potholes
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
              </div>
            </div>
            <space>
              <form className="nosubmit">
                <span className="search-icon" />
                <input
                  className="nosubmit"
                  type="search"
                  placeholder="Search..."
                />
              </form>
              <div className="searchbuttn" />
              <hr style={{ border: "1px solid orange", margin: "20px 0" }} />
              <div className="segments">
                <h1>Segments</h1>
              </div>
              <hr style={{ border: "1px solid orange", margin: "20px 0" }} />
              <div className="otherconditions">
                <div className="col">
                  {" "}
                  <div className="leftside">
                    <div className="darkGreen-rectangle" />
                    <div className="round_icon" />
                    Level 0
                  </div>
                  <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
                </div>
                <div className="col">
                  {" "}
                  <div className="leftside">
                    <div className="light_green-rectangle" />
                    <div className="round_icon" />
                    Level 1
                  </div>
                  <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
                </div>
                <div className="col">
                  {" "}
                  <div className="leftside">
                    <div className="dark_yellow-rectangle" />
                    <div className="round_icon" />
                    Level 2
                  </div>
                  <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
                </div>
                <div className="col">
                  {" "}
                  <div className="leftside">
                    <div className="light_red-rectangle" />
                    <div className="round_icon" />
                    Level 3
                  </div>
                  <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
                </div>
                <div className="col">
                  {" "}
                  <div className="leftside">
                    <div className="red-rectangle" />
                    <div className="round_icon" />
                    Level 4
                  </div>
                  <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
                </div>
                <div className="col">
                  {" "}
                  <div className="leftside">
                    <div className="grey-rectangle" />
                    <div className="round_icon" />
                    Unassessed
                  </div>
                  <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
                </div>
              </div>
              <div className="segments">
                <h1>OtherConditions</h1>
                <div className="col">
                  {" "}
                  <div className="leftside">
                    <div className="navyblue-circle" />
                    <div className="round_icon" />
                    Zebra-Crossing
                  </div>
                  <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
                </div>
                <div className="col">
                  {" "}
                  <div className="leftside">
                    <div className="black-circle" />
                    <div className="round_icon" />
                    Man Hole
                  </div>
                  <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
                </div>
              </div>
            </space>
          </div>
        </div>
        <div className="col" id="features-section" style={{ display: "none" }}>
          <h2>Features</h2>
          <div className="row">
            <div className="col">
              <div className="leftside">
                <div className="navyblue-circle" />
                <div className="round_icon" />
                All Signs
              </div>
              <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
            </div>
            <div className="col">
              <div className="leftside">
                <div className="red-outline-circle" />
                <div className="round_icon" />
                Mandatory Signs
              </div>
              <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
            </div>
            <div className="col">
              <div className="leftside">
                <div className="redoutlinedtriangle" />
                <div className="round_icon" />
                Warning Signs
              </div>
              <input type="checkbox" />
            </div>
            <div className="col">
              <div className="leftside">
                <div className="royal_blue _box" />
                <div className="round_icon" />
                Informatory Signs
              </div>
              <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
            </div>
            <div className="col">
              <div className="leftside">
                <div className="yellow-square" />
                <div className="round_icon" />
                Road Assets
              </div>
              <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>SEARCH ROAD FEATURES</h4>
            </div>
            <div className="col">
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</li>

        </ul>
          </li>
          {/* Add more menu items as needed */}

<Calculate/>
<Notification/>
<Details/>
<Chart/>
     <Roads/>  


         
             </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
            <Mapcomponent/>
        </div>
      </section>
    </div>
  );
}

export default Sidenavbar;
