import React, { useContext } from 'react'
import Buoi15Bai1 from './Buoi15Bai1'
import Buoi15Bai2 from './Buoi15Bai2'
import Buoi15Bai3 from './Buoi15Bai3'
import Buoi15Bai4 from './Buoi15Bai4'
import DemoUseContext, { Child } from './DemoUseContext'
import { ThemeCtx } from './ThemeContext'

const Page15 = () => {
    return (
        <div>
            <Buoi15Bai1 />
            <Buoi15Bai2 />
            {/* <Buoi15Bai3 /> */}
            {/* <Buoi15Bai4 /> */}
            {/* <DemoUseContext /> */}
        </div>
    )
}

export default Page15