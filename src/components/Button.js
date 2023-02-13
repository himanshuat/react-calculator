function Button(props) {
    return (
        <button 
            onClick={props.handleClick} 
            className={`btn ${props.class}`}
        >
            {props.val}
        </button>
    );
}

export default Button;