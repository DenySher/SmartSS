import styles from "./SavePriceDetails.module.scss"

const SavePriceDetails = () => {
    return (
        <table className={styles.tableContainer}>
            <thead className={styles.headerPrice}>
                <tr>
                    <td>№№</td> 
                    <td>Наименование</td>
                    <td>Ед. изм.</td> 
                    <td>Кол-во</td>
                    <td>Цена за ед.</td>
                    <td>Всего</td>
                </tr>
            </thead>
            <tbody className={styles.savePosition}>
                <tr>
                    <td>{ }</td>
                    <td>{ }</td>
                    <td>{ }</td> 
                    <td>{ }</td>
                    <td>{ }</td>
                    <td>{ }</td>
                </tr>
            </tbody>
        </table>
    )
}

export default SavePriceDetails