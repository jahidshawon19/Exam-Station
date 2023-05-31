
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './layout/Main'; 
import Register from './components/Register/Register';


function App() {
    const router = createBrowserRouter([
      {
        path:'/register',
        element:<Register></Register>
      },
       {
            path:'/',
            element:<Main></Main>,
            children:[
              {
                path:'/',
                element:<Home></Home>
              },
             
            
            ],
       }

      
    ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
