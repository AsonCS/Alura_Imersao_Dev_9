/**
 * @type string[]
 */
const charactersList = [
	'🐶',
	'🐱',
	'🐭',
	'🐫',
	'🐰',
	'🦊',
	'🐻',
	'🐼',
	'🦬',
	'🐨',
	'🐯',
	'🦁',
	'🐮',
	'🐷',
	'🐸',
	'🐵',
	'🐔',
]

;(() => {
	// console.log(charactersList)
	// console.log(characters /* document.getElementById('characters') */)
	characters.innerHTML = charactersList.reduce((acc, char) => {
		acc += `<div id="${char}" class="character" onclick="onSelect(this)">${char}</div>`
		return acc
	}, '')
})()

/**
 *
 * @param {HTMLDivElement} element
 */
function onSelect(element) {
	if (element.classList.contains('selected')) {
		element.classList.remove('selected')
		return
	}

	const selectedList = document.querySelectorAll('.selected')
	if (selectedList.length === 3) {
		selectedList[0].classList.remove('selected')
	}

	element.classList.add('selected')
}

function onPlay() {
	const selectedList = document.querySelectorAll('.selected')
	if (selectedList.length !== 3) {
		alert('Selecione 3 personagens!')
	}

	const choicesUser = []
	const choicesComputer = []
	const temp = charactersList

	selectedList.forEach((el) => {
		const char = el.innerHTML
		temp.splice(temp.indexOf(char), 1)[0]
		choicesUser.push(char)
	})

	for (let i = 0; i < selectedList.length; i++) {
		const idx = Math.floor(Math.random() * temp.length) + 1
		const choice = temp.splice(idx, 1)[0]
		window[choice].classList.add('selectedComputer')
		choicesComputer.push(choice)
	}

	let userWins = 0
	for (let i = 0; i < 3; i++) {
		let winner = ''
		if (Math.random() < 0.4) {
			userWins++
			winner = choicesUser[i]
		} else {
			winner = choicesComputer[i]
		}
		resultadoFinal.innerHTML += `User (${choicesUser[i]}) vs Computer (${choicesComputer[i]}) => ${winner}<br>`
	}

	if (userWins > 1) {
		resultadoFinal.innerHTML += `<br>Você ganhou!`
	} else {
		resultadoFinal.innerHTML += `<br>Você perdeu!`
	}
}

function onReset() {
	location.reload()
}
