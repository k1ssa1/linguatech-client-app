import { useState } from "react";

import styles from "./Contact.module.css"

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
        <section className={styles.main}>
            <div className={styles.header}>
                <h2>Get in touch with us</h2>
                <p>Got questions? We&apos;re here to help! Fill out the form below, and we&apos;ll send you all the infor you need to kickstar your learning experience.</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.lead_capture}> 
                <div className={styles.name_section}>
                    <div className={styles.pname_section}>
                        <label htmlFor="prenom" className={styles.label}>First name</label>
                        <input type="text" name="prenom" placeholder="John" value={contactData.prenom} onChange={handleChange}/>
                    </div>
                    <div className={styles.fname_section}>
                        <label htmlFor="nom" className={styles.label}>Last name</label>
                        <input type="text" name="nom" placeholder="Doe"  value={contactData.nom} onChange={handleChange}/>
                    </div>
                </div>
                <div className={styles.email_section}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" name="email" placeholder="john.doe@example.com"  value={contactData.email} onChange={handleChange}/>
                </div>
                <div className={styles.phone_section}>
                    <label htmlFor="telephone" className={styles.label}>Phone number</label>
                    <input type="text" name="telephone" placeholder="e.g. +1 (555) 123-4567"  value={contactData.telephone} onChange={handleChange}/>
                </div>
                <div className={styles.message_section}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea type="text" name="message" placeholder="Your message..." value={contactData.message} onChange={handleChange}/>
                </div>
                <button type="submit" className={styles.submit_btn}>Submit</button>
            </form>
        </section>
     );
}
 
export default Contact;