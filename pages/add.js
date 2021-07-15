import Head from 'next/head'
import Link from 'next/link'
import Contact from '../components/Contact'
import contacts from '../contact.json'
import sources from '../sources.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>ช่องทางหาเตียงผู้ป่วยโควิด-19</title>
      </Head>
      <div className='container mx-auto my-3 px-4'>
        <div>
          <Link href='/'>
            <a className='text-yellow-500'>
              &lt; กลับ
            </a>
          </Link>
        </div>
        <h1 className='text-left sm:text-center text-2xl sm:text-4xl'>
          เพิ่มข้อมูล
        </h1>
        <div>
          <div className='table-container'>
            <iframe
              className='w-full'
              src="https://docs.google.com/forms/d/e/1FAIpQLSe4PygwlxkXJHjvv3JXX5lxqIUuE1AlbeHRxyELAyTNkA-8DQ/viewform?embedded=true" height="1508" frameborder="0" marginheight="0" marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      <div>
      <div className='text-center'>Open source on <a href='https://github.com/SandzoNight/hatiang' className='font-bold'>github</a></div>
        <div className='text-center'>รวบรวมข้อมูลจาก</div>
        <div className='text-center text-xs'>อัปเดตเมื่อ {sources.updated_at}</div>
        <ul className='text-center'>
          {sources.list.map(source => (
            <li>{source}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
