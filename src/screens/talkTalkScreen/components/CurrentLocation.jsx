import { CurrentBox } from "./CurrentBox";
import LOCATION from "../../../assets/talktalk/location.png";

export default function CurrentLocation() {
    return (
        <CurrentBox 
            icon = { LOCATION }
            iconStyle = {{
                width: 18,
                height: 20.33
            }}
            currentInfo = '현재 위치'
            currentState = '성북구'
        />
    )
}