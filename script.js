document.getElementById('card-1').addEventListener('click', function () {
  const cardValue = getCardValueById('card1-money');
  const elementValue = getelementValueById('total-money');
  const totalPrice = cardValue + elementValue;
  setValue('total-money', totalPrice);
  entryCard('K. Accessories', cardValue);
});
document.getElementById('card-2').addEventListener('click', function () {
  const cardValue = getCardValueById('card2-money');
  const elementValue = getelementValueById('total-money');
  const totalPrice = cardValue + elementValue;
  setValue('total-money', totalPrice);
  entryCard('D. Accessories', cardValue);
});
document.getElementById('card-3').addEventListener('click', function () {
  const cardValue = getCardValueById('card3-money');
  const elementValue = getelementValueById('total-money');
  const totalPrice = cardValue + elementValue;
  setValue('total-money', totalPrice);
  entryCard('Home Cooker', cardValue);
});
document.getElementById('card-4').addEventListener('click', function () {
  const cardValue = getCardValueById('card4-money');
  const elementValue = getelementValueById('total-money');
  const totalPrice = cardValue + elementValue;
  setValue('total-money', totalPrice);
  entryCard('Sports Back Cap', cardValue);
});
document.getElementById('card-5').addEventListener('click', function () {
  const cardValue = getCardValueById('card5-money');
  const elementValue = getelementValueById('total-money');
  const totalPrice = cardValue + elementValue;
  setValue('total-money', totalPrice);
  entryCard('Full Jersey Set', cardValue);
});
document.getElementById('card-6').addEventListener('click', function () {
  const cardValue = getCardValueById('card6-money');
  const elementValue = getelementValueById('total-money');
  const totalPrice = cardValue + elementValue;
  setValue('total-money', totalPrice);
  entryCard('Sports cates', cardValue);
});
document.getElementById('apply').addEventListener('click', function () {
  const coupon = document.getElementById('coupon');
  const discountField = document.getElementById('discount');
  const totalMoney = document.getElementById('total-money');
  const totalMoneyInner = totalMoney.innerText;
  const totalMoneyNumber = getelementValueById('total-money');
  const discount = calculationDiscount(totalMoneyNumber);
  finalTotla(totalMoneyNumber, discount);
  if (coupon.value === 'SELL200') {
    discountField.innerText = discount.toFixed(2);
    coupon.value = '';
    applyUnabled(totalMoneyNumber);
  } else {
    alert('Plese Right Coupon');
  }
});
document.getElementById('home').addEventListener('click', function () {
  const totalMoney = document.getElementById('total-money');
  const discountField = document.getElementById('discount');
  const finalTotal = document.getElementById('final-total');
  const box = document.getElementById('display');
  box.innerText = '';
  finalTotal.innerText = '00';
  discountField.innerText = '00';
  totalMoney.innerText = '00';
});
