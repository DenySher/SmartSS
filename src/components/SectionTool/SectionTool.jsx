import ButtonAction from '../Common/ButtonAction/ButtonAction'

const SectionTool = ({ num, tool, deleteTool }) => {
	return (
		<tr>
			<td>{num}</td>
			<td>
				<div>
					{tool.tool.name}
					<ButtonAction icon='pencil' onClick={() => alert('удалить?')} />
					<ButtonAction icon='trash' onClick={() => deleteTool(tool.id)} />
				</div>
			</td>
			<td>шт.</td>
			<td>{tool.qty}</td>
			<td>{tool.price}</td>
			<td>{tool.price * tool.qty}</td>
		</tr>
	)
}

export default SectionTool