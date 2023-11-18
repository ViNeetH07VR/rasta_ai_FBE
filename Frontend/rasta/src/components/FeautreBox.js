import React, { useState } from 'react'

const FeautreBox = () => {
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
  <h4>Road Feautres</h4>

  {/* <space> */}

    <div className="otherconditions">
      <div className="col">
        {" "}
        <div className="leftside">
          <div className="darkGreen-rectangle" />
          <div className="round_icon" />
          All Signs
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
          <div className="light_green-rectangle" />
          <div className="round_icon" />
          Level 1
        </div>
        <input
              type="checkbox"
              checked={checkboxSelections.level1}
        onChange={() => handleCheckboxChange('level1')}
            />
      </div>
      <div className="col">
        {" "}
        <div className="leftside">
          <div className="dark_yellow-rectangle" />
          <div className="round_icon" />
          Mandatory Signs
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
          <div className="light_red-rectangle" />
          <div className="round_icon" />
Warning Signs
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
          <div className="red-rectangle" />
          <div className="round_icon" />
          Informatory Sins
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
          <div className="grey-rectangle" />
          <div className="round_icon" />
Road Assets        </div>
        <input
              type="checkbox"
              checked={checkboxSelections.unassessed}
              onChange={() => handleCheckboxChange('unassessed')}
            />
      </div>
    </div>
    
  {/* </space> */}
</div>
</div>

  </>
  )
}

export default FeautreBox