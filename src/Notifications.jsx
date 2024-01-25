import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import "./notifications.scss"



const Notifications = ({ unreaded, setUnreaded, setCount }) => {

    const [bcgWhite, setBcgWhite] = useState([])

    const handleReaded = (id) => { 
        // const newArr = unreaded.filter(item=>item.id !== id)
        // console.log(newArr);
        // setUnreaded(newArr)
        
        setBcgWhite(prev => [...prev,id])
        console.log(bcgWhite);
        setCount(prev =>prev <= 0 ? 0 :prev - 1)
     }
    // const ids =[];
    // unreaded.map(item=>ids.push(item.id))
    // console.log(ids);

    useEffect(() => {
      
    }, [bcgWhite])
    
    

  return (
    <>
      {
        unreaded.map((item)=>(
            <Card 
                key={item.id} 
                className={`card ${bcgWhite.includes(item.id) ? 'selected' : ''}`} 
                onClick={()=>handleReaded(item.id)}
                
                >
                <img src={`img/avatar-${item.avatar}.webp`} alt={item.name}/>
                <div>
                <Card.Body className='d-flex align-items-center '>
                    <p><span className='name'>{item.name} </span> {item.notif} <span className='post'>{item.post}</span></p>
                    <span className={`circle ${bcgWhite.includes(item.id) ? 'd-none' : ''}`}></span>
                    {
                  item.image?(
                    <div>
                      <img className='shared-img' src={`img/${item.image}`} alt='chess'/>
                    </div>
                  ):("")
                }
                </Card.Body>
                <p className='m-0'>{item.time}</p>
                {
                    item.message?(
                        <div className='message'>
                    {item?.message}
                </div>
                    ):("")
                }       
                </div>
            </Card>
        ))
      }
    </>
  )
}

export default Notifications
