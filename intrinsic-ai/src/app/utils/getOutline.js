async function fetchCourseOutline(url = "") {
    const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',  // Ensure cookies (and session) are sent with the request
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
    });

    const data = await response.json();
    return data;
}

export default fetchCourseOutline;