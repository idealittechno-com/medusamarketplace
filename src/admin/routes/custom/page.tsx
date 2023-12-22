import { RouteConfig } from "@medusajs/admin"
// import { CustomIcon } from "../../icons/custom"
import { Link } from "react-router-dom"
import { useAdminProducts } from "medusa-react"

const CustomPage = () => {
    const { products } = useAdminProducts()
  return (
    <div  className="bg-white p-8 border border-gray-200 rounded-lg">
      This is my custom route
      <Link to={"/a/products"}>
      View Products
    </Link>

    <div className="bg-white">
      {products?.map((product) => product.title+"<br />")}
    </div>
    </div>
  )
}

export const config: RouteConfig = {
  link: {
    label: "Custom Route",
    // icon: CustomIcon,
  },
}

export default CustomPage