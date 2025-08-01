import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
  import { ClerkProvider } from '@clerk/clerk-react'

//router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import HomePage from './pages/HomePage.jsx'

//redux
import { Provider } from 'react-redux'
import store from './store/store.js'


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
  errorElement: <div>Error Page</div>,
  children: [
    {
      path: '/',
      element: <HomePage/>
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
       <RouterProvider router={router}/>
    </Provider>
    </ClerkProvider>
    
   
  </StrictMode>,
)
