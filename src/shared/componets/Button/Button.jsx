
export const Button = ({btnClass, spanClass, title}) => {
    return (
        <button className={btnClass}><span className={spanClass}>{title}</span></button>
    )
}