import { useState } from "react"

const InputChange = () => {

    const [value, setValue] = useState('')
    const [edit, setEdit] = useState(false)
    

    return (
        <div>
            {!edit ?  (
                <span onDoubleClick={() => setEdit(!edit)}>{value}</span>
            ) : (

                <input 
                type='text'
                value={value} 
                onChange={e => setValue(e.target.value)}
                onKeyPress={(e) =>  {
                    if (e.code === 'Enter') {
                        setEdit(!edit)}
                      }  
                }
                />
            )}
            
            <buton onClick={() => setEdit(!edit)} >
                {edit ? 'Сохранить' : 'Изменить'}
            </buton> 
        </div>
    )
}

export default InputChange