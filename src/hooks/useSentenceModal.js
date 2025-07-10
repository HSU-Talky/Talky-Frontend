import { useState } from "react";

export const useSentenceModal = (sentences) => {
    const [deleted, setDeleted] = useState([]); // 삭제 문장 인덱스 저장
    const [dialogVisible, setDialogVisible] = useState(false);
    const [targetIndex, setTargetIndex] = useState(null);
    const [pendingDeleteIndex, setPendingDeleteIndex] = useState(null);
    const [targetSentence, setTargetSentence] = useState("");

    const openDialog = (index) => {
        setPendingDeleteIndex(index);
        setTargetIndex(index);
        setTargetSentence(sentences[index]);
        setDialogVisible(true);
    }

    const handleRealDelete = () => { // 문장 삭제
        if (targetIndex !== null && !deleted.includes(targetIndex)) {
            setDeleted([...deleted, targetIndex]);
        } 

        setDialogVisible(false);
        setTargetIndex(null);
    }

    const handleCancel = () => { // 문장 삭제가 아닌 취소
        setDialogVisible(false);
        setTargetIndex(null);
        setPendingDeleteIndex(null);
    }

    return {
        deleted,
        dialogVisible,
        targetIndex,
        pendingDeleteIndex,
        targetSentence,
        openDialog,
        handleRealDelete,
        handleCancel,
    };
};
