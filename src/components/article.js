import React from 'react'
import { Link } from 'gatsby'
import styles from './article.module.scss'
import Img from 'gatsby-image'

export default (props) => (

   <Link to={props.to}>
      <article className={styles.articleBox} key={props.id}>
         <div className={styles.left}>
            <Img fluid={props.image} key={props.image.src}/>
         </div>
         <div className={styles.right}>
            <h3>
               {props.title}
            </h3>
            <div className={styles.date}>{props.date}
            </div>
            <div>
               <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
            </div>
         </div>
      </article>
   </Link>

)

