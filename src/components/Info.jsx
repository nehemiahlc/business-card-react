import headshot from '../images/headshot.jpeg'
import linkedInIcon from '../images/linkedin.png'

export default function Info() {
    return (
        <header>
            <img className='headshot-pic' src={headshot}/>
            <h1>Nehemiah Chandler</h1>
            <p className="highlight">Frontend Developer</p>
            <div className="btn-container">
                <a 
                    href="https://www.linkedin.com/in/nehemiah-chandler-6b607a245" 
                    className='btn-linked-in'
                    target='_blank'
                >
                    
                    <img className='linkedin-icon'src={linkedInIcon}></img>Linked In
                
                </a>
            </div>
        </header>
    )
}