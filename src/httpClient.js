const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGQ4Y2I2MWExZmNkZTJlNmEwYzRlMTEzNGMwMjNiMyIsInN1YiI6IjYyMWZmNzg0ZjcwNmRlMDA2ZDY5MTRjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.neWRxQOCiVcdhU9E_g0CoCHHkDkQGaRBl1nl2NYSIEI",
            "Content-Type": "application/json;charset=utf-8"
        },
    }).then(result => result.json())
}