import { useEffect } from 'react';
import Styles from './styles/contact.module.scss';
import { IoMdClose } from "react-icons/io";

const ContactModal = ({ onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    return (
        <div className={Styles.modal}>
            <div className={Styles.content}>
                <div className={Styles.close_button} onClick={onClose}> {/* Add onClick to close button */}
                    <IoMdClose />
                </div>
                <h1>Contact Us</h1>
                <form className={Styles.contact_form}>
                    <input className={Styles.form_input} type="text" placeholder='Your name' />
                    <input className={Styles.form_input} type="email" placeholder='Your email' />
                    <input className={Styles.form_input} type="text" placeholder='Subject' />
                    <textarea name="message" className={Styles.form_textarea} placeholder='Message' />
                    <button type="submit">Send mail</button>
                </form>
            </div>
        </div>
    )
}

export default ContactModal