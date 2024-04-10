"use strict";
// burger menu
const burgerOpen = document.querySelector('.header__burger');
const burgerClose = document.querySelector('.header__close');
const burgerMenu = document.querySelector('.header__menu');
if (window.innerWidth >= 425) {
    burgerOpen.addEventListener("click", () => {
        burgerMenu.classList.add('header__menu_open')
    })
}
burgerClose.addEventListener("click", () => {
    burgerMenu.classList.remove('header__menu_open')
})

// All checkboxs
const selectAllCheckbox = document.querySelector(".select-all");
const checkboxes = document.querySelectorAll(".checkbox");
selectAllCheckbox.addEventListener("change", function () {

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = selectAllCheckbox.checked;
    });
});

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        let allChecked = true;
        checkboxes.forEach(function (cb) {
            if (!cb.checked) {
                allChecked = false;
            }
        });
        selectAllCheckbox.checked = allChecked;
    });
});

// modals-pay open and close
const modalPayOpen = document.querySelectorAll('.modals-pay__open');
const sectionToScroll = document.getElementById('section-to-scroll');
const modalPay = document.querySelector('.modals-pay');
const modalsPayClose = document.querySelector('.modals-pay-close');

function openModalPayAndScrollToSection() {
    if (modalPay && sectionToScroll) {
        sectionToScroll.scrollIntoView();
        modalPay.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

modalPayOpen.forEach(function (button) {
    button.addEventListener("click", openModalPayAndScrollToSection);
});

function closeModalPay() {
    if (modalPay) {
        modalPay.style.display = "none";
    }
    document.body.style.overflow = "auto";
}

modalsPayClose.addEventListener("click", closeModalPay);

// modals-adress open and close, switch content
const modalAdressOpen = document.querySelectorAll('.modals-adress__open');
const modalAdress = document.querySelector('.modals-adress');
const modalsAdressClose = document.querySelector('.modals-adress-close');
function openModalAdressAndScrollToSection() {
    if (modalAdress && sectionToScroll) {
        sectionToScroll.scrollIntoView();
        modalAdress.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

modalAdressOpen.forEach(function (button) {
    button.addEventListener("click", openModalAdressAndScrollToSection);
});

function closeModalAdress() {
    if (modalAdress) {
        modalAdress.style.display = "none";
    }
    document.body.style.overflow = "auto";
}

modalsAdressClose.addEventListener("click", closeModalAdress);

const localButton = document.querySelector(".modals-adress__local");
const courierButton = document.querySelector(".modals-adress__courier");
const content2 = document.getElementById("content1");
const content1 = document.getElementById("content2");

localButton.addEventListener("click", function (event) {
    event.preventDefault();

    localButton.classList.add("active");
    courierButton.classList.remove("active");

    content1.style.display = "block";
    content2.style.display = "none";
});

courierButton.addEventListener("click", function (event) {
    event.preventDefault();

    courierButton.classList.add("active");
    localButton.classList.remove("active");

    content2.style.display = "block";
    content1.style.display = "none";
});

// collapse cart-active
const cartItemsActive = document.querySelector('.cart__items-active');
const collapseIcon = document.querySelector('.collapse-icon');
const selectAllCheckboxContainer = document.querySelector('.custom-checkbox-hide');
const collapseText = document.querySelector('.collapse-text');


collapseIcon.addEventListener('click', () => {
    cartItemsActive.classList.toggle('collapsed');

    collapseIcon.classList.toggle('rotate');

    selectAllCheckboxContainer.style.display =
        selectAllCheckboxContainer.style.display === 'none' ? 'block' : 'none';
    collapseText.style.display =
        collapseText.style.display === 'block' ? 'none' : 'block';
});


// collapse disactive
const cartItemsDisactive = document.querySelector('.disactive-items__close');
const collapseIconDisactive = document.querySelector('.collapse-icon-disactive');

collapseIconDisactive.addEventListener('click', () => {
    cartItemsDisactive.classList.toggle('collapsed');
    collapseIconDisactive.classList.toggle('rotate');

});




// sum of products
let totalPrice = 0;
const modalButton = document.querySelector('.modal-button__text');
const modalCheckbox = document.getElementById('modal-checkbox');
const modalSum = document.getElementById('modal-sum')
modalSum.textContent = `${totalPrice} сом`

function removeSpaces(text) {
    return text.replace(/\s/g, '');
}

const itemCheckboxes = document.querySelectorAll('.custom-checkbox_cart.checkbox');
const itemPrices = document.querySelectorAll('.cart__price_amount');
const totalPriceElement = document.querySelector('.cart__total-price');

function updateTotalPrice() {

    totalPrice = 0;

    itemCheckboxes.forEach(function (checkbox, index) {
        if (checkbox.checked) {

            const itemPriceText = itemPrices[index].textContent;
            const itemPriceWithoutSpaces = removeSpaces(itemPriceText);
            const itemPrice = parseFloat(itemPriceWithoutSpaces);

            totalPrice += itemPrice;
        }
    });


    modalSum.textContent = `${totalPrice} сом`
}


selectAllCheckbox.addEventListener('change', function () {
    const isChecked = this.checked;

    itemCheckboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateTotalPrice();
});

itemCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {

        updateTotalPrice();
    });
});
modalCheckbox.addEventListener('change', function () {
    if (modalCheckbox.checked) {
        modalButton.textContent = `Оплатить ${totalPrice} сом`;
    } else {
        modalButton.textContent = 'Заказать';
    }
})
const hoverTriggers = document.querySelectorAll('.hover-trigger');
const companyCards = document.querySelectorAll('.company-card');

hoverTriggers.forEach((trigger, index) => {
    trigger.addEventListener('mouseenter', function () {
        companyCards[index].style.display = 'block';
    });

    trigger.addEventListener('mouseleave', function () {
        companyCards[index].style.display = 'none';
    });
});

// hover free
const spanElementMod = document.querySelector('.modal-delivery__text_green-mod');
const freeCardMod = document.querySelector('.free-card_modal');

spanElementMod.addEventListener('mouseover', function () {
    freeCardMod.style.display = 'block';
});
spanElementMod.addEventListener('mouseout', function () {
    freeCardMod.style.display = 'none';
});

const spanElement = document.querySelector('.modal-delivery__text_green-del');
const freeCard = document.querySelector('.free-card_delivery');

spanElement.addEventListener('mouseover', function () {
    freeCard.style.display = 'block';
});

spanElement.addEventListener('mouseout', function () {
    freeCard.style.display = 'none';
});




// delivery images
const images = document.querySelectorAll('.image-toggle');
selectAllCheckbox.addEventListener('change', function () {
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = selectAllCheckbox.checked; //
        if (selectAllCheckbox.checked) {
            images[index].classList.remove('hidden');
        } else {
            images[index].classList.add('hidden');
        }
    });
});
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            images[index].classList.remove('hidden');
        } else {
            images[index].classList.add('hidden');
        }
    });
});


