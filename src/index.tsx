import { createRoot } from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dateRangePicker",
        lazy: () => import('./DateRangePicker')
      },
      {
        path: "dateRangePickerV2",
        lazy: () => import('./DateRangePickerV2')
      }
    ],
  },
]);

createRoot(document.getElementById('app')).render(<RouterProvider router={router} />); 