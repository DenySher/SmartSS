import styles from './CreateToolsItem.module.scss'

const CreateToolsItem = () => {
    return (
        <div className={styles.PriceAdd}>
            <div className={styles.PriceSum}>
                <p>СУММА:</p>
                <span>__</span>
            </div>
            <div className={styles.PriceDetailsAdd}>
                <span>№№</span>
                <input className={styles.PriceAddName} placeholder="Наименование"/>
                <input className={styles.PriceAddUnit} placeholder="Ед.изм." />
                <input className={styles.PriceAddAmount} placeholder="Кол-во"/>
                <input className={styles.PriceAddUnit} placeholder="Цена за ед."/>
                <input className={styles.PriceUnitSum} placeholder="Всего"/>
                <button> + </button>
            </div>
            <button>СОХРАНИТЬ</button>
        </div>
    )
}
	


export default CreateToolsItem