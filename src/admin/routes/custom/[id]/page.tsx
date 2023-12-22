import { useParams } from "react-router-dom"

const CustomPage = () => {
  const { id } = useParams()

  return (
    <div>
      Passed ID: {id}
    </div>
  )
}

export default CustomPage