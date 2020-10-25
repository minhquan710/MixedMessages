//five quotes to be displayed randomized
const quotes = ['Waste no more time arguing what a good man should be. Be One. — Marcus Aurelius', 
                'You could leave life right now. Let that determine what you do and say and think. — Marcus Aurelius',
                'He who fears death will never do anything worth of a man who is alive. — Seneca',
                'How long are you going to wait before you demand the best for yourself? — Epictetus',
                'Wealth consists not in having great possessions, but in having few wants. ― Epictetus'];
//make simple fuction to serve random message
const randomMessage = arr => arr[Math.floor(Math.random() * 5)];

//combine array and function to make complete program
const displayMessage = (func,arr) => {
    let message = func(arr);
    let extend = "=".repeat(message.length + 8);
    console.log(extend);
    console.log(`|  "${message}"  |`);
    console.log(extend);
};
//run with five quotes
displayMessage(randomMessage,quotes);