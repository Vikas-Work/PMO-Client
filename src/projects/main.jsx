import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';



function Main({match}) {
  const { path } = match;
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (e) => {
      setSelectedValue(e.target.value)
    }

    return (
          <div>
          <div>
            <h3>Select the project type</h3>
            <select  onChange={handleDropdownChange}>
              <option value=""></option>
              <option value="Fixed projects">
               <Link to={`${path}/projects`}>
               Fixed Projects
               </Link>
               </option>
               
              
              <option value="BYT projects">BYT projects</option>
              <option value="T&M projects">T&M projects</option>
              <option value="Support projects">Support projects</option>
            </select>
            </div>
            <div>Selected value is : {selectedValue}</div>
          </div>
    );
}

export { Main };