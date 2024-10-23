import "./App.css";
import Series from "./components/Series";

function App() {
  return (
    <div>
      <div className="Headding">
        <h1>IMDB Top Rated Web series</h1>
      </div>
      <hr></hr>
      <Series
        seriesPoster="https://mir-s3-cdn-cf.behance.net/project_modules/1400/62071096474123.5eaf65302480b.png"
        name="Braking Bad"
        director="Creater: Vince Gilligan"
        timeline="Timeline: 2008-13"
        rating="IMDB Rating: 9.5"
        about="  Follows the personal and professional lives of six twenty to thirty
            year-old friends living in the Manhattan borough of New York City.
          "
        episodes="Episodes: 62"
        seasons="Seasons: 5"
        season1="https://image.tmdb.org/t/p/original/dwuLNYvZR0n22tHx5a14mhq4ysn.jpg"
        season2="https://www.justwatch.com/images/poster/8594406/s718/season-2.jpg"
        season3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnGFU0l4GMpfjApA-bnyD_-MQduQMkwfQLw&s"
        season4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatbwGilV6OWgKMy_DOUybu1JuylFhCQ6jKg&s"
        season5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAdjr7kBYW6DaDKF_sFYyCgOyUkGJEnxtlA&s"
      ></Series>
      <Series
        seriesPoster="https://m.media-amazon.com/images/M/MV5BOGY3NTg1ODMtOGIzZS00YWFiLTgzYzktNzBiYWZkYjcwNGRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        name="Game of Thrones"
        director="Creater: 
David BenioffD.B. Weiss"
        timeline="Timeline: 2011-19"
        rating="IMDB Rating: 9.2"
        about="Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
        episodes="Episodes: 74"
        seasons="Seasons: 8"
        season1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsGkagxY-WHfI6aetB4fwD33gIo3UPDOT5A&s"
        season2="https://www.westeros.org/Graphics/Gallery/GameOfThrones_S2_KeyArt.jpg"
        season3="https://static.wikia.nocookie.net/gameofthrones/images/d/df/Game_of_Thrones-_Season_3.jpg"
        season4="https://upload.wikimedia.org/wikipedia/en/8/80/Game_of_Thrones_Season_4.jpg"
        season5="https://i.pinimg.com/originals/ca/ca/09/caca09c06710d95e1db80bec5cd635aa.jpg"
        season6="https://upload.wikimedia.org/wikipedia/en/d/d1/Game_of_Thrones_Season_6.jpeg"
        season7="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNnCds1Xa-DondTulKfFJRyhXOVFHfBdkr5g&s"
        season8="https://i.redd.it/tdus5oehtth01.jpg"
      ></Series>
    </div>
  );
}

export default App;
