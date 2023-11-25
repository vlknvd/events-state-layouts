// переключатель

const IconSwitch = ({icon, onSwitch}) => {
    return (
        <button className="icon-switch material-icons" onClick={onSwitch} >{icon}</button>
    )
}

export default IconSwitch