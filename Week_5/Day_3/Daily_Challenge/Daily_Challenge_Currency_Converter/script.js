const url = 'https://v6.exchangerate-api.com/v6/0a6943bf1650e4444cf51947/';
const from = document.getElementById('from');
const to = document.getElementById('to');
const amount = document.getElementById('amount');
const currencyForm = document.getElementById('currencyForm');
const result = document.getElementById('result');
const currencySwitch = document.getElementById('switch');

const getCurrency = async () => {
    try {
        const res = await fetch(url + 'codes');
        if (!res.ok) {
            throw new Error('Something went wrong');
        }
        const data = await res.json();
        for (code of data.supported_codes) {
            let option = document.createElement('option');
            option.value = code[0];
            option.text = code[1];
            from.appendChild(option);
            to.appendChild(option.cloneNode(true));

            if (code[0] == 'USD') {
                from.value = code[0];
            }
            if (code[0] == 'EUR') {
                to.value = code[0];
            }
        }
    }
    catch (error) {
        alert(error.message);
    }
}

getCurrency();

const convertCurrency = async () => {
    try {
        const res = await fetch(`${url}pair/${from.value}/${to.value}/${amount.value}`);
        if (!res.ok) {
            throw new Error('Something went wrong');
        }
        const data = await res.json();

        result.innerHTML = `${data.conversion_result} ${data.target_code}`;
    }
    catch (error) {
        alert(error.message);
    }
}

amount.addEventListener('input', (e) => {
    amount.value = e.target.value.replace(/[^0-9.]/g, '');
});

currencyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    convertCurrency();
});

currencySwitch.addEventListener('click', () => {
    let temp = from.value;
    from.value = to.value;
    to.value = temp;
    convertCurrency();
})