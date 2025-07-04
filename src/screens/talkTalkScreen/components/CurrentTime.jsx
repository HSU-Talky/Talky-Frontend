import { CurrentBox } from "./CurrentBox";
import TIME from "../../../assets/talktalk/time.png";
import { useEffect, useState } from "react";

export default function CurrentTime() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const paddedMinutes = minute.toString().padStart(2, '0');

            setCurrentTime(`${ hour }:${ paddedMinutes }`);
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <CurrentBox
            icon = { TIME }
            iconStyle = {{
                width: 21.49,
                height: 21.49
            }}
            currentInfo = '현재 시간'
            currentState = { currentTime }
        />
    )
}