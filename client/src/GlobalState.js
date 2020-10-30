import React, {createContext, useState, useEffect} from 'react'
import {getData} from './components/utils/FetchData'
import io from 'socket.io-client'

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        getData('/api/products')
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err.response.data.msg))

        const socket = io()
        setSocket(socket)
        return () =>  socket.close()
    },[])

    const state = {
        products: [products, setProducts],
        socket
    }

    return(
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )
}