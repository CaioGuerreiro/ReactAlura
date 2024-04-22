import './Buttons.css'

const Buttons = (props) => {
    return(
        <button className='button'>{props.children}</button>
    )
}
export default Buttons