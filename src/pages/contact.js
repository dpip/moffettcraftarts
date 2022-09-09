import * as React from "react"
import { Link } from 'gatsby'
import '../styles/contact.scss'
import profile from '../images/lm-profile.jpeg'

const ContactPage = () => {
  return (
    <>
      {/* <Header /> */}
      <main >
        <div className={'desktop-nav'}>
          <Link to={'/'} className={'nav-item'}>Moffett Craft</Link>
          <Link to={'/contact'} className={'nav-item'}>Contact</Link>
          <a className={'nav-item'} href={'https://lauramoff.blogspot.com'} rel={'noreferrer'} target={'_blank'}>Blog</a>
        </div>
        <div className={'portfolio-container container-contact'}>
            <img className={'contact-photo'} src={profile} alt={'image of laura myers with her bird audie'}/>
            <div className={'contact-info-container'}>
                <h2>Laura Moffett Myers</h2>
                <h6>~ Artist and Owner of Moffett Craft Arts</h6>
                {/* <div className={'contact-info-item'} style={{marginBottom: '0.5rem'}}>For enquiries, please contact:</div> */}
                <div className={'contact-info-item'}>
                    <span><b>Email</b></span>
                    <a href={'mailto:moffettcraftarts@yahoo.com'} rel={'noreferrer'} target={'_blank'}>moffettcraftarts@yahoo.com</a>
                </div>
                <div className={'contact-info-item'}>
                    <span><b>Instagram</b></span>
                    <a href={''} rel={'noreferrer'} target={'_blank'}>@moffettcraftarts</a>
                </div>
                {/* <div className={'contact-info-item'}>
                    <a href={''} rel={'noreferrer'} target={'_blank'}>Phone</a>
                </div> */}
            </div>
        </div>
      </main>
    </>
    
  )
}

export default ContactPage

export const Head = () => <title>Contact</title>
