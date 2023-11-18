import React from 'react'

const Seements = () => {
  return (
<>
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
</>  )
}

export default Seements