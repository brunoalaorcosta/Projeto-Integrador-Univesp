import React from 'react';
import styles from './FormWork.module.css';
import Input from '../Formulario/Input';
import Submit from '../Formulario/Submit';

function FormWork() {
    return (
        <form className={styles.form} >
            <Input
                type="text"
                text="Nome"
                placeholder="Insira seu nome" />
            <Input
                type="number"
                text="CPF"
                placeholder="Insira seu CPF" />
            <Input
                type="email"
                text="Email"
                placeholder="example@email.com.br" />
            <Input
                type="number"
                text="Telefone"
                placeholder="XXX-XXXXXXXX" />
            <Input
                type="text"
                text="Endereço"
                placeholder="Insira seu endereço" />
            <Input
                type="text"
                text="Vaga"
                placeholder="Insira para qual vaga" />
            <div className={styles.fileUpload}>
                <label htmlFor="fileInput">Upload de Arquivo:</label>
                <input id="fileInput" type="file" />
            </div>
            <Submit
                type="button"
                text="Enviar" />
        </form>
    );
}

export default FormWork;
