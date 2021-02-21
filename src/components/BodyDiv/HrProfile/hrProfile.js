
import React from 'react';
import Avatar from "../../avatar/Avatar";
import { BiPhone } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import HrInfo from "../HrProfile/HrInfo/HrInfo"
import Button from '../../Button/Button'


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
                <div className="BiPhone Icon">
                    <BiPhone />
                </div>
                <div className="MdMailOutline Icon">
                    <MdMailOutline />
                </div>
                <div className="BsThreeDots Icon">    
                    <BsThreeDots />
                </div>
            </div>
            <div className="profile-info">
                <HrInfo label="Joined Date:" data="18-Apr-2015" />
                <HrInfo label="Projects:" data="32 Active" />
                <HrInfo label="Accomplishments:" data="125" />
                <Button value="View More" name="viewMore" id="viewMore" className="ViewMore"/>
            </div>
        </div>
    )
}