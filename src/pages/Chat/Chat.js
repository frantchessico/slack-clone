import React from 'react';
import { useParams } from 'react-router-dom'
import './Chat.css'

function Chat() {
    const { roomId } = useParams()
    return (
        <div className="chat">
            
        </div>
    )
}

export default Chat
