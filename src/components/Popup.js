import React from 'react'


const Popup = ( { message } ) => {
    if (message === null) {
        return null
    }
    return (
        <div className="popup">
            {message}
        </div>
        
    )
}

export default Popup