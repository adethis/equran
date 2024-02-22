import icMenu from '../assets/img/ic-menu.png'
import icSearch from '../assets/img/ic-search.png'

export default function Header() {
    return (
        <div className="header">
            <div className="d-flex align-items-center gap-2">
                <img src={icMenu} alt="" />
                <span className='header-title'>Quran App</span>
            </div>
            <img src={icSearch} alt="" />
        </div>
    )
}