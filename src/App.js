import ControlPanel from "./ControlPanel";
import {Rocket} from "./Rocket";
import './styles/App.css'

function App() {
    const rocket = new Rocket();



    return (
        <div className="app">
            <h1 className="main_title">
                Marsy Project
            </h1>
            <ControlPanel rocket={rocket}/>
        </div>
    );
}


export default App;
