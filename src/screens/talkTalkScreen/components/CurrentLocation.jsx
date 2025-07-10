import { CurrentBox } from "./CurrentBox";
import LOCATION from "../../../assets/images/talktalk/location.png";

export default function CurrentLocation() {
    const currentLocation = "성북구";
    
    return (
        <CurrentBox 
            icon = { LOCATION }
            iconStyle = {{
                width: 18,
                height: 20.33
            }}
            currentInfo = '현재 위치'
            currentState = { currentLocation }
        />
    )
}