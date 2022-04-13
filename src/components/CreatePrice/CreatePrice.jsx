import styles from './CreatePrice.module.scss'
import Button from '../Button/Button'
import CreateToolsItem from '../CreateToolsItem/CreateToolsItem'

const CreatePrice = () => {
    return (
        <>
        <div className={styles.addBildSection}>
            <input placeholder='Добавить строительный раздел' />
            <Button text='Сохранить' />
        </div>

        <CreateToolsItem />

        <CreateToolsItem />

        </>
    )
}

export default CreatePrice