
const carouselImageLocations = [
  '../images/full_band_small.jpeg',
  '../images/slideshow_1.jpg',
  '../images/slideshow_2.jpg',
  '../images/slideshow_3.jpg',
  '../images/slideshow_4.jpg',
  '../images/slideshow_5.jpg',
  '../images/slideshow_6.jpg',
];

let carouselImagesHTML = '';
for (let i = 0; i < carouselImageLocations.length; i++) {
  let divClass = 'item active'; // first picture needs active class, which is unique class
  if (i > 0) divClass = 'item';
  carouselImagesHTML += `
    <div class="${divClass}">
      <img src="${carouselImageLocations[i]}" alt="live band photo" width="1200" height="700">
      <div class="carousel-caption">
        <p>Photo by 
          <a href="https://www.instagram.com/monigirii/">Monica Murray, 2019</a>
        </p>
      </div>
    </div> 
  `
}

$('.carousel-inner').append(carouselImagesHTML);
$('.carousel-inner:first-child').addClass(' active');