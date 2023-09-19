import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import './SelectResort.css'

const SelectResort = ({ resort, setResort, resortList, setResortList }) => {
  
  // const resortOptions = [{ name: "liberty", location: "PA" }, { name: "whitetail", location: "PA" }];
  console.log("resortList length:", resortList.length); // Add this line

  const resortOptions = resortList;
  console.log("options:", resortOptions)
  
  const selectResort = (selectedResort) => {
    const newResort = resortOptions.find(resort => resort.resortname === selectedResort);
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
            {resortList.map((resort) => (
              <Dropdown.Item key={resort.resortname} eventKey={resort.resortname}>
                {resort.resortname}
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
