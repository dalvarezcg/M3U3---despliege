import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const ContactScreen = () => {
    const initial_form_data_values = {
        [fields.NOMBRE_COMPLETO]: '',
        [fields.EMAIL]: '',
        [fields.MENSAJE]: ''
    }
    const [contact_form_data_values, setContactFormDataValues] = useState({})

  const fields = {
    NOMBRE_COMPLETO: 'nombre_completo',
    EMAIL: 'email',
    MENSAJE: 'mensaje'  
  } 

  const handleChangeInputValue = (event) => {   
  }


  const handleSubmitContactForm = (event) => {
    event.preventDefault()
    event.target
    console.dir(event.target.className)
    const contact_form_data = new FormData(event.target)
    const contact_form_data_values = {}

    for (let field in fields)
    {
      console.log(contact_form_data.get(fields[field]))
      contact_form_data_values[fields[field]] = contact_form_data.get(fields[field])
    }
    console.log("contact_form_data_values:" + contact_form_data_values)
  }

  return (
    <div>
        <Navbar/>
        <h1>Contactanos</h1>
        <form onSubmit={handleSubmitContactForm}>
          <div>
            <label htmlFor='nombre_completo'>Nombre completo:</label>
            <input type="text" 
            placeholder='JOe Doe' 
            id='nombre_completo' 
            name='nombre_completo' 
            maxLength={30}
            onChange={handleChangeInputValue}/>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type="email" placeholder='joedoe@mail.com' id='email' name='email' 
            maxLength={30}
            onChange={handleChangeInputValue}/>
          </div>
          <div>
            <label htmlFor='mensaje'>Mensaje:</label>
            <textarea type="text" placeholder='Escribe tu mensaj' id='mensaje' name='mensaje' 
            maxLength={30}
            onChange={handleChangeInputValue}></textarea>
          </div>
          <button type='submit'>Enviar Consulta</button>
        </form>
    </div>
  )
}

export default ContactScreen