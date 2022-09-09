import * as React from "react"
import { Link } from 'gatsby'

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
        <div className={'portfolio-container'}>
          <a href={'mailto:moffettcraftarts@yahoo.com'} rel={'noreferrer'} target={'_blank'}>Email</a>
          <a href={''} rel={'noreferrer'} target={'_blank'}>Instagram</a>
          <a href={''} rel={'noreferrer'} target={'_blank'}>Phone</a>
        </div>
      </main>
    </>
    
  )
}

export default ContactPage

export const Head = () => <title>Contact</title>
