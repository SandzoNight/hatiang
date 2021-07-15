import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLine } from '@fortawesome/free-brands-svg-icons'

export default function Contact({ contact }) {
    return (
        <div>
            {contact.tel ? (
                <div>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <a href={`tel:${contact.tel}`}>{contact.tel}</a>
                </div>
            ) : null}
            {contact.line ? (
                <div>
                    <FontAwesomeIcon style={{color: '#00c300'}} icon={faLine}></FontAwesomeIcon> <a href={`https://line.me/R/ti/p/${contact.line}`}>{contact.line}</a>
                </div>
            ) : null}
            {contact.facebook ? (
                <div>
                    <FontAwesomeIcon style={{color: '#1877f2'}} icon={faFacebook}></FontAwesomeIcon> <a href={contact.facebook}>facebook</a>
                </div>
            ) : null}
        </div>
    )
}