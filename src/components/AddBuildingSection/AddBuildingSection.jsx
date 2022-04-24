import styles from './AddBuildingSection.module.scss'

const AddBuildingSection = () => {
    return (
        <div className={styles.containerAddSection}>
            <input placeholder='Добавить строительный раздел'></input>
            <button>+</button>
        </div>
    )
}

export default AddBuildingSection