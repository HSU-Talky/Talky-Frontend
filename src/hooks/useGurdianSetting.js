import { useState } from "react"

export const useGuardianSetting = (openDialog, handleRealDelete) => {
    const [plus, setPlus] = useState([{ isRegistered: false }]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const handleAddComponent = () => {
        if (plus.length >= 5) return;
        setPlus((prev) => [...prev, { isRegistered: false }]);
    };

    const handleRegister = (index) => {
        const updated = [...plus];

        if (!updated[index].isRegistered) {
            updated[index].isRegistered = true;
            setPlus(updated);           
            setShowToast(true);
        } else {
            setSelectedIndex(index);
            openDialog();
        }
    };

    const handleDeleteConfirm = () => {
        if (selectedIndex === null || plus.length <= 1) return;
        const updated = [...plus];
        updated.splice(selectedIndex, 1);
        setPlus(updated);
        setSelectedIndex(null);
        handleRealDelete();       
    };

    const dynamicHeight = 216 + (plus.length - 1) * 30;

    return {
        plus,
        setPlus,
        selectedIndex,
        setSelectedIndex,
        showToast,
        setShowToast,
        handleAddComponent,
        handleRegister,
        handleDeleteConfirm,
        dynamicHeight,
    };
}