function setLocalStorage(key, data) {
    console.log(key,data)
    localStorage.setItem(key,JSON.stringify(data))
}

function getLocalStorage(key, defaultValue) {
    let data = localStorage.getItem(key);

    if (data) return JSON.parse(data);

    return defaultValue;
}



export { getLocalStorage, setLocalStorage }