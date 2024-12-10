import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import { About, loader as aboutloader} from './routes/About/About'
import { Reviews, loader as reviewsloader } from "./routes/Reviews/Reviews";
import { Market, loader as marketloader } from "./routes/Market/Market";
import { ProductDetail, loader as productloader } from "./routes/ProductDetail/ProductDetail";


let router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'About',
        element: <About />,
        loader: aboutloader
      },
      {
        path: 'Reviews',
        element: <Reviews />,
        loader: reviewsloader
      },
      {
        path: 'Market',
        element: <Market />,
        loader: marketloader,
      },
      {
        path: 'product/:id',
        element: <ProductDetail />,
        loader: productloader
      }
    ]
  },

])
function App(){
  return <RouterProvider router={router} />
}

export default App