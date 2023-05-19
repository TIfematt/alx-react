

const getFullYear = () => {
    const d = new Date();
    let year = d.getFullYear;
    return year;
}

const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return "Holberton School"
    } else {
        return "Holberton School main dashboard"
    }
}

export {getFullYear, getFooterCopy}