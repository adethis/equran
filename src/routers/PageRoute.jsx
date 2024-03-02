import React from 'react'
import {
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Onboarding from '../pages/Onboarding'
import Quran from '../pages/Quran'
import Surah from '../pages/Surah'
import Tafsir from '../pages/Tafsir'

const PageRoute = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Onboarding />} />
                <Route path='/quran' element={<Quran />} />
                <Route path='/surah/:id' element={<Surah />} />
                <Route path='/tafsir' element={<Tafsir />} />
            </Routes>
        </HashRouter>
    )
}

export default PageRoute;