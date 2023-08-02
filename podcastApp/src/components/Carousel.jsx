
export default function Carousel (){
  
    return(  
        <section className="carousel">
            <h3>Shows you might like</h3>
            <div className="carousel-img">
            <img src="https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg" width="100%" alt="" />
            <img src="https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png" width="100%" alt="" />
            <img src="https://content.production.cdn.art19.com/images/19/f4/f9/af/19f4f9af-4a18-44e1-a622-726f43feb79d/539a50f79529628dbde7aa116778056619b802bfa0247cb739db907085e0b595a5521efc78faa831ebddc235d69beb27e1e36fd51f825bc888f0c11cccbd9cd8.png" width="100%" alt="" />
            <img src="https://content.production.cdn.art19.com/images/68/4e/03/af/684e03af-29c5-4a35-b84a-d929f114caee/4f60eec3fabd62251d0cdbd1af11b79c43fb1465dbc5ec3371328fbddadee597e9f115c31b079e20266648ee07a80a93c01cecdb81ab3545d872393997594ef3.png" width="100%" alt="" />
            <img src="https://content.production.cdn.art19.com/images/c3/55/d2/da/c355d2da-f845-47df-a4e6-22b70a5082bb/c290fe89d3a699dd5c316f5f4cfe2ca942183cef5d6ac4fc2d7d6df296690c9e7183f79422dcb0b37af7c7e7e59de0e36cddd3b01500bf066a470614c9a0af6d.png" width="100%" alt="" />
            </div>
        </section > 
    )
}

// import React, {useEffect, useState} from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import leftArrowImage from "../img/left-arrow.png"
// import rightArrowImage from "../img/right-arrow.png"

// /**
//  * Component that displays a carousel of random podcasts received from the parent component.
//  * @param {Object[]} podcast - An array of podcast data.
//  * @returns {JSX.Element} The JSX element representing the PodcastCarousel.
//  */
// export default function PodcastCarousel ({podcast}){       
//     const [randomPodcast, setRandomPodcast] = useState([]);
//     const [isLoading, setIsLoading] = useState(true)
    
//     /* function that gets random podcasts to pass into the child component of
//     *podcastCarousel which is displayed on the header/home page
//     *
//     */
//    const getRandomPodcast = (podcast) => {
//        const randomPodcast = [];
//        while (randomPodcast.length < 6) {
//            const randomIndex = Math.floor(Math.random() * podcast.length);
//            randomPodcast.push(podcast[randomIndex])
//         }
//         return randomPodcast;
//     }
//     console.log(randomPodcast)



//        /* changes the setRandomPodcast everytime the podcast prop changes in the header which gets passed to 
//        * the carousel component which changes the prop after every transition which is controlled in the css class
//        *
//        */
//         useEffect(() => {
//             // checks if the podcast data is available and if not displays loading screen
//             if(podcast && podcast.length > 0 && podcast[0]?.image) {
//             setRandomPodcast(getRandomPodcast(podcast));
//             setIsLoading(false);
//             }
//         }, [podcast])
       

//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 250,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             fade: true,
//             cssEase: "linear",
//             autoplay: true,
//             autoplaySpeed: 5000,
//         };

//     if (isLoading) {
//         return (
//             <div className="carousel">
//               <div className="loading--screen">
//                 <img
//                   className="loading--image"
//                   src="./src/img/ouroboros.png"
//                   alt="Loading snake"
//                 />
//                 <div className="loading--text">Loading...</div>
//               </div>
//             </div>
//           );
//         }
      
//         return (
//           <div className="carousel">
//             <Slider {...settings}>
//               {randomPodcast.map((podcastItem) => (
//                 <div key={podcastItem.id}>
//                   <img src={podcastItem.image} alt={podcastItem.title} />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         );
// }