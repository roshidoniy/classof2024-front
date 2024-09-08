import '../styles/message.css'

const Message = ({message} : {message: string}) => {
    return (
        <div className='message-box'>
            <p className='message-text'>{message}</p>
        </div>
    )
}

export default Message