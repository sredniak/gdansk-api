
const taryfa = document.querySelector('.taryfa');
const strefa = document.querySelector('.strefa');
const date = document.querySelector('.date');
const button = document.querySelector('button');
const input = document.querySelector('input');
const inputValue = document.querySelector('.input-value')

const API_URL= 'https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/5552f5f2-1e3f-4aa4-9042-2853faccb418/download/wazne_bilety.json'



// const cardNumber = '1003909540';

async function getData() {

    const inputCardNumber = input.value
    const response = await fetch(API_URL);
    const data = await response.json();

    

    
    axios.get(API_URL).then(res => {
    

        inputValue.textContent = `Numer twojej karty: ${inputCardNumber}`

        
        taryfa.textContent = `Taryfa: ${res.data.karty[inputCardNumber].bilety[0].Taryfa}`;
        strefa.textContent = `Strefa: ${res.data.karty[inputCardNumber].bilety[0].Strefa}`;
        date.textContent = `Ważny do: ${res.data.karty[inputCardNumber].bilety[0].WaznyDo}`;        

        
    })
    
}


button.addEventListener('click', getData)


//1959044354 
//1569935300