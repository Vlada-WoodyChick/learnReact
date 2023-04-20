
export const Button = (props) => {
    return (
        <button className={props.btnClass}><span className={props.spanClass}>{props.title}</span></button>
    )
}