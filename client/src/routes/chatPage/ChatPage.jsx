import './chatPage.css'
import NewPrompt from '../../components/newPrompt/NewPrompt'

const ChatPage = () => {
  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          <NewPrompt />
        </div>
      </div>
    </div>
  )
}

export default ChatPage