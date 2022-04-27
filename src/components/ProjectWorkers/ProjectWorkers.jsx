import { useState } from 'react'
import { apiAddWorkerToProject } from '../../api/projects'
import { apiCreateWorker, apiSearchWorkers } from '../../api/workers'
import InputWithButton from '../InputWithButton/InputWithButton'

const ProjectWorkers = ({ id, workers }) => {

	const [input, setInput] = useState('')
	const [data, setData] = useState(workers)

	const [suggestions, setSuggestions] = useState({ selected: null, data: [] })

	const searchWorker = (value) => {
		setInput(value);
		if (value.length > 2) {
			apiSearchWorkers(value).then((res) => {
				console.log(res);
				setSuggestions({ ...suggestions, data: res })
			})
		}
	}

	const selectWorker = (selected) => {
		setSuggestions({ selected: selected.id, data: [] })
		setInput(selected.name)
	}

	const addWorker = () => {
		if (suggestions.selected) {
			apiAddWorkerToProject([...data, suggestions.selected], id).then((r) => {
				setData(r.workers);
				setInput('');
			})
		} else {
			if (input.length > 1) {
				apiCreateWorker(input).then((res) => {
					apiAddWorkerToProject([...data, res.id], id).then((r) => {
						setData(r.workers);
						setInput('');
					})
				})
			}
		}
	}

	return (
		<table>
			<thead>
				<tr>
					<td>№</td>
					<td>ФИО</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>

					</td>
					<td>
						<InputWithButton
							placeholder='ФИО рабочего'
							value={input}
							setValue={searchWorker}
							buttonText='Добавить'
							onClick={() => addWorker()}
							suggestions={suggestions.data}
							select={selectWorker}
						/>
					</td>
				</tr>
				{data.length && data.map((worker, idx) => (
					<tr key={idx}>
						<td>{idx + 1}</td>
						<td>{worker.name}</td>
					</tr>
				))}

			</tbody>
		</table>
	)
}

export default ProjectWorkers