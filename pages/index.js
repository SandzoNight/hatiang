import Head from 'next/head'
import Link from 'next/link'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import contacts from '../contact.json'

export default function Home() {
  return (
    <>
      <div className='container mx-auto my-3 px-4'>
        <h1 className='text-left sm:text-center text-2xl sm:text-4xl'>
          ช่องทางหาเตียงผู้ป่วย Covid-19
        </h1>
        <div className='text-right my-4'>
          <Link href='/add' target='_blank'>
            <a className='button is-link'>
              + เพิ่มข้อมูล
            </a>
          </Link>
        </div>
        <div className='sm:invisible text-center text-xs text-gray-600'>
          &lt;&lt; ปัดซ้าย-ขวาเพื่อดูข้อมูลเพิ่มเติม &gt;&gt;
        </div>
        <div>
          <div className='table-container'>
            <table className='table sm:w-full is-hoverable'>
              <thead>
                <tr>
                  <th>หน่วยงาน</th>
                  <th>พื้นที่</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, key) => (
                  <tr key={key}>
                    <td className='whitespace-nowrap'>
                      <div>
                        <div className='text-lg'>{contact.name}</div>
                        <Contact contact={contact} />
                      </div>
                    </td>
                    <td className='whitespace-nowrap'>{`${contact.area ? `ภาค${contact.area}` : ''}`} {contact.province ? `- ${contact.province}` : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
