const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don’t watch the clock; do what it does. Keep going.",
    "It always seems impossible until it's done.",
    "You are never too old to set another goal or to dream a new dream.",
    "The best way to predict the future is to create it.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Believe you can and you're halfway there.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Love is not about how much you say 'I love you,' but how much you prove that it's true.",
    "To love and be loved is to feel the sun from both sides.",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    "The greatest thing you'll ever learn is just to love and be loved in return.",
    "Love is composed of a single soul inhabiting two bodies.",
    "I'm writing a book. I've got the page numbers done.",
    "Behind every great man, there is a woman rolling her eyes.",
    "I used to think I was indecisive, but now I'm not too sure.",
    "A day without laughter is a day wasted.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "The only true wisdom is in knowing you know nothing.",
    "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "An unexamined life is not worth living.",
    "The journey of a thousand miles begins with one step.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "You only live once, but if you do it right, once is enough.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Life is what happens when you're busy making other plans.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "I find that the harder I work, the more luck I seem to have.",
    "Don't be afraid to give up the good to go for the great.",
    "Success is not in what you have, but who you are."
];

const used= new Set()
const quoteElement = document.getElementById("quote")
function generateQuote() {
    if (used.size >= quotes.length){
        used.clear()
    }
    while (true) {
        const index = Math.floor(Math.random()*quotes.length)
        if (used.has(index)) continue
        
        const quote = "\"" + quotes[index]+"\"" 
        quoteElement.innerHTML=quote
        used.add(index)
        break 
    }
}