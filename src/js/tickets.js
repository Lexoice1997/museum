function totalAmount() {
  const basicCount = document.querySelector('.number-basic'),
    seniorCount = document.querySelector('.number-senior'),
    totalAmount = document.querySelector('#total'),
    resBtn = document.querySelectorAll('.tickets-amount__btn'),
    permanent = document.querySelector('#permanent'),
    temporary = document.querySelector('#temporary'),
    combined = document.querySelector('#combined'),
    containerInput = document.querySelectorAll('.container-input');

  let result = 0;
  let price = 0;

  function checkedBtn() {
    if (permanent.checked) {
      price = 20;
      countAmount()
    } else if (temporary.checked) {
      price = 25;
      countAmount()
    } else if (combined.checked) {
      price = 40;
      countAmount()
    }
  }

  function countAmount() {
    let basic = basicCount.value * price;
    let senior = seniorCount.value * price / 2;
    result = basic + senior;

    render()
  }

  function render() {
    totalAmount.innerHTML = `Total €${result}`
  }

  resBtn.forEach(item => item.addEventListener('click', countAmount));
  containerInput.forEach(item => item.addEventListener('click', checkedBtn));

  checkedBtn();
}

export default totalAmount;
