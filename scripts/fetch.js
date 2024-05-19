const movies = document.getElementById("movieList");
const card = document.getElementsByClassName("card");
const buttons = document.querySelectorAll("[data-carousel-button]");
const imgBaseUrl = "http://image.tmdb.org/t/p/w500/";
fetch(
  "https://api.themoviedb.org/3/list/8251432?api_key=ef7de422f662c6cb81664c503441dcff&language=tr-Tr"
)
  .then((res) => res.json())
  .then((data) =>
    data.items.map((x) =>
      movies.insertAdjacentHTML(
        "beforeend",
        ` <div class="card">
      <div class="cardImg"><img src="${
        imgBaseUrl + x.poster_path
      }" alt="" /></div>
     
    </div>`
      )
    )
  );

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonType = button.dataset.carouselButton === "next" ? 1 : 0;

    if (buttonType) {
      movies.scrollLeft += card[0].offsetWidth + 48;
    } else {
      movies.scrollLeft -= card[0].clientWidth + 48;
    }
  });
});
