import React from 'react'
import Header from '../../components/header/Header'

import BodyDiv from '../../components/BodyDiv/BodyDiv'

export default function Home() {
    return (
        <div className="home">
            <Header pageHeader="Dashboard"/>
            <BodyDiv />
        </div>
    )
}

