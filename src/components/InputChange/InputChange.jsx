import { useState } from "react"

const InputChange = () => {

    const [value, setValue] = useState('введите текст')
    const [edit, setEdit] = useState(false)


    return (
        <div>
            {!edit && value ? (
                <span onDoubleClick={() => setEdit(!edit)}>{value}</span>
            ) : (
                <input
                    type='text'
                    value={value}
                    placeholder='введите текст'
                    onChange={e => setValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.code === 'Enter') {
                            setEdit(!edit)
                        }
                    }
                    }
                />
            )}

            {edit && <buton onClick={() => setEdit(!edit)}>Сохранить</buton>}
        </div>
    )
}

export default InputChange