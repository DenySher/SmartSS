import styles from "./SavePriceDetails.module.scss"

const SavePriceDetails = () => {
    return (
        <div>
            <div className={styles.headerPrice}>
                <span>№</span>
                <span>Наименование</span>
                <span>Ед.изм.</span>
                <span>Кол-во</span>
                <span>Цена за ед.</span>
                <span>Кол-во</span>
                <span>Цена за ед.</span>
                <span>Всего</span>
            </div>
            <div className={styles.savePosition}>
                <span>{}</span>
                <span>{}</span>
                <span>{}</span>
                <span>{}</span>
                <span>{}</span>
                <span>{}</span>
                <span>{}</span>
                <span>{}</span>
            </div>
        </div>
    )
}

export default SavePriceDetails