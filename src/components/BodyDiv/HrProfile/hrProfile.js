
import React from 'react';
import Avatar from "../../avatar/Avatar";

export default function HrProfile() {
    return (
        <div className="Hr">
            <div className="profile-container">
                <Avatar/>
                <div className="avatar-name-position">
                    <label>Rabindra Kumar</label><br />
                    <label>HR manager </label>
                </div>

            </div>
            <div className="action-btn">
                Buttons
            </div>
            <div className="profile-info">
                profile info
            </div>
        </div>
    )
}