import React from 'react'
import UseReveal from '../../hooks/UseReveal'

const RevealComponent = ({children}) => {
   const[show,compRef]=  UseReveal()
  return (
    <div ref={compRef} className={`${show?'component_show':''}`}>
        {children}
    </div>
  )
}


export default RevealComponent