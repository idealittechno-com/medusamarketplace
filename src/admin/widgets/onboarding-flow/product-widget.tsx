import type { WidgetConfig } from "@medusajs/admin"
import { Link } from "react-router-dom"

const ProductWidget = () => {
    
  return (
    <div
      className="bg-white p-8 border border-gray-200 rounded-lg">
      <h1>Product Widget</h1>
      <button 
        className="bg-black rounded p-1 text-white"
      >
         <Link to={"/a/orders"}>
        View Orders
      </Link>
      </button>
    
    </div>
  )
}

export const config: WidgetConfig = {
  zone: "product.list.after",
}

export default ProductWidget