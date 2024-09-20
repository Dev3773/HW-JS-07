const listRef = document.querySelector('.list');

listRef.addEventListener('click', handClick);

function handClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }
const instance = basicLightbox.create(`
	 <div class="box"><img class="link" src="https://th.bing.com/th/id/OIP.XL0eSVAxrSPo-QPmrJDy1QHaEK?rs=1&pid=ImgDetMain"
    alt="window" width="500"></div>
`);

instance.show();
}

// *******************************

const btnRef = document.querySelector(".button");

const handPush = () => {
  const instance = basicLightbox.create(`
	<div class="box"><img class="link" src="https://th.bing.com/th/id/OIP.XL0eSVAxrSPo-QPmrJDy1QHaEK?rs=1&pid=ImgDetMain"
    alt="window" width="500"></div>
`)
  instance.show();
};

btnRef.addEventListener("click", handPush);