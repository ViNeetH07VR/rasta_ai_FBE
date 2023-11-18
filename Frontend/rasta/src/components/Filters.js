import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ConditionBox from './ConditionBox';
import FeautreBox from './FeautreBox';

const Filters = () => {
  const [activeCol, setActiveCol] = useState(0);

  const toggleBottomLine = (index) => {
    setActiveCol(index === activeCol ? null : index);
  };

  return (
    <>
      <div className='background'>
        <div className='heading_filter'>
          <h3>Filters</h3>
          <p>Filters through segments and points and only view the conditions you are interested in</p>
        </div>

        <div className='front_card'>
          <div className='search_space'>
            <Searchbar />

            <div className="slider">
              <div className="row">
                <div
                  className={`col ${activeCol === 0 ? 'active' : ''}`}
                  onClick={() => toggleBottomLine(0)}
                >
                  Conditions
                </div>
                <div
                  className={`col ${activeCol === 1 ? 'active' : ''}`}
                  onClick={() => toggleBottomLine(1)}
                >
                  Features
                </div>
              </div>
            </div>
          </div>
          {activeCol === 0 ? <ConditionBox /> : < FeautreBox/>}

</div>
      </div>
    </>
  );
};

export default Filters;
