import React from 'react'
import Popup from './Popup'


const Header = ( { popupMessage, emails, newEmail, handleEmailChange, addEmail } ) => {
    return (
        <header class="masthead textFormat">
        <div>
            <div>
                <h1>Build a landing page for your business or project and generate more leads!</h1>
            </div>
            <div>
                <form>
                    <div className="emailRow">
                        <form onSubmit={addEmail}>
                            <input 
                                className="email-field" 
                                type="email"
                                value={newEmail}
                                onChange={handleEmailChange}
                                placeholder="Enter your email..."
                            />
                            <button className="sign-up-button" type="submit">Sign up!</button>
                        </form>
                    </div>
                    <div>
                        <Popup message={popupMessage}/>
                    </div>
                    <div>
                        <h4>Email List</h4>
                        {emails.map((email) => 
                            <p>{email}</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
      </header>
    )
}

export default Header