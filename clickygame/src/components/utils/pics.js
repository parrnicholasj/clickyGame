//store array of images

var pics = ["https://cdna.artstation.com/p/assets/images/images/011/624/238/large/miguel-iglesias-emperor-portrait-color-artstation.jpg?1530548498",
 "https://cdna.artstation.com/p/assets/images/images/011/624/242/large/miguel-iglesias-lioneljhonson-withbear-colored-portrait-x.jpg?1530547532",
  "https://cdnb.artstation.com/p/assets/images/images/011/624/249/large/miguel-iglesias-fulgrim-portrait-color-artstation.jpg?1530547560",
"https://cdna.artstation.com/p/assets/images/images/011/624/256/large/miguel-iglesias-pertubado-portrait-artstation.jpg?1530547589",
"https://cdnb.artstation.com/p/assets/images/images/011/624/269/large/miguel-iglesias-jaghataikhan-portrait-color-artstation.jpg?1530547631",
"https://cdnb.artstation.com/p/assets/images/images/011/624/273/large/miguel-iglesias-lemanruss-portrait-colored-artstation.jpg?1530547674",
"https://cdnb.artstation.com/p/assets/images/images/011/624/285/large/miguel-iglesias-rogaldorn2-portrait-colored-artstation.jpg?1530547720",
"https://cdnb.artstation.com/p/assets/images/images/011/624/289/large/miguel-iglesias-konradcurze-portrait-color-artstation.jpg?1530547767",
"https://cdnb.artstation.com/p/assets/images/images/011/624/305/large/miguel-iglesias-sanguinius3-portrait-color-artsation.jpg?1530547879",
"https://cdna.artstation.com/p/assets/images/images/011/624/314/large/miguel-iglesias-ferrusmanus-silvereye-portrait-color-artstation.jpg?1530547931",
"https://cdna.artstation.com/p/assets/images/images/011/624/318/large/miguel-iglesias-angron-portrait-colored-arstation.jpg?1530547960",
"https://cdna.artstation.com/p/assets/images/images/011/624/322/large/miguel-iglesias-guilliman-portrait-color-artstation.jpg?1530548010",
"https://cdna.artstation.com/p/assets/images/images/011/624/328/large/miguel-iglesias-mortarion-portrait-color-artstation.jpg?1530548040",
"https://cdnb.artstation.com/p/assets/images/images/011/624/343/large/miguel-iglesias-magnusthered-portrait-color-artstation.jpg?1530548088",
"https://cdnb.artstation.com/p/assets/images/images/011/624/363/large/miguel-iglesias-horus2-portrait-colored-artstation.jpg?1530548148",
"https://cdnb.artstation.com/p/assets/images/images/011/624/405/large/miguel-iglesias-lorgar-portrait-color-artstation.jpg?1530548279",
"https://cdnb.artstation.com/p/assets/images/images/011/624/381/large/miguel-iglesias-vulkan-portrait-color-artstation.jpg?1530548191",
"https://cdna.artstation.com/p/assets/images/images/011/624/398/large/miguel-iglesias-corax-portrait-color-artstation.jpg?1530548235",
"https://cdnb.artstation.com/p/assets/images/images/011/624/411/large/miguel-iglesias-alpharius-portrait-color-artstation.jpg?1530548315",
"https://cdnb.artstation.com/p/assets/images/images/011/624/415/large/miguel-iglesias-omegon-portrait-color-artstation.jpg?1530548348"
]

export const shuffle = () => 
{
  for (let i = pics.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [pics[i], pics[j]] = [pics[j], pics[i]]; // swap elements
  }
  return pics;
}

export default shuffle;

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
//     [array[i], array[j]] = [array[j], array[i]]; // swap elements
//   }
//   return array;
// }
// pics = shuffle(pics);

// console.log(pics);
