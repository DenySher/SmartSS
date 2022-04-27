const SectionTool = ({ num, tool }) => {
	return (
		<tr>
			<td>{num}</td>
			<td>{tool.tool.name}</td>
			<td>шт.</td>
			<td>{tool.qty}</td>
			<td>{tool.price}</td>
			<td>{tool.price * tool.qty}</td>
		</tr>
	)
}

export default SectionTool