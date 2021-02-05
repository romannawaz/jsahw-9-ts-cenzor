// Task 1
// let city: string;
// city = "Kiev";
// city = "Lviv";
// let address: string = city;
// console.log(address);

// Task 2
// let num: number = +prompt("Enter a number");
// num === 0
//   ? console.log("num === 0")
//   : num % 2 === 0
//   ? console.log("even")
//   : console.log("odd");

// Task 3
// function max(a: number, b: number, ...args): number {
//   let max: number = a > b ? a : b;

//   if (args.length > 0) {
//     for (const num of args) {
//       if (num > max) {
//         max = num;
//       }
//     }
//   }

//   return max;
// }

// console.log(max(5, 2));
// console.log(max(5, -2, 30, 6));

// Task 4
// let num = '112';
// let nan = 'qwerty';
// let negativeNum = '-3';
// let empty = '';

// function getSqrt(num: string): string {
//     let res: string;
//     let number = parseFloat(num);

//     if (num.trim() === '') {
//         res = 'Будь ласка, введіть число';
//     }
//     else if (isNaN(number)) {
//         res = 'Повинно бути числове значення';
//     }
//     else if (number < 0) {
//         res = 'Введіть додатнє число';
//     }
//     else {
//         res = `Квадратний корінь з ${number} дорівнює ${Math.sqrt(number).toFixed(2).toString()}`;
//     }

//     return res;
// }

// console.log('Num ->', getSqrt(num));
// console.log('Not a Num ->', getSqrt(nan));
// console.log('Negative Num ->', getSqrt(negativeNum));
// console.log('Empty ->', getSqrt(empty));


// Task 5
const BAD_WORDS_LIST: string[] = [];

function renderBadWords(): void {
    document.querySelector('.bad-words-list').textContent = BAD_WORDS_LIST.join(' ');
}

const BAD_WORD_FORM: HTMLFormElement = document.querySelector('.bad-words-form');
BAD_WORD_FORM.addEventListener(
    'submit',
    function (e): void {
        e.preventDefault();

        let newBadWord: string = (BAD_WORD_FORM.querySelector('.new-bad-word') as unknown as HTMLInputElement).value;

        if (!this.checkValidity()) {
            this.classList.add('was-validated');
        }
        else {
            BAD_WORDS_LIST.push(newBadWord);

            this.classList.remove('was-validated');
            this.reset();

            renderBadWords();
        }
    }
);

BAD_WORD_FORM.querySelector('.reset-btn').addEventListener(
    'click',
    function (): void {
        BAD_WORDS_LIST.length = 0;

        renderBadWords();
    }
);

const CENZOR_FORM: HTMLFormElement = document.querySelector('.cenzor-form');
CENZOR_FORM.addEventListener(
    'submit',
    function (e): void {
        e.preventDefault();

        function cenzor(str: string, badWords: string[]): string {
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
            const TEXTAREA = this.querySelector('.text') as unknown as HTMLTextAreaElement;

            TEXTAREA.value = cenzor(TEXTAREA.value, BAD_WORDS_LIST);
            this.classList.remove('was-validated');
        }
    }
);