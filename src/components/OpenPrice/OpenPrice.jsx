import { useState } from 'react'
import { apiSearchTools } from '../../api/tools'
import AddPositionPrice from '../AddPositionPrice/AddPositionPrice'
import SavePriceDetails from '../SavePriseDetails/SavePriceDetails'
import styles from './OpenPrice.module.scss'


const OpenPrice = () => {

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)

    const [inputs, setInputs] = useState({
        name: '',
        qty: 0,
        price: 0,
        id: null
    })

    const [suggestions, setSuggestions] = useState([]);
    const [newItem, setNewItem] = useState(false);

    const selectTool = (value) => {
        setInputs({ ...inputs, name: value });
        if (value.length > 2) {
            apiSearchTools(value).then((res) => {
                if (res.length > 0) {
                    setSuggestions(res);
                } else {
                    setNewItem(true);
                }
            })
        }
    }

    const addItem = () => {
        //setData()

        // TODO: 
    }
    
    return (
        <div>
            <AddPositionPrice 
                inputs={inputs} setInputs={setInputs} 
                suggestions={suggestions} setSuggestions={setSuggestions}
                newItem={newItem} setNewItem={setNewItem}
                selectTool={selectTool} 
                setOpen={setOpen} 
                open={open} 
            />
            <button className={styles.savePrice}>сохранить</button> 
        </div>
    )
}

export default OpenPrice