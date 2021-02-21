import React from 'react';
import Button from '../../Button/Button';
import Image from '../../image/Image'
export default function GoodMorningBox({name, number="9", image}) {
    return (
        <div className="notification-container">
            <div className="notification-container-text">
                <div className="notification-name">
                    <h3>Good morning {name}</h3>
                </div>
                <div className="notification-text">
                    Today you have {number} new Applications. 
                    Also you need to hire 2 new UX designers. 
                    1 React Native Developer.
                </div>
                <div className="read-more-button">
                    <Button name="ReadMore" className="readMore" value="Read More"/>
                </div>
            </div>
            <div className="notification-container-img">
                <Image src="https://bloomfield.edu/sites/default/files/2019-05/hrbanner_0.png" 
                className="goodMorning-desk-img" height="100px" width="250px"/>
            </div>
        </div>
    )
}
