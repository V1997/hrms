import React from 'react';
import Button from '../../Button/Button'
import Tables from '../../table/Tables'

export default function ProgressBox() {
    return (
        <div className="progressBox">
            <div className="progressBox-heading">
                <h1><strong>Recruitment Progress</strong></h1>
                <Button value="View All" name="viewAll" id="viewAll" className="ViewAll"/>
            </div>
            <div>
                <Tables />
            </div>
        </div>
    )
}