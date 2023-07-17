const HandleClick = () => {
    let randNum = Math.floor(Math.random() * 3) + 1;
    console.log(randNum);
    let userInput = prompt('Type a number');
    alert(`Number is: ${randNum}, Your guess: ${userInput}`);
}

export default HandleClick;