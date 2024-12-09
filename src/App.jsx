import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import { About, loader as aboutloader} from './routes/About/About'
import { Reviews, loader as reviewsloader } from "./routes/Reviews/Reviews";


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
      }
    ]
  },

])
function App(){
  return <RouterProvider router={router} />
}

export default App