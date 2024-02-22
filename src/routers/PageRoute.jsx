import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Onboarding from '../pages/Onboarding'
import Quran from '../pages/Quran'
import Surah from '../pages/Surah'

const PageRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Onboarding />} />
                <Route path='/quran' element={<Quran />} />
                <Route path='/surah/:id' element={<Surah />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoute;