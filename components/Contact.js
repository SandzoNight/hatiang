import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLine } from '@fortawesome/free-brands-svg-icons'

export default function Contact({ contact }) {
    return (
        <div>
            {contact.tel ? (
                <div>
                    <a href={`tel:${contact.tel}`}>
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> {contact.tel}
                    </a>
                </div>
            ) : null}
            {contact.line ? (
                <div>
                    <a target='_blank' href={`https://line.me/R/ti/p/${contact.line}`}>
                        <FontAwesomeIcon style={{ color: '#00c300' }} icon={faLine}></FontAwesomeIcon> {contact.line}
                    </a>
                </div>
            ) : null}
            {contact.facebook ? (
                <div>
                    <a target='_blank' href={contact.facebook}>
                        <FontAwesomeIcon style={{ color: '#1877f2' }} icon={faFacebook}></FontAwesomeIcon> facebook
                    </a>
                </div>
            ) : null}
        </div>
    )
}