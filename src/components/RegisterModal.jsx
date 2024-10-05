import { useEffect } from 'react';
import Styles from './styles/contact.module.scss';
import { IoMdClose } from "react-icons/io";

const RegisterModal = ({ course, onClose }) => {
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
                <h1>Fill in the form to register</h1>
                <form className={Styles.contact_form}>
                    <input className={Styles.form_input} type="text" placeholder='Your name' />
                    <input className={Styles.form_input} type="email" placeholder='Your surname' />
                    <input className={Styles.form_input} type="email" placeholder='Telephone' />
                    <input className={Styles.form_input} type="text" placeholder='Email' />
                    <textarea name="message" className={Styles.form_textarea} placeholder='Message' />
                    <button type="submit" className={Styles.cta}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterModal