import styles from "./SavePriceDetails.module.scss"

const SavePriceDetails = ({ data }) => {
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
            {data.length ? (
                <tbody className={styles.savePosition}>
                    {data.map((item, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{item.name}</td>
                            <td>шт.</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                            <td>{item.price * item.qty}</td>
                        </tr>
                    ))}
                </tbody>
            ) : null}
        </table>
    )
}

export default SavePriceDetails