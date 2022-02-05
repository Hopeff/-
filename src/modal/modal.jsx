import React from "react";
import  "./modal.css";

const Modal = ({visible = false, onClose, children}) => {

    const onKeydown = key => {
        // eslint-disable-next-line default-case
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }
    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })
    if (!visible) return null;
    return (
        <div>
            <div className="modal" onClick={onClose}>
                <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                    {children}
                    <span className="modal-close" onClick={onClose}>
                 &times;
             </span>
                </div>
            </div>
        </div>)
}

export default Modal