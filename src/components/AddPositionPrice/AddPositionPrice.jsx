import styles from './AddPositionPrice.module.scss'
import SavePriceDetails from '../SavePriseDetails/SavePriceDetails'


const AddPositionPrice = ({ inputs, setInputs, suggestions, setSuggestions, newItem, setNewItem, selectTool, setOpen, open }) => {

    return (
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
    )
}

export default AddPositionPrice