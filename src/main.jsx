import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import HomePage from './pages/HomePage/HomePage.jsx'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage.jsx'
import CartPage from './pages/CartPage/CartPage.jsx'
import FavoritePage from './pages/FavoritePage/FavoritePage.jsx'
// redux
import { Provider } from 'react-redux'
import store from './store/store.js'

// MUI imports
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'



// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: "singleProduct/:id",
        element: <SingleProductPage/>
      },
      {
        path: 'cartPage',
        element: <CartPage />
      },
      {
        path: 'favorite',
        element: <FavoritePage />
      }
    ]
  }
])

const theme = createTheme()  // Default MUI theme

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </ClerkProvider>
  </StrictMode>
)
