// ConditionBox.js

import React, { useState } from 'react';

const ConditionBox = () => {
    const [sidebarClosed, setSidebarClosed] = useState(false);
    const [showConditions, setShowConditions] = useState(true);
    const [checkboxSelections, setCheckboxSelections] = useState({
      all: false,
      level0: false,
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      majorpathhole:false,
      minorpathholes:false,
      unassessed: false,
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
    <>
     <div className="col conditions con" id="conditions-section">
          <div className="Condition">
          <h4 style={{ color: 'black' }}>POINTS</h4>
         
            {/* <space> */}
          
              <div className="otherconditions">

              <div className="col">
                <div className="leftside">
                  <div className="light_green-circle" />
                  <div className="round_icon" />
                  Good
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.all}
                        onChange={() => handleCheckboxChange('all')}
                      />
              </div>
              <div className="col">
                <div className="leftside">
                  <div className="light_red-circle" />
                  <div className="round_icon" />
                  Average
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.level0}
                        onChange={() => handleCheckboxChange('level0')}
                      />
              </div>
              <div className="col">
                {" "}
                <div className="leftside">
                  <div className="red-circle" />
                  <div className="round_icon" />
Bad                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.level1}
                        onChange={() => handleCheckboxChange('level1')}
                      />
              </div>
          { /*   <div className="col">
                {" "}
                <div className="leftside">
                  <div className="dark_yellow-circle" />
                  <div className="round_icon" />
                  Level 2
                </div>
                <input
                        type="checkbox"
                        checked={checkboxSelections.level2}
                        onChange={() => handleCheckboxChange('level2')}
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
                        checked={checkboxSelections.level3}
                        onChange={() => handleCheckboxChange('level3')}
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
                        checked={checkboxSelections.level4}
                        onChange={() => handleCheckboxChange('level4')}
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
                        checked={checkboxSelections.unassessed}
                        onChange={() => handleCheckboxChange('unassesed')}
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
                        checked={checkboxSelections.majorpathhole}
                        onChange={() => handleCheckboxChange('majorpathhole')}
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
                        checked={checkboxSelections.minorpathholes}
                        onChange={() => handleCheckboxChange('minorpathholes')}
                      />
              </div>


*/
  }
             
              </div>
              
            {/* </space> */}
          </div>
        </div>
       
    </>
  );
};

export default ConditionBox;
