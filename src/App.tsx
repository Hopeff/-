import React from 'react';
import "./App.css"
import Modal from "./modal/modal";



const App = () => {
    const [isModal1, setModal1] = React.useState(false)
    const onClose = () => setModal1(false)
    return (
        <div>
            <button className="open-btn" onClick={() => setModal1(true)}>Открыть модальnое окно</button>
            <Modal
                visible={isModal1}
                onClose={onClose}>
                <div>
                    <p>Данный контент доступен только после авторизации на сайте</p>
                </div>
            </Modal>
        </div>
    );
};
export default App;
