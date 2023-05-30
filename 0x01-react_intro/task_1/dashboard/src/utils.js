

const getFullYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return "Holberton School"
    } else {
        return "Holberton School main dashboard"
    }
}

export {getFullYear, getFooterCopy}