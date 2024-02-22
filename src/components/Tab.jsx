import { Link } from 'react-router-dom';

export default function Tab() {
    return (
        <div className="tab">
            <Link to='/quran' className='active'>Surah</Link>
            <Link to='/tafsir'>Tafsir</Link>
        </div>
    )
}