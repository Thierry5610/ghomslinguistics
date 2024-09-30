import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles/dataprotection.module.scss';
import { IoMdClose } from "react-icons/io";

export const DataProtectionModal = ({ onClose, onContact }) => {
    return (
        <div className={Styles.modal} aria-hidden="false" aria-modal="true" role="dialog">
            <div className={Styles.content}>
                <button className={Styles.close_button} onClick={onClose} aria-label="Close Modal">
                    <IoMdClose />
                </button>
                <h1>Data Protection Declaration</h1>
                <div className={Styles.text_content}>
                    <h2>Introduction</h2>
                    <p>
                        We, GHOMS LINGUISTICS, are committed to protecting the privacy and security of your personal data. 
                        This declaration explains how we collect, use, and protect the information provided to us in 
                        compliance with the relevant data protection laws in Cameroon and internationally.
                    </p>
                    <h3>1. Data Collection</h3>
                    <p>We collect personal data for the following purposes:</p>
                    <ul>
                        <li>Student registration and enrollment</li>
                        <li>Course management and scheduling</li>
                        <li>Communication with students and parents</li>
                        <li>Payment and billing purposes</li>
                    </ul>
                    <p>The personal data collected includes:</p>
                    <ul>
                        <li>Full name</li>
                        <li>Date of birth</li>
                        <li>Contact details (email, phone number, address)</li>
                        <li>Nationality and language proficiency</li>
                        <li>Payment details</li>
                    </ul>

                    <h3>2. Use of Personal Data</h3>
                    <p>Your personal data is used solely for:</p>
                    <ul>
                        <li>Managing the educational process and providing services</li>
                        <li>Keeping you informed about school updates and events</li>
                        <li>Processing payments and fulfilling contractual obligations</li>
                    </ul>
                    <p>We will not use your personal data for marketing purposes without your explicit consent.</p>

                    <h3>3. Data Sharing</h3>
                    <p>We will not share your personal data with third parties unless:</p>
                    <ul>
                        <li>It is required by law</li>
                        <li>You have given us consent</li>
                        <li>It is necessary to perform our contractual obligations (e.g., sharing with instructors for class administration)</li>
                    </ul>

                    <h3>4. Data Security</h3>
                    <p>
                        We take appropriate technical and organizational measures to protect your data from unauthorized access, 
                        alteration, or disclosure. All personal information is stored securely, and only authorized personnel have access.
                    </p>

                    <h3>5. Data Retention</h3>
                    <p>
                        We retain your personal data for as long as necessary to fulfill our legal and contractual obligations. 
                        After this period, we will securely delete or anonymize your information.
                    </p>

                    <h3>6. Your Rights</h3>
                    <p>As a data subject, you have the following rights:</p>
                    <ul>
                        <li>The right to access and request a copy of your data</li>
                        <li>The right to correct inaccurate data</li>
                        <li>The right to withdraw your consent to data processing</li>
                        <li>The right to request deletion or restriction of your data</li>
                    </ul>
                    <p>To exercise any of these rights, please contact us at [Mail is coming].</p>

                    <h3>7. Changes to This Declaration</h3>
                    <p>
                        We reserve the right to update this data protection declaration as needed. Any changes will be communicated 
                        via our website or directly to students and parents.
                    </p>

                    <h3>Contact Information</h3>
                    <p>
                        If you have any questions regarding this Data Protection Declaration or your personal data, please contact us at:
                    </p>
                    <p>
                        GHOMS LINGUISTICS<br />
                        Address Douala: Opposite to UBA CAMEROUN University Agency, 3P3P+GQ6, Ange Raphaël, Douala, Cameroon<br />
                        Address Yaounde: New onnisport road near Pharmacie Le Bon Berger, Yaoundé, Cameroon<br />
                        Email: [Mail is coming]<br />
                        Phone: +23 7 6 93 07 17 89 / +49 17614267516
                    </p>
                </div>
                <div className={Styles.button_group}>
                    <button className={Styles.accept_button} onClick={onClose}>Accept</button>
                    <button className={Styles.contact_button} onClick={onContact}>Contact</button>
                </div>
            </div>
        </div>
    );
};

DataProtectionModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onContact: PropTypes.func.isRequired,
};
