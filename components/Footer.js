import sources from '../sources.json'

export default function Footer() {
    return (
        <div>
            <div className='text-center'>Open source on <a href='https://github.com/SandzoNight/hatiang' className='font-bold'>github</a></div>
            <div className='text-center text-xs'>อัปเดตเมื่อ {sources.updated_at}</div>
            <ul className='text-center'>
                {sources.list.map(source => (
                    <li>{source}</li>
                ))}
            </ul>
        </div>
    )
}