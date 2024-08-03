import { useEffect, useRef } from 'react'
import './chatPage.css'

const ChatPage = () => {

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" })
  }, [])
  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message</div>
          <div className="message user">Test message from user Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus aspernatur ratione doloremque error dolorem mollitia assumenda maxime, deserunt deleniti! Optio cum eos voluptatem quibusdam exercitationem repellat sint, animi iure!</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div><div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div><div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div><div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div><div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div ref={endRef} />
        </div>
      </div>
    </div>
  )
}

export default ChatPage