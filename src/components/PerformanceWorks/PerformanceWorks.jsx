import styles from './PerformanceWorks.module.scss'
import InputChange from '../InputChange/InputChange'

const PerformanceWorks = () => {
    return (
        <div>
            <div><span>ФИО монтажник</span></div>
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
                        <td><span></span></td>
                        <td colSpan={6} ><InputChange/>Добавить Раздел</td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td><span></span></td>
                        <td colSpan={6} ><InputChange/>АПС</td>
                    </tr>
                    <tr>
                        <td><span></span></td>
                        <td colSpan={6} ><InputChange/>Добавить подраздел</td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td><span></span></td>
                        <td colSpan={6} ><InputChange/>Оборудование</td>
                    </tr>
                    <tr>
                        <td><input></input></td>
                        <td><input placeholder='Добавить работы'></input></td>
                        <td><span></span></td>
                        <td><input placeholder='Ц. за 1'></input></td>
                        <td><input placeholder='кол-во'></input></td>
                        <td><span></span></td>
                        <td><input placeholder='локация'></input></td>
                        <td>
                            <button>+</button>
                        </td>
                    </tr>	
                    <tr>
                        <td><input></input></td>
                        <td><InputChange placeholder='Добавить работы'></InputChange></td>
                        <td><span></span></td>
                        <td><InputChange></InputChange></td>
                        <td><InputChange></InputChange></td>
                        <td><span></span></td>
                        <td><InputChange></InputChange></td>
                    </tr>
                </tbody>
            </table>
        </div>
		
    )
}

export default PerformanceWorks