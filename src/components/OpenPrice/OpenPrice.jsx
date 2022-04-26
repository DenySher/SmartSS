import { useState } from 'react'
import AddPositionPrice from '../AddPositionPrice/AddPositionPrice'
import SavePriceDetails from '../SavePriseDetails/SavePriceDetails'
import styles from './OpenPrice.module.scss'


const OpenPrice = ({ open }) => {

    const [data, setData] = useState([])

    const [inputs, setInputs] = useState({
        name: '',
        qty: 0,
        price: 0,
        id: null
    })

    const addItem = () => {
        setData([...data, inputs])
        setInputs({
            name: '',
            qty: 0,
            price: 0,
            id: null
        })
    }

    if (!open) return null

    return (
        <div>
            <SavePriceDetails data={data} />
        </div>
    )
}

export default OpenPrice