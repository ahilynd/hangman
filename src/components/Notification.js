import React from 'react'

const Notification = ({ showNotification }) => {
    return (
        <div className={'notification-container ${showNotification ? 'show' : ''}'}>
            <p>This Letter Was Already Entered</p>
    )
}

export default Notification 