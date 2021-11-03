import React from 'react';

const BoardTitle = (props) => {
    let linestyle = ""
    if (props.lineStile === "Todo") {
        linestyle = "board__title gray"
    } else if (props.lineStile === "In Progress") {
        linestyle = "board__title blue"
    } else if (props.lineStile === "Review") {
        linestyle = "board__title yellow"
    } else if (props.lineStile === "Done") {
        linestyle = "board__title green"
    }
    return (
        <div
            className={linestyle}
        >
            {props.lineStile}
        </div>
    );
};

export default BoardTitle;