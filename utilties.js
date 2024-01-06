function getCardValueById(cardId) {
  const cardField = document.getElementById(cardId);
  const cardFieldNumber = cardField.innerText;
  const cardValue = parseFloat(cardFieldNumber);
  return cardValue;
}
function getelementValueById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementFieldValue = elementField.innerText;
  const elementValue = parseFloat(elementFieldValue);
  return elementValue;
}
function setValue(innerId, addValue) {
  const innerValue = document.getElementById(innerId);
  innerValue.innerText = addValue;
  const purchase = document.getElementById('purchase');
  applyUnabled(addValue);
  if (addValue > 0) {
    purchase.removeAttribute('disabled');
  }
}

function entryCard(name, price) {
  const box = document.getElementById('display');
  const p = document.createElement('p');
  const count = box.childElementCount;
  p.innerHTML = `<h2 class="text-xl"> ${
    count + 1
  }. ${name} ${price}.00TK </h2>`;
  box.appendChild(p);
}

function applyUnabled(total) {
  const apply = document.getElementById('apply');
  if (total > 200) {
    apply.removeAttribute('disabled');
  }
}

function calculationDiscount(values) {
  const discount = (values / 100) * 20;
  const discountValue = getelementValueById('discount');
  const totalDiscount = discountValue + discount;
  return totalDiscount;
}
function finalTotla(totalMoney, discount) {
  const total = totalMoney - discount;
  applyUnabled(total);
  setValue('final-total', total.toFixed(2));
}
