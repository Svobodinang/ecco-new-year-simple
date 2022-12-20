export default function processInputs() {
    const radioButtons = Array.from(document.querySelectorAll('.radio-input'));

    console.log(radioButtons);

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('change', (e) => {
            const goodsId = e.target.getAttribute('goodsId');
            const { value } = e.target;

            console.log(e.target.value);

            const inputWrapperEl = document.querySelector(`#input-wrapper-${goodsId}`);
            const goodsWrapper = document.querySelector(`#goods-${goodsId}`);

            if (value === 'women') {
                inputWrapperEl.classList.add('women');
                goodsWrapper.classList.add('women');
            } else {
                inputWrapperEl.classList.remove('women');
                goodsWrapper.classList.remove('women');
            }
        });
    });

}
