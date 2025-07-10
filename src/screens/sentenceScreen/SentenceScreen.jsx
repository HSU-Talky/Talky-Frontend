import { useState } from "react";
import { SentenceModal } from "./components/SentenceModal";

export const SentenceScreen = ({ visible, onClose }) => {
    const [sentences] = useState([
            "문장 1 문장 1 문장 1 문장 1 문장 1 문장 1 문장 1 문장 1",
            "문장 2 문장 2 문장 2 문장 2 문장 2 문장 2 문장 2 문장 2",
            "문장 3 문장 3 문장 3 문장 3 문장 3 문장 3 문장 3 문장 3",
            "문장 4 문장 4 문장 4 문장 4 문장 4 문장 4 문장 4 문장 4",
            "문장 5 문장 5 문장 5 문장 5 문장 5 문장 5 문장 5 문장 5",
            "문장 6 문장 6 문장 6 문장 6 문장 6 문장 6 문장 6 문장 6",
            "문장 7 문장 7 문장 7 문장 7 문장 7 문장 7 문장 7 문장 7",
            "문장 8 문장 8 문장 8 문장 8 문장 8 문장 8 문장 8 문장 8",
            "문장 9 문장 9 문장 9 문장 9 문장 9 문장 9 문장 9 문장 9",
            "문장 10 문장 10 문장 10 문장 10 문장 10 문장 10 문장 10"
        ]);

    return (
        <SentenceModal
            visible = { visible }
            onClose = { onClose }
            sentences = { sentences }
       />
    );
};
