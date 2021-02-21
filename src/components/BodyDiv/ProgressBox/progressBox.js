import React from 'react';

import Button from '../../Button/Button'

export default function ProgressBox() {
    return (
        <div className="progressBox">
            <div className="progressBox-heading">
                <h1><strong>Recruitment Progress</strong></h1>
                <Button value="View All" name="viewAll" id="viewAll" className="ViewAll"/>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Designation</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Profile Pic</td>
                        <td>Project Manager</td>
                        <td>Practical Round</td>
                    </tr>
                    <tr>
                        <td>Profile Pic</td>
                        <td>Project Manager</td>
                        <td>Practical Round</td>
                    </tr>
                    <tr>
                        <td>Profile Pic</td>
                        <td>Project Manager</td>
                        <td>Practical Round</td>
                    </tr>
                    <tr>
                        <td>Profile Pic</td>
                        <td>Project Manager</td>
                        <td>Practical Round</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Showing 4 out of 4 results</td>
                        <td>View All</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}