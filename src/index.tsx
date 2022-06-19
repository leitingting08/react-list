import { createRoot } from 'react-dom/client'
import App from './App'
import 'src/styles/index.css'
import 'src/styles/global.less'

const root = document.getElementById('root')
createRoot(root!).render(<App />)
