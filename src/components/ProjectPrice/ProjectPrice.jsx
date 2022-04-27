import SavePriceDetails from '../SavePriseDetails/SavePriceDetails'

const ProjectPrice = ({ sections, projectID, updateData }) => {


    // const [inputs, setInputs] = useState({
    //     name: '',
    //     qty: 0,
    //     price: 0,
    //     id: null
    // })

    // const addItem = () => {
    //     setData([...data, inputs])
    //     setInputs({
    //         name: '',
    //         qty: 0,
    //         price: 0,
    //         id: null
    //     })
    // }

    return (
        <div>
            <SavePriceDetails sections={sections} projectID={projectID} updateData={updateData} />
        </div>
    )
}

export default ProjectPrice