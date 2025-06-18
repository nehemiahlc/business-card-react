import facebookIcon from '../images/FacebookIcon.png'
import githubIcon from '../images/GitHubIcon.png'
import instagramIcon from '../images/InstagramIcon.png'


export default function Footer() {
    return (
        <footer>
            <a href="https://www.facebook.com/nehemiah.chandler.5/"><img src={facebookIcon}/></a>
            <a href="https://github.com/nehemiahlc"><img src={githubIcon}/></a>
            <a href="https://www.instagram.com/nehemiahlc/"><img src={instagramIcon}/></a>
        </footer>
    )
}
