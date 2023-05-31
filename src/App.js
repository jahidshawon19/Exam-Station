
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './layout/Main'; 
import Register from './components/Register/Register';
import Login from './components/Login/Login';


function App() {
    const router = createBrowserRouter([
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
            path:'/',
            element:<Main></Main>,
            children:[
              {
                path:'/',
                element:<Home></Home>
              },

    
            
            ]
       }

      
    ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
