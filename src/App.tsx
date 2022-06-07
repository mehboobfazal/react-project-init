import "./App.css";
import ApplicationRoutes from "./routes";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "./redux/store";

function App() {
    return (
        <PersistGate persistor={persistedStore}>
            <ApplicationRoutes />
        </PersistGate>
    );
}

export default App;
