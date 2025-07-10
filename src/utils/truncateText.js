export const truncateText = (text, max = 20) => {
    if (typeof text !== "string") return "";
    return text.length > max ? text.slice(0, max) + "..." : text;
};