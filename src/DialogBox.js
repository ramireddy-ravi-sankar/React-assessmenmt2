import React, { useState } from "react";

function DialogBox(){
    const [showPopup,setShowPopup]=useState(false)

    const togglePopup=()=>{
        setShowPopup(!showPopup)
    }
    return(
        <>
            <div className="center-align">
                <button onClick={togglePopup}>Show Dialog</button>
            </div>
            {
                showPopup && (
                    <>
                        <div className="popup">
                           <div className="popup-inner">
                                <h2>Header</h2>
                                <hr/>
                                <p>Popup content here will be show in this place. 
                                    Click on Close Dialog to close Popup. I had used 
                                    Prime React to create this dialog box. I had created 2 buttons using 
                                    functional components.
                                </p>
                                <div className="popup-inner-button">
                                    <button onClick={togglePopup}>Close Dialog</button>
                                </div>
                           </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default DialogBox