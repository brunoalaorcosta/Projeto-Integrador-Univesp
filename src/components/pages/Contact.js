import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa'; 
import Form from '../layout/Form';
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.contact_pai}>
            <div className={styles.contact_filho}> 
                <p><FaMapMarkerAlt /> Rua Major Carvalho Filho, 1667-Centro - Araraquara-SP</p>
                <p><FaPhone /> 16 99775-1680</p>
                <p><FaEnvelope /> moveisminottiorc@gmail.com</p>
                <p><FaInstagram /> @moveisminotti</p>
            </div>
            <div className={styles.contact_container}>
                <h1>Solicite um orçamento</h1>
                <Form />
            </div>
        </div>
    );
}

export default Contact;

