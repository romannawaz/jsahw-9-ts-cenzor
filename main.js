const BAD_WORDS_LIST = [];
function renderBadWords() {
    document.querySelector('.bad-words-list').textContent = BAD_WORDS_LIST.join(' ');
}
const BAD_WORD_FORM = document.querySelector('.bad-words-form');
BAD_WORD_FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    let newBadWord = BAD_WORD_FORM.querySelector('.new-bad-word').value;
    if (!this.checkValidity()) {
        this.classList.add('was-validated');
    }
    else {
        BAD_WORDS_LIST.push(newBadWord);
        this.classList.remove('was-validated');
        this.reset();
        renderBadWords();
    }
});
BAD_WORD_FORM.querySelector('.reset-btn').addEventListener('click', function () {
    BAD_WORDS_LIST.length = 0;
    renderBadWords();
});
const CENZOR_FORM = document.querySelector('.cenzor-form');
CENZOR_FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    function cenzor(str, badWords) {
        return str
            .trim()
            .split(' ')
            .map(word => {
            for (const badWord of badWords) {
                if (word == badWord) {
                    return '*'.repeat(word.length);
                }
            }
            return word;
        })
            .join(' ');
    }
    if (!this.checkValidity()) {
        this.classList.add('was-validated');
    }
    else {
        const TEXTAREA = this.querySelector('.text');
        TEXTAREA.value = cenzor(TEXTAREA.value, BAD_WORDS_LIST);
        this.classList.remove('was-validated');
    }
});
//# sourceMappingURL=main.js.map