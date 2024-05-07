
// async function getData() {
//     const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '1883110a00msh3220c7c04cddc25p1c2be4jsn5e9e91f5fea8',
//             'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//         }
//     };



//     try {
//         const response = await fetch(url, options);
//         const result = await response.json(); // Parse response as JSON
//         localStorage.setItem("movies", JSON.stringify(result)); // Store JSON object as string
//     } catch (error) {
//         console.error(error);
//     }
// }

// window.addEventListener("DOMContentLoaded", getData());


showdata = () => {
    console.log('showdata');
    let films = JSON.parse(localStorage.getItem("films")); 

    console.log(typeof(films));
    console.log(films);


    for (let i = 0; i < films.length; i++) {
        let div = document.createElement("div");

        div.className = "movie1";
        // div.setAttribute("id", i)

        // div.addEventListener("click", () => {
        //     window.location.href = "nextpage.html";
        //     localStorage.setItem("movie", JSON.stringify(data[i]));
        // });

        let html = `<img src="${films[i].image}" alt="films image" class="image">
                    <h4>${films[i].rating}</h4>
                    <h4>${films[i].title}</h4>
                    <button id="watch">watch</button>
                    <button id="trailer">trailer</button>`;

        div.innerHTML += html;

        document.querySelectorAll(".main")[0].appendChild(div);

        console.log(films[i]);
    }
}

window.addEventListener("DOMContentLoaded", showdata());


