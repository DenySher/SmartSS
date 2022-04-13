import Button from "../Button/Button"

const CreateSection = () => {

	const [data, setData] = useState(null)

	return (
		<div className={styles.addBildSection}>
            <input placeholder='Добавить строительный раздел' />
            <Button text='Сохранить' />
        </div>
	)
}

export default CreateSection