const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.querySelector('table')

const getSum = () => {
//Add your code here
	let totalPrice = document.querySelectorAll(".prices")
            let newRow = document.createElement('tr')
            let sum = 0

            for(let i of totalPrice){
                sum = sum + +i.innerHTML
            }
	newRow.id = "ans"
            newRow.innerText = sum
            table.append(newRow)
};

getSumBtn.addEventListener("click", getSum);

