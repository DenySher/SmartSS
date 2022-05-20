import styles from './PerformanceWorks.module.scss'

const PerformanceWorks = () => {
    return (
		<table>
			<thead>
				<tr>
                    <td>Дата</td>
                    <td>Состав работ</td>
                    <td>Ед. изм.</td>
                    <td>Цена за ед.</td>
                    <td>Кол-во</td>
                    <td>Цена за все</td>
                    <td>Локация</td>
                    <td className={styles.btns}>
                        <button>Добавить день</button>
                    </td>
				</tr>
			</thead>
			<tbody>
                <tr>
                    <td><input></input></td>
                    <td><input placeholder='Добавить работы'></input></td>
                    <td><span></span></td>
                    <td><input></input></td>
                    <td><input></input></td>
                    <td><span></span></td>
                    <td><input></input></td>
                    <td>
                        <button>+</button>
                    </td>
                </tr>	
			</tbody>
		</table>
    )
}

export default PerformanceWorks