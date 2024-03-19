import { BsXLg } from "react-icons/bs";

export default function Modal({message, setMessage}) {
    return (
        <div className="modal">
            <div className="modal-content">
            <div className="icon" onClick={() => setMessage({})}><BsXLg /></div>
                {message}
            </div>
        </div>)
}