const quotes = [
    " The only way to do great work is to love what you do. - Steve Jobs",
    " In the middle of difficulty lies opportunity. - Albert Einstein",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Normality is a paved road: it's comfortable to walk but no flowers grow. - Vincent van Gogh ",
    "Live as if you were to die tomorrow - Mahatma Gandhi ",
    " Happiness depends upon ourselves. - Aristotle",
    " Live a simple life; you will own the most beautiful treasures of the world! - Mehmet Murat Ildan ",
    "A simple life gives birth to more clarity, inner peace and meaningful relationships. - Margo Vader ",
    "Because you are alive, everything is possible. - Thich Nhat Hanh ",
    " Our truest life is when we are in dreams awake. - Henry David Thoreau ",
    "The great thing in this world is not so much where we are, but in what direction we are going ",
    "Love yourself first and everything else falls into line.- Lucille Ball ",
    "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone. - Reba McEntire ",
    " Never regret anything you have done with a sincere affection; nothing is lost that is born of the heart. - Basil Rathbone",
    " Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "What's meant to be will always find a way - Trisha Yearwood ",
    " The flower that blooms in adversity is the rarest and most beautiful of all. - Walt Disney Company ,Mulan ",


]
function quote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById('result').textContent = quotes[random];
}



