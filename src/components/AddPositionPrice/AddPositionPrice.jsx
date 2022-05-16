import { useState } from 'react';
import { apiSearchTools } from '../../api/tools';
import styles from './AddPositionPrice.module.scss'


const AddPositionPrice = ({ inputs, setInputs, addItem }) => {

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

    return (
        <tr>
            <td></td>
            <td style={{ position: 'relative' }}>
                <input
                    placeholder="Наименование оборудования/материалов"
                    value={inputs.name}
                    onChange={(e) => selectTool(e.target.value)}
                />
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
            </td>
            <td>ед. изм.</td>
            <td>
                <input placeholder="Кол-во" value={inputs.qty} onChange={(e) => setInputs({ ...inputs, qty: e.target.value })} />
            </td>
            <td>
                <input placeholder="Цена за ед." value={inputs.price} onChange={(e) => setInputs({ ...inputs, price: e.target.value })} />
            </td>
            <td>
                <button> добавить</button>
            </td>
        </tr>
    )
}

export default AddPositionPrice