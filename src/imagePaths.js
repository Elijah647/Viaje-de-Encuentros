// imagePaths.js
/*const photos = {
  Peru: [
    { src: require("./assets/Peru/p1.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p2.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p4.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p5.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p6.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p7.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p8.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p9.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p10.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p11.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p12.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p13.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p14.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p15.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p16.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p17.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p18.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p19.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p20.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p21.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p22.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p23.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p24.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p25.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p26.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p27.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p28.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p29.jpeg"), width: 900, height: 900 },
    { src: require("./assets/Peru/p30.jpeg"), width: 900, height: 900 },
    
  ],
  Bolivia: [
    { src: require("./assets/Argentina/a1.jpeg"), width: 800, height: 700 },
    { src: require("./assets/Argentina/a2.jpeg"), width: 600, height: 700 },
    { src: require("./assets/Argentina/a3.jpeg"), width: 400, height: 700 },
    { src: require("./assets/Argentina/a4.jpeg"), width: 700, height: 700 },
    { src: require("./assets/Argentina/a5.jpeg"), width: 600, height: 400 },
    { src: require("./assets/Argentina/a6.jpeg"), width: 900, height: 700 },
    { src: require("./assets/Argentina/a7.jpeg"), width: 800, height: 400 },
    { src: require("./assets/Argentina/a9.jpeg"), width: 600, height: 900 },

    // Add more images
  ],
  Chile: [
    { src: require("./assets/Argentina/a1.jpeg"), width: 800, height: 700 },
    { src: require("./assets/Argentina/a2.jpeg"), width: 600, height: 700 },
    { src: require("./assets/Argentina/a3.jpeg"), width: 400, height: 700 },
    { src: require("./assets/Argentina/a4.jpeg"), width: 700, height: 700 },
    { src: require("./assets/Argentina/a5.jpeg"), width: 600, height: 400 },
    { src: require("./assets/Argentina/a6.jpeg"), width: 900, height: 700 },
    { src: require("./assets/Argentina/a7.jpeg"), width: 800, height: 400 },
    { src: require("./assets/Argentina/a9.jpeg"), width: 600, height: 900 },
    // Add more images
  ],

  Argentina: [
    { src: require("./assets/Argentina/a1.jpeg"), width: 800, height: 800 },
    { src: require("./assets/Argentina/a2.jpeg"), width: 600, height: 850 },
    { src: require("./assets/Argentina/a3.jpeg"), width: 400, height: 850 },
    { src: require("./assets/Argentina/a4.jpeg"), width: 700, height: 800 },
    { src: require("./assets/Argentina/a5.jpeg"), width: 600, height: 800 },
    { src: require("./assets/Argentina/a6.jpeg"), width: 900, height: 600 },
    { src: require("./assets/Argentina/a7.jpeg"), width: 800, height: 700 },
    { src: require("./assets/Argentina/a9.jpeg"), width: 600, height: 800 },
    { src: require("./assets/Argentina/a10.jpeg"), width: 1200, height: 800 },
    { src: require("./assets/Argentina/a11.jpeg"), width: 500, height: 700 },
    { src: require("./assets/Argentina/a12.jpeg"), width: 700, height: 600 },
    { src: require("./assets/Argentina/a13.jpeg"), width: 800, height: 700 },
    { src: require("./assets/Argentina/a14.jpeg"), width: 600, height: 600 },
    { src: require("./assets/Argentina/a15.jpeg"), width: 400, height: 300 },
    { src: require("./assets/Argentina/a16.jpeg"), width: 800, height: 400 },
    { src: require("./assets/Argentina/a17.jpeg"), width: 500, height: 600 },
  ],
  // Add more images with their dimension

  Colombia: [
    require("./assets/Colombia/co1.jpeg"),
    // Add more images
  ],
  // Add more countries
};

export default photos;
*/

import ch1 from "./assets/Chile/ch1.jpeg";
import a1 from "./assets/Argentina/a1.jpeg";
const testPhotos = [
  { src: ch1, width: 900, height: 900 },
  { src: a1, width: 900, height: 900 },
];
console.log(testPhotos);

const generateImagePaths = (basePath, start, end, width, height) => {
  const paths = [];
  for (let i = start; i <= end; i++) {
    paths.push({
      src: require(`${basePath}${i}.jpeg`),
      width: width,
      height: height,
    });
  }
  return paths;
};

const photos = {
  Peru: generateImagePaths("./assets/Peru/p", 1, 102, 900, 900),
  Bolivia: generateImagePaths("./assets/Bolivia/b", 1, 90, 900, 900),
  Chile: generateImagePaths("./assets/Chile/ch", 1, 88, 900, 900),
  Argentina: generateImagePaths("./assets/Argentina/a", 1, 157, 900, 900),
  Colombia: generateImagePaths("./assets/Colombia/col", 1, 170, 900, 900), 
};
export default photos;
