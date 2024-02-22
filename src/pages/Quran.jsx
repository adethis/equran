import Header from '../components/Header'
import bannerImg from '../assets/img/img-banner.png'
import icRead from '../assets/img/ic-read.svg'
import Tab from '../components/Tab';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSurah } from '../repository/SurahRepository';

function Quran() {
    const [isLoading, setIsLoading] = useState(false)
    const [surah, setSurah] = useState([])

    const fetchData = () => {
        getSurah()
            .then(res => {
                setSurah(res.data.data)
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
                <div className='title'>
                    <span className='title-greeting'>Assalamu'alaikum</span>
                    <h3 className='title-name'>Sobat Quro</h3>
                </div>
                <div className='banner'>
                    <div className='banner-text'>
                        <div className="d-flex align-items-center gap-1">
                            <img src={icRead} alt='read' />
                            <span>Last Read</span>
                        </div>
                        <h4 className='banner-heading'>Al-Fatihah</h4>
                        <p className='banner-description'>Ayah No: 1</p>
                    </div>
                    <img src={bannerImg} className='image-banner' alt='banner' />
                </div>
                <Tab />
                <div className="list-surah">
                    {
                            isLoading
                            ? <h3>Loading</h3>
                            :  surah.map(function(data, index) {
                                return (
                                    <Link to={`/surah/${data.nomor}`} className="item-surah" key={index}>
                                        <div className="surah-text">
                                            <div className="surah-number">{data.nomor}</div>
                                            <div className="surah-ayat">
                                                <span className="ayat-title">{data.namaLatin}</span>
                                                <div className='ayat-description'>
                                                    <span>{data.arti}</span>
                                                    <span className='circle-divider'></span>
                                                    <span>{data.jumlahAyat} Ayat</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className='surah-arab'>{data.nama}</span>
                                    </Link>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}

export default Quran;