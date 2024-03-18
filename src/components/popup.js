export default function Popup({message, setMessage}) {
    return (<div className="modal-message" onAnimationEnd={() => setMessage({})}>
                <h3>{message}</h3>
            </div>)
}