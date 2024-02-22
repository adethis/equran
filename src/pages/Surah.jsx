import Header from '../components/Header'
import Tab from '../components/Tab'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailSurah } from '../repository/SurahRepository'
import imgBismillah from '../assets/img/img-bismillah.png'
import icShare from '../assets/img/ic-share.svg'
import icPlay from '../assets/img/ic-play.svg'
import icBookmark from '../assets/img/ic-bookmark.svg'

function Surah() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [surah, setSurah] = useState([])
    const [ayat, setAyat] = useState([])

    const fetchData = () => {
        getDetailSurah(id)
            .then(res => {
                setSurah(res.data.data)
                setAyat(res.data.data.ayat)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        setIsLoading(true)
        fetchData()
    }, [])

    return (
        <>
            <Header />
            <div className='content'>
                <div className='banner banner-detail'>
                    <div className='banner-text'>
                        <h4 className='banner-heading'>{surah.namaLatin}</h4>
                        <p className='banner-description'>{surah.arti}</p>
                        <div className='divider'></div>
                        <img src={imgBismillah} className='img-bismillah' alt='bismillah' />
                    </div>
                </div>
                <div className='list-ayat'>
                    {
                                isLoading
                                ? <h3>Loading</h3>
                                : ayat.map(function(data, index) {
                                    return (
                                        <div className='ayat-item' key={index}>
                                            <div className='ayat-header'>
                                                <span className='ayat-number'>{data.nomorAyat}</span>
                                                <div className='d-flex gap-2'>
                                                    <img src={icShare} className='icon' alt='icon' />
                                                    <img src={icPlay} className='icon' alt='icon' />
                                                    <img src={icBookmark} className='icon' alt='icon' />
                                                </div>
                                            </div>
                                            <div className='ayat-body'>
                                                <p className='ayat-arabic'>{data.teksArab}</p>
                                                <p className='ayat-translate'>{data.teksIndonesia}</p>
                                            </div>
                                        </div>
                                    )
                                })
                    }
                </div>
            </div>
        </>
    )
}

export default Surah