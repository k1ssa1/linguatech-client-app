import { useState, useEffect, useRef } from "react";

import styles from "./Contact.module.css"

import { ToastContainer, toast } from 'react-toastify';


const Contact = () => {

    const [contactData, setContactData] = useState({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        message: ''
    })

    const [loading, setLoading] = useState(false);
    let timeOutRef = useRef(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('draft'));
        if(storedData){
            setContactData(storedData)
        }

        return () => {
            localStorage.removeItem('draft')
        }
    }, [])


    const handleChange = (e) => {
        
        const {name, value} = e.target;
        setContactData((prevState) => {
            const updateData = { ...prevState, [name]: value};
            localStorage.setItem("draft", JSON.stringify(updateData))

            if(timeOutRef.current){
                clearTimeout(timeOutRef.current)
            }


            timeOutRef.current = setTimeout(async () => {
                try{
                    await fetch('https://linguatech-backend-git-main-k1ssa1s-projects.vercel.app/save-incomplete-data', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updateData)
                    })
                }catch(error){
                    console.error(error)
                }
            }, 60000)
            
            return updateData;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setLoading(true);

        if(!contactData.prenom || !contactData.nom || !contactData.email || !contactData.telephone || !contactData.message){
            toast.error("All fields are required", {
                position: 'bottom-center'
            });
            setLoading(false);
            return
        }

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
                setContactData({prenom: '', nom: '', email: '', telephone: '', message: ''});
                toast.success('Information sent successfully', {
                    position: 'bottom-center'
                })
            }else{
                throw new Error('Error in form submission')
            }
        }catch(error){
            console.error(error);
            toast.error('Something went wrong. Please try again later!', {
                position: 'bottom-center'
            })
        }finally{
            setLoading(false)
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
                        <input type="text" name="prenom" placeholder="John" value={contactData.prenom} onChange={handleChange} disabled={loading}/>
                    </div>
                    <div className={styles.fname_section}>
                        <label htmlFor="nom" className={styles.label}>Last name</label>
                        <input type="text" name="nom" placeholder="Doe"  value={contactData.nom} onChange={handleChange} disabled={loading}/>
                    </div>
                </div>
                <div className={styles.email_section}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" name="email" placeholder="john.doe@example.com"  value={contactData.email} onChange={handleChange} disabled={loading}/>
                </div>
                <div className={styles.phone_section}>
                    <label htmlFor="telephone" className={styles.label}>Phone number</label>
                    <input type="text" name="telephone" placeholder="e.g. +1 (555) 123-4567"  value={contactData.telephone} onChange={handleChange} disabled={loading}/>
                </div>
                <div className={styles.message_section}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea type="text" name="message" placeholder="Your message..." value={contactData.message} onChange={handleChange} disabled={loading}/>
                </div>
                <button type="submit" className={styles.submit_btn}>{loading ? 'Sending...' : 'Submit'}</button>
            </form>
            <ToastContainer/>
        </section>
     );
}
 
export default Contact;