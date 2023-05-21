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

const getLatestNotification = () => {
    return (
       `<strong>Urgent requirement</strong> - complete by EOD` 
    )
}

export {getFullYear, getFooterCopy, getLatestNotification}