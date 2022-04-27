import styles from "./SavePriceDetails.module.scss"
import AddBuildingSection from '../AddBuildingSection/AddBuildingSection'
import Section from '../Section/Section'

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
            <Section />
        </table>
        <button>SAVE</button>
        </>
    )
}

export default SavePriceDetails