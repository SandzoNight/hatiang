import Head from 'next/head'
import Link from 'next/link'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import contacts from '../contact.json'
import sources from '../sources.json'

export default function Home() {
  return (
    <>
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
              src="https://docs.google.com/forms/d/e/1FAIpQLSe4PygwlxkXJHjvv3JXX5lxqIUuE1AlbeHRxyELAyTNkA-8DQ/viewform?embedded=true" height="1508" frameBorder="0" marginHeight="0" marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
