import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import "normalize.css"
import '../styles/index.scss'
import '../styles/portfolio.scss'
import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
import { portfolioItems } from '../constants/portfolioItems';

// import Header from '../components/header'
import Card from '../components/card'

const IndexPage = () => {
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
          {portfolioItems.map((item, index) => {
            return <Card key={index} type={item.type} image={item.image} alt={'test alt'} text={item.description}/>
          })}
          {/* <Card type={'portfolio-item'} image={require("../images/coraldish.png").default} alt={'test alt'} text={'Lorem ipsum dolor sit amet. Qui veniam placeat et minus eaque et optio vero qui culpa facilis ad consequuntur recusandae non repellendus temporibus non repellat perferendis.'}/> */}
          {/* <Card type={'portfolio-item'} image={"https://images.unsplash.com/photo-1603273842663-26143ac713cc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=300"} alt={'test alt'} text={'test'}/>
          <Card type={'portfolio-item'} image={"https://images.unsplash.com/photo-1603273842663-26143ac713cc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=300"} alt={'test alt'} text={'test'}/>
          <Card type={'portfolio-item'} image={"https://images.unsplash.com/photo-1603273842663-26143ac713cc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=300"} alt={'test alt'} text={'test'}/>
          <Card type={'portfolio-item'} image={"https://images.unsplash.com/photo-1603273842663-26143ac713cc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=300"} alt={'test alt'} text={'test'}/>
          <Card type={'portfolio-item'} image={"https://images.unsplash.com/photo-1603273842663-26143ac713cc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=300"} alt={'test alt'} text={'test'}/> */}
        </div>
      </main>
    </>
    
  )
}

export default IndexPage

export const Head = () => <title>MoffettCraftArts</title>
