
const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password }, // <----- занчення перевила в об'єкт
    } = event.currentTarget

    if (email.value === '' || password.value === '') { //<-----у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value } //<-----кщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
    
    console.log(userDetails)
    event.currentTarget.reset()
}




// const form = querySelector('js-register-form')
// form.addEventListener('submit', onFormSubmit )
// function onFormSubmit(event ) {
//     event.preventDefault(); //<---отмена действия по умолчанию
// }
// //  как отправлять форму