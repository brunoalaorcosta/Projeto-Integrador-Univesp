import styles from './Form.module.css'
import Input from '../Formulario/Input'
import Submit from '../Formulario/Submit'


function Form() {
    return (
        <form className={styles.form} >
            <Input
                type="text"
                text="Nome"
                placeholder="Insira seu nome" />
            <Input
                type="email"
                text="Email"
                placeholder="Insira seu email" />
            <Input
                type="number"
                text="Insira seu Celular"
                placeholder="(XXX-XXXXXXXX)" />
            <Input
                type="text"
                text="Assunto"
                placeholder="Assunto" />
            <Input
                type="textarea"
                text="Mensagem"
                placeholder="Escreva sua mensagem aqui" />
           <Submit
            type="button"
           text="Enviar"/>
        </form>
    )
}
export default Form