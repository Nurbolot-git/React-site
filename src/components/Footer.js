import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="socialMedia">
                    <Link to={'instagram.com'}>
                        <InstagramIcon />
                    </Link>
                    <WhatsAppIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
                <p>&copy; 2021  pizza.kg</p>
            </div>
        </div>
    )
}
export default Footer;