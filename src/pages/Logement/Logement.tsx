import React from 'react'
import './Logement.scss'
import Data from './LogementData'
import {MOCK_PROJECTS} from '../../Data/MockData'



const Logement = () => {
  return (
    <>
      <Data data={MOCK_PROJECTS} />
    </>
  )
}

export default Logement