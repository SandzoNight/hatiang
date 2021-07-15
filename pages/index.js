import Head from 'next/head'
import contacts from '../contact.json'
import sources from '../sources.json'

export default function Home() {
  return (
    <div className='container mx-auto mt-3'>
      <h1 className='text-center text-4xl'>
        ช่องทางหาเตียงผู้ป่วย Covid-19
      </h1>
      <div>
        <table className='table is-fullwidth'>
          <thead>
            <tr>
              <th>#</th>
              <th>เบอร์ติดต่อ</th>
              <th>หน่วยงาน</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, key) => (
              <tr>
                <td>{key + 1}</td>
                <td><a href={`tel:${contact.tel}`}>{contact.tel}</a></td>
                <td>{contact.name}</td>
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
  )
}