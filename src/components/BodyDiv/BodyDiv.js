import React from 'react';
import GoodMorningBox from '../../components/BodyDiv/GoodMorning/GoodMorningBox'
import ProgressBox from './ProgressBox/progressBox'
import CalendarBox from './CalendarBox/calendarBox'
import HrProfile from './HrProfile/hrProfile'

export default function BodyDiv() {
    return (
        <div className="bodyDiv">
            <div className="goodMorning-Progress Box">
                <GoodMorningBox name={"vasu"} image="" />
                <ProgressBox />
            </div>
            <div className="calender-hr Box">
                <CalendarBox />
                <HrProfile />
            </div>
        </div>
    )
}