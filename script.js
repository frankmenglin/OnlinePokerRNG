function showText(percentage) {
    const textBox = document.getElementById('textBox');
    const randomNum = Math.random() * 100; // generates a random number between 0 (inclusive) and 100 (exclusive)

    if (randomNum < percentage) {
        textBox.textContent = 'YES';
    } else {
        textBox.textContent = 'NO';
    }

    // Make text disappear after 3 seconds
    setTimeout(() => {
        textBox.textContent = '';
    }, 2000);
}

