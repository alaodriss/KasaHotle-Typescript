import React from 'react'
import './Logement.scss'
import LogementData from './LogementData'
import {MOCK_PROJECTS} from '../../Data/MockData'



const Logement = () => {
  return (
    <>
      <LogementData data={MOCK_PROJECTS} />
    </>
  )
}

export default Logement