import { useState } from "react";


const Contact = () => {

    const [contactData, setContactData] = useState({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContactData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('https://linguatech-backend.vercel.app/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            });

            if(response.ok){
                const data = await response.json();
                setContactData({prenom: '', nom: '', email: '', telephone: '', message: ''})
            }else{
                throw new Error('Error in form submission')
            }
        }catch(error){
            console.error(error)
        }
    }

    return ( 
        <>
            <h2>Contactez nous</h2>
            <form onSubmit={handleSubmit}> 
                <input type="text" name="prenom" value={contactData.prenom} onChange={handleChange}/>
                <input type="text" name="nom" value={contactData.nom} onChange={handleChange}/>
                <input type="email" name="email" value={contactData.email} onChange={handleChange}/>
                <input type="text" name="telephone" value={contactData.telephone} onChange={handleChange}/>
                <textarea type="text" name="message" value={contactData.message} onChange={handleChange}/>
                <button type="submit">envoyer</button>
            </form>
        </>
     );
}
 
export default Contact;