// validation form
const form = document.getElementById("form");
const inputs = form.querySelectorAll(".form__floating-input");
const labels = form.querySelectorAll("label");
const submitBtn = form.querySelector("button[type='submit']");

function addFilledClass(event) {
    const label = event.target.nextElementSibling;
    label.classList.add("filled");
}

function removeFilledClass(event) {
    const input = event.target;
    const label = input.nextElementSibling;
    if (input.value === "") {
        label.classList.remove("filled");
    }
}

function validateEmail(input) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(input.value);
}

function validatePhone(input) {
    const phonePattern = /^\+?\d{1,3}?\s?\d{1,3}?\s?\d{1,3}?\s?\d{1,3}?\s?\d{1,2}?\d{1,2}$/;
    return phonePattern.test(input.value);
}

function validateINN(input) {
    const innPattern = /^\d{14}$/;
    return innPattern.test(input.value);
}

function validateInput(event) {
    const input = event.target;
    const label = input.nextElementSibling;
    const errorMessage = label.nextElementSibling;

    let isValid = true;

    if (input.id === "email") {
        if (!validateEmail(input)) {
            isValid = false;
        }
    } else if (input.id === "phone") {
        if (!validatePhone(input)) {
            isValid = false;
        }
    } else if (input.id === "inn") {
        if (!validateINN(input)) {
            isValid = false;
        }
    }

    if (!isValid) {
        label.classList.add("error");
        input.classList.add("form__input-error");
        errorMessage.style.display = "block";
    } else {
        label.classList.remove("error");
        input.classList.remove("form__input-error");
        errorMessage.style.display = "none";
    }
}


form.addEventListener("submit", function (event) {
    let isFormValid = true;

    inputs.forEach(input => {
        validateInput({ target: input });
        if (input.nextElementSibling.classList.contains("error")) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        event.preventDefault();
        const invalidInputs = Array.from(inputs).filter(input => input.nextElementSibling.classList.contains("error"));
        if (invalidInputs.length > 0) {
            invalidInputs[0].focus();
        }
    }
});

inputs.forEach(input => {
    input.addEventListener("focus", addFilledClass);
    input.addEventListener("blur", removeFilledClass);
    input.addEventListener("input", validateInput);
});
