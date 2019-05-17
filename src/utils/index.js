export default function searchAPI(body, action='search') {
    return fetch(`https://cors-anywhere.herokuapp.com/https://ris-app.herokuapp.com/${action}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}