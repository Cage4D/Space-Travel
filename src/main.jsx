import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "../styles/modern-normalize.css"
import "../styles/style.css"
import "../styles/utils.css"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App/>
    </StrictMode>
)