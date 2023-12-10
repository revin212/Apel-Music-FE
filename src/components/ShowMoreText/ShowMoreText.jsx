import { Button } from '@mui/material'
import React, { useState } from 'react'

export const ShowMoreText = ({ text }) => {
    const [hideText, setHideText] = useState(true)

  return (
    <div>
        {
            text.length > 100 ?
            <>
                <span>{hideText ? `${text.substring(0, 100)}....` : text }</span>
                <Button style={{marginLeft:'0px', color:'#5D5FEF', border:'none'}} onClick={()=>setHideText(prev=>!prev)} >
                    {hideText ? "Show more" : "Show less"}
                </Button>
            </> 
        :
            text
        }
    </div>
  )
}

