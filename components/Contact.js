export default function Contact({ contact }) {
    return (
        <div>
            {contact.tel ? (
                <div>
                    โทร: <a href={`tel:${contact.tel}`}>{contact.tel}</a>
                </div>
            ) : null}
            {contact.line ? (
                <div>
                    line: <a href={`https://line.me/R/ti/p/${contact.line}`}>{contact.line}</a>
                </div>
            ) : null}
            {contact.facebook ? (
                <div>
                    <a href={contact.facebook}>facebook</a>
                </div>
            ) : null}
        </div>
    )
}