import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import React, {useState} from "react";
import BoardTitle from "./components/UI/BoardTitle";
import Task from "./components/UI/Task";
import ModalWindow from "./components/UI/ModalWindow";
import AddTaskModalWindow from "./components/UI/AddTaskModalWindow";


// Todo, In Progress, Review, Done
function App() {
    let [boards, setBoards] = useState([
        {
            id: 11,
            title: "Todo",
            items: [
                {
                    id: 1,
                    title: "Задача1",
                    description: 'описание описание описание описание описание',
                    priority: 1
                },
                {
                    id: 2,
                    title: "Задача2",
                    description: 'описание ',
                    priority: 1
                }
            ]
        },
        {
            id: 22,
            title: "In Progress",
            items: [{id: 3, title: "Задача3", description: 'описание ', priority: 1}, {
                id: 4,
                title: "Задача4",
                description: 'описание',
                priority: 1
            }]
        },
        {
            id: 33,
            title: "Review",
            items: [{id: 5, title: "Задача5", description: 'описание', priority: 1}, {
                id: 6,
                title: "Задача6",
                description: 'описание',
                priority: 1
            }]
        },
        {
            id: 44,
            title: "Done",
            items: [
                {
                    id: 7,
                    title: "Задача7",
                    description: 'описание',
                    priority: 1
                },
                {
                    id: 8,
                    title: "Задача8",
                    description: 'описание',
                    priority: 1
                }]
        },
    ])


    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)


    function dragOverHandle(e) {
        e.preventDefault();
        if (e.target.className === 'item') {
            e.target.style.boxShadow = '0 5px 3px gray';
        }
    }

    function dragLeaveHandle(e) {
        e.target.style.boxShadow = 'none';
    }

    function dragStartHandle(e, board, item) {
        setCurrentBoard(board)
        setCurrentItem(item)

    }

    function dragEndHandle(e) {
        e.target.style.boxShadow = 'none';

    }

    function dropHandle(e, board, item) {
        e.preventDefault();
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b

        }))
        e.target.style.boxShadow = 'none';

    }

    function dropCardHandler(e, board) {
        e.target.style.boxShadow = 'none';
        const currentId = board.items.map(item => item.id)
        // console.log(currentId)
        // console.log(!currentId.includes(currentItem.id))

        if (!currentId.includes(currentItem.id)) {
            board.items.push(currentItem)
            const currentIndex = currentBoard.items.indexOf(currentItem)
            currentBoard.items.splice(currentIndex, 1)
            setBoards(boards.map(b => {
                if (b.id === board.id) {
                    return board
                }
                if (b.id === currentBoard.id) {
                    return currentBoard
                }
                return b
            }))
        }

    }

    const [modalActive, setModalActive] = useState(false)


    return (
        <div className="App">

            <div>
                <header className="App-header">
                    <div className="App-header-button">
                        <button type="button" className="btn btn-secondary" onClick={() => setModalActive(true)}>
                            Create Tack
                        </button>
                    </div>
                </header>
                <ModalWindow active={modalActive} setActive={setModalActive}>
                    <AddTaskModalWindow/>

                </ModalWindow>
            </div>

            <main className="App-main">
                <div className="d-flex">
                    {boards.map(board =>
                        <div
                            className="board"
                            onDragOver={(e) => dragOverHandle(e)}
                            onDrop={(e) => dropCardHandler(e, board)}
                        >
                            <BoardTitle lineStile={board.title}/>
                            <div className="wrapper-for-items">
                                {board.items.map(
                                    item =>
                                        <div
                                            onDragOver={(e) => dragOverHandle(e)}
                                            onDragLeave={(e => dragLeaveHandle(e))}
                                            onDragStart={(e) => dragStartHandle(e, board, item)}
                                            onDragEnd={(e) => dragEndHandle(e)}
                                            onDrop={(e) => dropHandle(e, board, item)}
                                            draggable={true}
                                            className="item"
                                        >
                                            <Task all={board} id={item.id} title={item.title}
                                                  description={item.description}
                                                  priority={item.priority}/>


                                        </div>
                                )}
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}

export default App;
