import { useState } from 'react'
import { apiSearchTools } from '../../api/tools'
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
            <div className={styles.addItem}>
                <input
                    placeholder="Наименование оборудования/материалов"
                    value={inputs.name}
                    onChange={(e) => selectTool(e.target.value)}
                />
                <input placeholder="Кол-во" value={inputs.qty} onChange={(e) => setInputs({ ...inputs, qty: e.target.value })} />
                <input placeholder="Цена за ед." value={inputs.price} onChange={(e) => setInputs({ ...inputs, price: e.target.value })} />
                <button className={styles.addMore} onClick={() => setOpen(true)}>+</button>
                {open ? 
                        (<SavePriceDetails />)
                        : null }
                {suggestions.length ? (
                    <div className={styles.suggestions}>
                        {suggestions.map((item, i) => (
                            <span className={styles.suggestion} key={i} onClick={() => { setInputs({ ...inputs, name: item.name, id: item.id }); setSuggestions([]) }}>{item.name}</span>
                        ))}
                    </div>
                ) : null}
                {newItem ? (
                    <div className={styles.suggestions}>
                        <span className={styles.suggestion} onClick={() => setNewItem(false)}>добавить: {inputs.name}</span>
                    </div>
                ) : null}
            </div>
            <button className={styles.savePrice}>сохранить</button> 
        </div>
    )
}

export default OpenPrice