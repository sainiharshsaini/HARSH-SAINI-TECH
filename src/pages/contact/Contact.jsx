import './contact.scss'

import { useTheme } from '../../hooks/useTheme'

const Contact = () => {

    const [isdark] = useTheme()
    return (
        <div className={`contact ${isdark ? 'dark' : ''}`}>
            <div className="contact-heading">
                <h2>Let’s discuss about your digital project</h2>
                <p>I'm always excited to take on new challenges and work with like-minded individuals or organizations. Whether you have a clear vision or just an idea in the making, I would love to help bring it to life. <br /> Let's create something amazing together! Feel free to reach out to discuss your project or to simply say hello. <br /> we'll contact you as soon as possible to talk about your new digital endeavors. </p>
                <form>
                    <div className="form-group">
                        <label>Name*</label>
                        <input type="text" className='form-control' placeholder='Enter name...' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email*</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message*</label>
                        <textarea className="form-control textarea" id="exampleFormControlTextarea1" rows="10" placeholder='Your message...'></textarea>
                    </div>
                    <div className='form-btn'>
                        <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact