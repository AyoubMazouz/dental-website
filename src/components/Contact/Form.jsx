import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Form = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_cofo6md', 
            'template_qoq5yk2', 
            form.current, 
            'GBDJ0fB2Nhe7KZSmS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
    
        <form ref={form} onSubmit={sendEmail}
        className='py-12 px-6 space-y-4'>

            {/* FirstName */}
            <div className="flex flex-col">
                <label htmlFor="first-name"
                    className="">
                    FirstName
                </label>
                <input type="text"
                    name="first-name"
                    placeholder="first-name"
                    className="h-10 bg-slate-100 rounded shadow" />
            </div>

            {/* LastName */}
            <div className="flex flex-col">
                <label htmlFor="last-name"
                    className="">
                    LastName
                </label>
                <input type="text"
                    name="last-name"
                    placeholder="last-name"
                    className="h-10 bg-slate-100 rounded shadow" />
            </div>

            {/* Email */}
            <div className="flex flex-col">
                <label htmlFor="email">
                    Email
                </label>
                <input type="email"
                    name="email"
                    placeholder="email"
                    className="h-10 bg-slate-100 rounded shadow" />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
                <label htmlFor="phone">
                    Phone
                </label>
                <input type="tel"
                    name="phone"
                    placeholder="phone"
                    className="h-10 bg-slate-100 rounded shadow" />
            </div>

            {/* Subject */}
            <div className="flex flex-col">
                <label htmlFor="subject">
                    Subject
                </label>
                <input type="text"
                    name="subject"
                    placeholder="subject"
                    className="h-10 bg-slate-100 rounded shadow" />
            </div>

            {/* Message */}
            <div className="flex flex-col">
                <label htmlFor="message">
                    Message
                </label>
                <textarea name="message" 
                    rows="4" cols="50"
                    className="h-10 bg-slate-100 rounded shadow">
                </textarea>
            </div>

            {/* Submit btn */}
            <button type="submit"
                    className="h-10 bg-slate-100 rounded shadow"
                    >Send</button>

        </form>

  )
}


export default Form