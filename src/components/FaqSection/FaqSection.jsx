import React from 'react'
import {faq} from '../faq_data/faq_data'
import FaqItem from '../FaqItem/FaqItem'

function FaqSection() {
  return (
    <>
      {faq.map((pair, index) => <FaqItem key={index} question={pair.question} answer={pair.answer}/>)}
    </>
  )
}

export default FaqSection
