import React from 'react'
import Fcard from './Fcard'

const Itemss = () => {
    const data=[
        {
            id:1,
            imagee:'1',
            heading:"Salary Tools",
            info:"See how your salary compares to others with the same job title in your area. Not only you can compare your salary, but you can also see what skills you are missing to earn more money"

        },
            {
                id:2,
                imagee:'2',
                heading:"Quick Apply",
                info:"Easily apply to multiple jobs with one click! Quick apply shows you recommended jobs based on your most recent search and allows you to apply 25+ jobs in a matter of seconds"
    
            },
                {
                    id:3,
                    imagee:'3',
                    heading:"Job Alert",
                    info:"Keep track of positions that you're interested in by signing up for job alert emails. You'll be notified via email when new jobs are posted in that search"
        
                }
    ]
  return (
    <div className='animate__animated animate__fadeInDown md:grid md:grid-cols-3 md:gap-x-4'>
        {data.map((dataa) => {
            return(
            <Fcard key={dataa.id} data1={dataa}/>
)
            
        } )}
            
            </div>
  )
}

 

export default Itemss