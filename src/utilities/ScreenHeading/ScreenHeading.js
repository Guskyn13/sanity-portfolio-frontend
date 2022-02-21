import React from 'react';
import "./ScreenHeading.scss";

const ScreenHeading = (props) => {
    return (
        <div className='headingContainer'>
            <div className='screenSubHeading'>
                        <span>{props.subHeading}</span>
                    </div>
            

            {
                (props.subHeading) ? (
                    <div className='screenHeading'>
                <span>{props.title}</span>
            </div>
                ) : <div></div>
            }

            <div className='headingSeperator'>
                <div className='seperaorLine'>
                   
                </div>
            </div>
        </div>
    );
}

export default ScreenHeading;