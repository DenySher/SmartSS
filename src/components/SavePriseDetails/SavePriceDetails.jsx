import styles from "./SavePriceDetails.module.scss"
import AddBuildingSection from '../AddBuildingSection/AddBuildingSection'

const SavePriceDetails = ({ data }) => {
    return (
        <>
        <table className={styles.tableContainer}>
            <thead className={styles.headerPrice}>
                <tr>
                    <td>№</td>
                    <td>Наименование</td>
                    <td>Ед. изм.</td>
                    <td>Кол-во</td>
                    <td>Цена за ед.</td>
                    <td>Всего</td>
                </tr>
            </thead>
            {/* <tbody className={styles.headerPrice}>
                <tr>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input /></td>
                </tr>
            </tbody> */}

            {/* {data.length ? (
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
            ) : null} */}
        </table>

        </>
    )
}

export default SavePriceDetails