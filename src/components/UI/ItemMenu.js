import React from 'react';

const ItemMenu = (props) => {

    let deleteItem = (id) => {
        console.log(id)
    }
    return (
        <div className="dropdown">
            <button className="btn" type="button" id="dropdownMenu2"
                    data-bs-toggle="dropdown" aria-expanded="false">
                …
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                    <button className="dropdown-item" type="button">Edit</button>
                </li>
                <li>
                    <button className="dropdown-item" type="button" onClick={() => deleteItem(props.all)}>Delete</button>
                </li>
            </ul>
        </div>
    );
};

export default ItemMenu;