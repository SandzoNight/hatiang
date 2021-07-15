import Head from 'next/head'
import Contact from '../components/Contact'
import contacts from '../contact.json'
import sources from '../sources.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>ช่องทางหาเตียงผู้ป่วยโควิด-19</title>
      </Head>
      <div className='container mx-auto mt-3 px-4'>
        <h1 className='text-center text-4xl'>
          ช่องทางหาเตียงผู้ป่วย Covid-19
        </h1>
        <div>
          <table className='table is-fullwidth'>
            <thead>
              <tr>
                <th>#</th>
                <th>ช่องทางติดต่อ</th>
                <th>หน่วยงาน</th>
                <th>พื้นที่</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, key) => (
                <tr>
                  <td>{key + 1}</td>
                  <td>
                    <Contact contact={contact} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{`${contact.area ? `ภาค${contact.area}` : ''}`} {contact.province ? `- ${contact.province}` : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <div className='text-center'>รวบรวมข้อมูลจาก</div>
            <div className='text-center text-xs'>อัปเดตเมื่อ {sources.updated_at}</div>
            <ul className='text-center'>
              {sources.list.map(source => (
                <li>{source}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
