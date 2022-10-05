// const form = querySelector('js-register-form')
// form.addEventListener('submit', onFormSubmit )
// function onFormSubmit(event ) {
//     event.preventDefault(); //<---отмена действия по умолчанию
// }
// // єто как отправлять форму



let input = document.getElementById("name-input");    //<------достучались до id имя инпута
let nameOutput = document.getElementById("name-output"); //<----

input.oninput = function () {
    if (input.value === '') {
       nameOutput.innerHTML = 'Anonymous';
    } else{
    nameOutput.innerHTML = input.value;
    }
}