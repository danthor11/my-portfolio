import React from 'react'

const MessageForm = ({message,isActived,customClass}:{message:string,isActived:boolean,customClass?:string}) => {
  return (
    <div className={`message-form-modal ${isActived && "message-form-modal-actived"} ${customClass && customClass
    }` }>
        <h2 className="text-lg font-extralight">{message}</h2>
    </div>
  )
}

export default MessageForm