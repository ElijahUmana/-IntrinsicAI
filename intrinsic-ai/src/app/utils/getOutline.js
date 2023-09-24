async function getOutline(url = "") {
    const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',  // Ensure cookies (and session) are sent with the request
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
    }).catch(error => {
        console.log("There was a problem with the fetch operation:", error.message);
    });;

    const data = await response.json();
    return data;
}

export default getOutline;