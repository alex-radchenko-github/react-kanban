import React from 'react';
import ItemMenu from "./ItemMenu";

const Task = (props) => {
    return (
        <div className="flex-item-block">
            <div className="block__element_1">{props.title}</div>
            <div className="block__element_2"><ItemMenu id={props.id} all={props.all}/></div>
            <div className="block__element_3">{props.description}</div>
            <div className="block__element_4">{props.priority}</div>

        </div>
    );
};

export default Task;