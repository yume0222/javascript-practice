// ローディング
const loadingAreaGray = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');
window.addEventListener('load', () => {
  // グレースクリーン
  loadingAreaGray.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
  // グリーンスクリーン
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh'],
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );
  // テキスト
  loadingText.animate(
    {
      opacity: 1,
      offset: .8
    },
    {
      opacity: 0,
      offset: 1
    },
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  )
});

// 画像ギャラリー
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');
thumbImages.forEach((thumbImage) => {
  thumbImage.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0, 1]}, 500);
  });
  console.log(thumbImage);
});
