import {useEffect, useState} from "react";
import axios from "axios";
import {RocketState} from "./RocketState";


function liftOf() {
    axios.get("http://localhost:3005/start-mission")
        .then((res) => {
            alert(res.data);
        })
}

export default function ControlPanel({rocket}) {
    const [rocketStatus, setRocketStatus] = useState(rocket.status);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get("http://localhost:3005/mission-status")
                .then((res) => {
                    setRocketStatus(res.data === "go" ? RocketState.READY : RocketState.NOT_READY);
                })
                .catch((error) => {
                    console.error("Error fetching mission status:", error);
                });
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="control-panel">
            <h2 className="control-panel_title">
                Control Panel
            </h2>
            <div className="control-panel_content">

                <div className="control-panel_content_rocket-status">
                    {rocketStatus}
                </div>
                <div onClick={() => liftOf()} className="control-panel_content_button">
                    LIFT OFF
                </div>
            </div>
        </div>
    )
}