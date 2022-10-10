import * as React from "react"
import { Link } from 'gatsby'
import "normalize.css"
import '../styles/index.scss'
import '../styles/portfolio.scss'
import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
import { portfolioItems } from '../constants/portfolioItems';

import Card from '../components/card'

const IndexPage = () => {
  return (
      <main >
        <div className={'desktop-nav'}>
          <Link to={'/'} className={'nav-item'}>Moffett Craft</Link>
          <Link to={'/contact'} className={'nav-item'}>Contact</Link>
          <a className={'nav-item'} href={'https://lauramoff.blogspot.com'} rel={'noreferrer'} target={'_blank'}>Blog</a>
        </div>
        <div className={'portfolio-container'}>
          {portfolioItems.map((item, index) => {
            return <Card key={index} type={item.type} image={item.image} alt={'test alt'} text={item.description}/>
          })}
        </div>
      </main> 
  )
}

export default IndexPage

export const Head = () => <title>MoffettCraftArts</title>
