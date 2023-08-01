import React from 'react'
import Collapsible from 'react-collapsible';
import './FaqItem.scss'

function FaqItem(props) {
  console.log(<plus/>);
  const plus = <div className='collapsible_item'>{props.question}<span>+</span></div>
  const minus = <div className='collapsible_item'>{props.question}<span>-</span></div>
  return (
    <>
      <Collapsible trigger={plus}  triggerWhenOpen={minus}>
      <p>{props.answer}</p>
      </Collapsible>
    </>
  )
}



export default FaqItem
