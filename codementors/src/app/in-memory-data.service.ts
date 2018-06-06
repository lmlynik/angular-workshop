import { InMemoryDbService } from "angular-in-memory-web-api";
import { Cat } from "./cat";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cats: Cat[] = [
      {
        id: "1",
        name: "Kicek",
        img:
          "https://pbs.twimg.com/profile_images/630664501776527361/nIK2xTUE_400x400.jpg",
        foods: []
      },
      {
        id: "2",
        name: "Ozzy",
        img: "http://i0.kym-cdn.com/photos/images/original/000/460/633/a41.png",
        foods: []
      },
      {
        id: "3",
        name: "Ciapek",
        img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1515433106i/24859156.png",
        foods: []
      }
    ];

    return { cats };
  }
}
