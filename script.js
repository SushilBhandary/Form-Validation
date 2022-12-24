

const singup = document.querySelector('#singup')
let e1 = document.querySelector('#e1')
let e6 = document.querySelector('#e6')
let e3 = document.querySelector('#e3')
let e4 = document.querySelector('#e4')
let e5 = document.querySelector('#e5')
let button = document.querySelector('#butt')
let butLeft = true

const butt = () => {
    if (butLeft) {
        button.style.textAlign = "right";
        butLeft = false
    } else {
        button.style.textAlign = "left";
        butLeft = true
    }
}


singup.addEventListener('mouseover', () => {
    let FirstName = document.querySelector('#FirstName').value
    let LastName = document.querySelector('#LastName').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let confirmpassword = document.querySelector('#confirmpassword').value
    let terms = document.querySelector('#terms').checked
    if (!FirstName || !LastName) {
        e1.style.display = 'block'
        e1.innerHTML = 'Please enter First Name or Last Name '
    } else {
        e1.style.display = 'none'
    }

    if (!email ) {
        e3.style.display = 'block'
        e3.innerHTML = 'Please enter email '
    }else {
        e3.style.display = 'none'
    }

    if (!password ) {
        e4.style.display = 'block'
        e4.innerHTML = 'Please enter Password '
    }else {
        e4.style.display = 'none'
    }

    if (!confirmpassword ) {
        e5.style.display = 'block'
        e5.innerHTML = 'Please enter Confirm Password '
    }else {
        e5.style.display = 'none'
    }

    if (!terms ) {
        e6.style.display = 'block'
        e6.innerHTML = 'Please enter Agree the terms and conditions '
    }else {
        e6.style.display = 'none'
    }

    if (!FirstName || !LastName || !email || !password || !confirmpassword || !terms) {
        butt()
    }

    if (password && confirmpassword) {
        if ( password != confirmpassword ) {
            e5.style.display = 'block'
            e5.innerHTML = 'Password does not match'
        } else {
            e5.style.display = 'none'
        }
    }
})


singup.addEventListener('click', () => {
    alert('Account have been created successfully')
} )






