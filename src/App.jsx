import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import { About, loader as aboutloader} from './routes/About/About'
import { Feedbacks, loader as feedbacksloader } from "./routes/Feedbacks/Feedbacks";


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
        path: 'Feedbacks',
        element: <Feedbacks />,
        loader: feedbacksloader
      }
    ]
  },

])
function App(){
  return <RouterProvider router={router} />
}

export default App