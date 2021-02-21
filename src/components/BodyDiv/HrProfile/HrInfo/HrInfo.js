import React from 'react'

export default function HrInfo({label, data }) {
    return(
        <div className="hrInfo-Container">
            <div className="hrInfo-Label">{label}</div>
            <div className="hrInfo-Data">{data}</div>
        </div>   
    )
}