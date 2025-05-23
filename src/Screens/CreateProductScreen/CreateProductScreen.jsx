import { addDoc, collection } from 'firebase/firestore'
import React ,{ useState} from 'react'
import database from '../../config/firebase'
import Navbar from '../../Components/Navbar/Navbar'

const CreateProductScreen = () => {
    let inicial_state_form = {
        title: '',
        price: 0,
        discount: 0,
        img: null
    }  
  const [form_state, setform_state ] = useState(inicial_state_form)

  const handleChange = (event) =>{
    let field = event.target.name
    let value = event.target.value
    if (field === 'img') value = event.target.files[0]

    setform_state({...form_state, [field]: value})
  } 

  const uploadImgToImgBB = async (img_file) =>{
    //debemos enviar un formulario a la api
    //la api nos solicita el formato: forma-data
    let API_KEY_IMGBB = '1d1826450b78627eb721e9a6ec7038a2'
    const form_data = new FormData()
    form_data.append('image', img_file)
    const response = await fetch(
                    `https://api.imgbb.com/1/upload?key=${API_KEY_IMGBB}`,
                    {
                        method: 'POST',
                        body: form_data
                    }   
                )
    const data = await response.json()    
    console.log('Respuesta de IMGBB:', data)
    return data.data.url
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    const url_img = await uploadImgToImgBB(form_state.img)
    console.log(url_img)
    const collection_ref = collection(database, 'products')
    await addDoc(collection_ref, {...form_state, img: url_img})
    /*await addDoc(
            collection_ref,
            {
                title: form_state.title,
                price: form_state.price,
                discount: form_state.discount,
                img: url_img
            }
        )*/
    setform_state(inicial_state_form)//reinializo el formulario
  }
console.log(form_state)
  return (
    <div>
      <Navbar/>
      <h1>Crea tu producto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titulo:</label>
                    <input 
                        type="text" 
                        name='title' 
                        id="title" 
                        placeholder='Escribe el titulo...' 
                        value={form_state.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Precio:</label>
                    <input 
                        type="number" 
                        name='price' 
                        id="price" 
                        placeholder='Escribe el precio...' 
                        min={0} 
                        value={form_state.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="discount">Descuento (opcional):</label>
                    <input 
                        type="number" 
                        name='discount' 
                        id="discount" 
                        placeholder='Escribe el descuento...' 
                        min={0} 
                        value={form_state.discount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="img">Seleciona una imagen:</label>
                    <input 
                        type='file' 
                        id='img' 
                        name='img' 
                        onChange={handleChange}/>
                </div>
                <button 
                    type='submit'
                >Crear producto</button>
            </form>
    </div>
  )
}

export default CreateProductScreen
