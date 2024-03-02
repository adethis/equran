import { Link } from 'react-router-dom';

export default function Tab({ path = '' }) {
    return (
        <div className="tab">
            <Link to='/quran' className={path == 'quran' ? 'active' : ''}>Surah</Link>
            <Link to='/tafsir' className={path == 'tafsir' ? 'active' : ''}>Tafsir</Link>
        </div>
    )
}