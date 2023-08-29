import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



const SelectResort = () => {
  return (

    <div>
        <nav>
            <Dropdown>

            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Resort
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>
                    <ResortItem text = {"Whitetail"}/>
                </Dropdown.Item>
                <Dropdown.Item>
                    <ResortItem text = {"Liberty"}/>
                </Dropdown.Item>
            </Dropdown.Menu>

            </Dropdown>
        </nav>
    </div>
  );
};

function ResortItem(props) {
  return (
    <li>
      <a>{props.text}</a>
    </li>
  );
}

export default SelectResort;
