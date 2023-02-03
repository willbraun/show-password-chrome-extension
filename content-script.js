;(function () {
	const passwords = Array.from(document.querySelectorAll("input[type='password']"))

	if (passwords.length === 0) return

	const button = document.createElement('button')
	button.type = 'button'
	button.innerText = 'Show Password'
	button.classList.add('show-passwords-abcxyz')

	const togglePassword = (password, event) => {
		if (password.type === 'password') {
			password.type = 'text'
			event.target.innerText = 'Hide Password'
		} else {
			password.type = 'password'
			event.target.innerText = 'Show Password'
		}
	}

	for (const password of passwords) {
		button.addEventListener('click', event => togglePassword(password, event))
		password.insertAdjacentElement('afterend', button)
	}
})()
