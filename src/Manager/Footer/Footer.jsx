import { Link } from '@mui/material'
import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <span className = {styles.footer}>
        Made with <div className = {styles.love}> ♥ </div> by  &nbsp;
        <Link 
        color="white" 
        href="https://www.linkedin.com/in/vikash-kumar03/" 
        underline="hover"
        target="_blank">Vikas Roy</Link>
    </span>
  )
}

export default Footer