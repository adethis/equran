import Header from "../components/Header"
import bannerImg from '../assets/img/img-banner.png'
import icRead from '../assets/img/ic-read.svg'
import Tab from '../components/Tab';

function Tafsir() {
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
                <Tab path='tafsir' />
            </div>
        </>
    )
}

export default Tafsir