export function getExcursions() {
    return fetch(
        '/api/excursions').
        then(data => data.json())
}