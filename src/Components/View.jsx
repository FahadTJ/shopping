import React, { useEffect, useState } from 'react'

const View = () => {
    var[shopping,setshopping]=useState([])
    useEffect(()=>[
        axios.get("http://localhost:3002/posts")
        .then(Response=>{setShopping(shopping=Response.data)
        console.log(shopping)
    })
    ])
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <Tableflow>
                 <TableCell>Name</TableCell>
                 <TableCell>Brand</TableCell>
                 <TableCell>Quantity</TableCell>
                 <TableCell>Price</TableCell>
                </Tableflow>
            </TableHead>
            <TableBody>
                {shopping.map((value,index)=>{
                    return <Tableflow>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.brand}</TableCell>
                        <TableCell>{value.quantity}</TableCell>
                        <TableCell>{value.price}</TableCell>
                        <Button onClick={()=>deleteValue(value.id)}>delete</Button>
                    </Tableflow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
  
  )
}

export default View
