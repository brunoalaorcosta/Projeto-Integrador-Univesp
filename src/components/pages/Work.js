import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa'; 
import FormWork from '../layout/FormWork';
import styles from './Work.module.css';


function Work() {
    return (
        <div className={styles.contact_pai}>
            <div className={styles.contact_filho}> 
                <p><FaMapMarkerAlt /> Rua Major Carvalho Filho, 1667-Centro - Araraquara-SP</p>
                <p><FaPhone /> 16 99775-1680</p>
                <p><FaEnvelope /> moveisminottiorc@gmail.com</p>
                <p><FaInstagram /> @moveisminotti</p>
            </div>
            <div className={styles.contact_container}>
                <h1>Trabalhe Conosco</h1>
                <FormWork />
            </div>
        </div>
    );
}

export default Work;
