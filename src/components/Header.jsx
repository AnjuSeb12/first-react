import React from 'react'
import './Header.css'


const date = new Date().toDateString()
const img='https://picsum.photos/200/300'


let greeting
let customStyle={color:''}
// const time = new Date().getHours()
const time=19


if(time<12)
{
  greeting="Morning"
  customStyle.color='green'
}
else
if(time<18)
{
  greeting="Evening"
  customStyle.color='yello'
}
else{
  greeting="Night"
  customStyle.color='blue'
}
const Header = () => {
  return (
    <div>
      <h1 className='head'>Today's date is :{date}</h1>
      <img src={img} alt=''></img>
      {/* inline style */}
      <h3 style={customStyle}>Good{greeting}</h3>
      
    </div>
  )
}

export default Header