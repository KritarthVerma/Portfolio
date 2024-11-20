import React, { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [loading,setLoading] = useState(false)
    const [form, setForm] = useState({
        name : "",
        email : "",
        message : "",
    })
    const handleChange = ({target : {name,value}})=>{
        setForm({...form, [name]:value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)
        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    from_name : form.name,
                    to_name : 'Kritarth',
                    from_email : form.email,
                    to_email : import.meta.env.VITE_MY_EMAIL,
                    message : form.message,
                },
                import.meta.env.VITE_PUBLIC_KEY,
            )
            setLoading(false)
            alert('Your message has been sent')
            setForm({
                name : '',
                email : '',
                message : '',
            })
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert('Something went wrong!')
        }
    }
  return (
    <section className='c-space my-48' id="contact">
        <h3 className='head-text'>Let's talk</h3>
        <p className='text-lg text-white-600 mt-3'>
            As someone starting my journey in coding, 
            I'm excited to help you build a new website, 
            improve your existing platform, 
            or bring your unique project to life with enthusiasm and fresh ideas.
        </p>
        <div 
            className='relative min-h-screen flex items-center justify-center flex-col'
        >
            <img 
                src="/assets/terminal.png" 
                alt="terminal background"
                className='absolute inset-0 min-h-screen'
            />
            <div className='contact-container'>
                <form 
                    ref={formRef} 
                    onSubmit={handleSubmit} 
                    className='mt-12 flex flex-col space-y-7'
                >
                    <label className='space-y-3'>
                        <span 
                            className='field-label'
                        >
                            Full Name
                        
                        </span>
                        <input
                            type="text"
                            name = "name"
                            value = {form.name}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='Your Name'
                        />

                    </label>
                    <label className='space-y-3'>
                        <span 
                            className='field-label'
                        >
                            Email
                        
                        </span>
                        <input
                            type="email"
                            name = "email"
                            value = {form.email}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='Your Email'
                        />
                        
                    </label>
                    <label className='space-y-3'>
                        <span 
                            className='field-label'
                        >
                            Your Message
                        
                        </span>
                        <textarea
                            type="text"
                            name = "message"
                            value = {form.message}
                            onChange={handleChange}
                            required
                            row={5}
                            className='field-input'
                            placeholder='Your Message'
                        />
                        
                    </label>
                    <button 
                        className='field-btn' 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                        <img 
                            src="/assets/arrow-up.png" 
                            alt="arrow-up" 
                            className='field-btn_arrow'
                        />
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact