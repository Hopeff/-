import React, {useState} from 'react';
import "./App.css"
import Modal from "./modal/modal";

function App(){
    const [modalActive,setModalActive] = useState(false);
    const [modalActive1,setModalActive1] = useState(false);
    const [modalActive2,setModalActive2] = useState(false);
  return (
      <div>
        <main>
            <button className="open-btn"  onClick={() => setModalActive (true)}>Открыть модальое окно 1</button>
            <button className="open-btn"  onClick={() => setModalActive1(true)}>Открыть модальое окно 2</button>
            <button className="open-btn"  onClick={() => setModalActive2(true)}>Открыть модальое окно 3</button>
        </main>
          <Modal active={modalActive} setActive={setModalActive}>
              <div >
                  <p>Данный контент доступен только после авторизации на сайте</p>
                  <button className="close-btn"  onClick={() => setModalActive(false)}>ok(</button>
              </div>
          </Modal>

          <Modal active={modalActive1} setActive={setModalActive1}>
          <div>
              <p>321</p>
          </div>
          </Modal>

          <Modal active={modalActive2} setActive={setModalActive2}>
          <div>
              <p>421</p>
          </div>
          </Modal>
      </div>

  );
}








export default App;
