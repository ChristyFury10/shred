import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import './SelectResort.css'

const SelectResort = ({ resort, setResort }) => {
  const resortOptions = [{ name: "liberty", location: "PA" }, { name: "whitetail", location: "PA" }];
  
  const selectResort = (selectedResort) => {
    const newResort = resortOptions.find(option => option.name === selectedResort)
    setResort(newResort);
  };

  return (
    <div className="select-main-div">
    
        <Dropdown onSelect={selectResort} className="select-dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Resort
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* start GPT  */}
            {resortOptions.map((option) => (
              <Dropdown.Item key={option.name} eventKey={option.name}>
                {option.name}
              </Dropdown.Item>
            ))}

            {/* end GPT */}

          </Dropdown.Menu>
        </Dropdown>
      
    </div>
  );
};

// function ResortItem(props) {
//   return (
//     <li>
//       <div>{props.text}</div>
//     </li>
//   );
// }

export default SelectResort;
