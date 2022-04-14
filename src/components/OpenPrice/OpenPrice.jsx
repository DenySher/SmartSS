import SavePriceDetails from '../SavePriseDetails/SavePriceDetails'
import styles from './OpenPrice.module.scss'

const OpenPrice = () => {
    return (
        <div className={styles.PriceAdd}>
            <div className={styles.PriceDetailsAdd}>
                <div className={styles.PriceDetailsName}>
                    <input className={styles.PriceAddName} placeholder="Наименование оборудования/материалов"/>
                </div>
                <div className={styles.PriceDetailsNum}>                
                    <p><input placeholder="Кол-во"/></p>
                    <p><input placeholder="Цена за ед."/></p>
                </div>
                <button className={styles.PriceAddPosition}> + </button>
            </div>
            <SavePriceDetails />
            <button>СОХРАНИТЬ</button>
        </div>
    )
}
	
export default OpenPrice