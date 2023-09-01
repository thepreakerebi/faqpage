const faqs = document.querySelectorAll('.faq');
const arrowupList = document.querySelectorAll('.arrow-up');
const arrowdownList = document.querySelectorAll('.arrow-down');
const answerList = document.querySelectorAll('.answer');

/**const openQuestion = e => {
    for (let i = 0; i < faqs.length; i++) {
        faqs[i].addEventListener('click', e => {
            let answer = faqs[i].children[1]
            let arrowDown = faqs[i].children[0].children[1].children[0];
            let arrowUp = faqs[i].children[0].children[1].children[1];
            console.log(e.target);
            if (answer.classList[1]) {
                answer.style.display = 'block';
                answer.classList.remove('hide-answer');
                arrowDown.classList.add('arrow-up');
                arrowUp.classList.remove('arrow-up');
            } else {
                answer.style.display = 'none';
                arrowDown.classList.remove('arrow-up');
                arrowUp.classList.add('arrow-up');
                answer.classList.add('hide-answer');
            }
        })
    }
} **/

for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener('click', e => {
        let clickedElem = e.target;
        
        if (clickedElem.classList[0] === 'question-arrow-down') {
            let answer = clickedElem.nextElementSibling;
            let arrowUp = clickedElem.children[1].lastElementChild;
            let arrowDown = clickedElem.children[1].firstElementChild;
            if (answer.classList[1]) {
                answer.style.display = 'block';
                answer.classList.remove('hide-answer');
                arrowDown.classList.add('arrow-up');
                arrowUp.classList.remove('arrow-up');
            } else {
                answer.style.display = 'none';
                arrowDown.classList.remove('arrow-up');
                arrowUp.classList.add('arrow-up');
                answer.classList.add('hide-answer');
            }
        } else if (clickedElem.classList[0] === 'question') {
            let answer = clickedElem.parentElement.nextElementSibling;
            let arrowDown = clickedElem.parentElement.children[1].children[0];
            let arrowUp = clickedElem.parentElement.children[1].children[1];
            if (answer.classList[1]) {
                answer.style.display = 'block';
                answer.classList.remove('hide-answer');
                arrowDown.classList.add('arrow-up');
                arrowUp.classList.remove('arrow-up');
            } else {
                answer.style.display = 'none';
                arrowDown.classList.remove('arrow-up');
                arrowUp.classList.add('arrow-up');
                answer.classList.add('hide-answer');
            }
        } else if (clickedElem.classList[0] === 'arrow-container') {
            let arrowDown = clickedElem.children[0];
            let arrowUp = clickedElem.children[1];
            let answer = clickedElem.parentElement.nextElementSibling;
            if (answer.classList[1]) {
                answer.style.display = 'block';
                answer.classList.remove('hide-answer');
                arrowDown.classList.add('arrow-up');
                arrowUp.classList.remove('arrow-up');
            } else {
                answer.style.display = 'none';
                arrowDown.classList.remove('arrow-up');
                arrowUp.classList.add('arrow-up');
                answer.classList.add('hide-answer');
            }
        } else if (clickedElem.classList[0] === 'arrow') {
            let arrowDown = clickedElem;
            let arrowUp = clickedElem.nextElementSibling;
            let answer = clickedElem.parentElement.parentElement.nextElementSibling;
            if (answer.classList[1]) {
                answer.style.display = 'block';
                answer.classList.remove('hide-answer');
                arrowDown.classList.add('arrow-up');
                arrowUp.classList.remove('arrow-up');
            } else {
                answer.style.display = 'none';
                arrowDown.classList.remove('arrow-up');
                arrowUp.classList.add('arrow-up');
                answer.classList.add('hide-answer');
            }
        } else if (clickedElem.classList[0] === 'arrow-path') {
            console.log('clicked the path');
            let arrowDown = clickedElem.parentElement;
            let arrowUp = arrowDown.nextElementSibling;
            let answer = arrowDown.parentElement.parentElement.nextElementSibling;
            if (answer.classList[1]) {
                answer.style.display = 'block';
                answer.classList.remove('hide-answer');
                arrowDown.classList.add('arrow-up');
                arrowUp.classList.remove('arrow-up');
            } else {
                answer.style.display = 'none';
                arrowDown.classList.remove('arrow-up');
                arrowUp.classList.add('arrow-up');
                answer.classList.add('hide-answer');
            }
        } else if (clickedElem.classList[0] === 'faq') {
            let answer = faqs[i].children[1]
            let arrowDown = faqs[i].children[0].children[1].children[0];
            let arrowUp = faqs[i].children[0].children[1].children[1];
            console.log(e.target);
            if (answer.classList[1]) {
                answer.style.display = 'block';
                answer.classList.remove('hide-answer');
                arrowDown.classList.add('arrow-up');
                arrowUp.classList.remove('arrow-up');
            } else {
                answer.style.display = 'none';
                arrowDown.classList.remove('arrow-up');
                arrowUp.classList.add('arrow-up');
                answer.classList.add('hide-answer');
            }
        }
    })
}