export default function searchAPI(body) {
    return fetch("https://cors-anywhere.herokuapp.com/https://ris-app.herokuapp.com/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    })
    .then(response => response.json())
}