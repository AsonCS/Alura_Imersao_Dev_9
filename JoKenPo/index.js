;(() => {
	sessionStorage.removeItem('allowed')
	window.computerChanceToTie = 0.2
	window.computerChanceToWin = 0.1
})()

/**
 *
 * @param {'🪨' | '🧻' | '✂️'} playerChoice
 */
function play(playerChoice) {
	if (!sessionStorage.getItem('allowed') && !confirm('Are older than 18?')) {
		alert('You are not allowed to play!')
		return
	}
	sessionStorage.setItem('allowed', 'allowed')

	const gameResult = game(playerChoice)
	const result = {
		choices: `Computer chose ${gameResult.computerChoice} and you chose ${playerChoice}`,
		result: gameResult.result < 0 ? 'You lost!' : gameResult.result > 0 ? 'You won!' : 'Tie!',
		computerChanceToTie: window.computerChanceToTie,
		computerChanceToWin: window.computerChanceToWin,
	}
	console.log(result)
	document.getElementById('computer').innerText = result.choices
	document.getElementById('result').innerText = result.result
}

function test() {
	const result = {
		lost: [],
		tie: [],
		won: [],
	}
	const totalText = '100.000'
	const total = parseInt(totalText.replace('.', ''))
	for (let i = 0; i < total; i++) {
		const temp = Math.floor(Math.random() * 3)
		const playerChoice = temp === 0 ? '🪨' : temp === 1 ? '🧻' : '✂️'
		const gameResult = game(playerChoice)
		if (gameResult.result < 0) {
			result.lost.push({
				playerChoice: playerChoice,
				computerChoice: gameResult.computerChoice,
			})
		} else if (gameResult.result > 0) {
			result.won.push({
				playerChoice: playerChoice,
				computerChoice: gameResult.computerChoice,
			})
		} else {
			result.tie.push({
				playerChoice: playerChoice,
				computerChoice: gameResult.computerChoice,
			})
		}
	}

	result.lostPercent = result.lost.length / total
	result.wonPercent = result.won.length / total
	result.tiePercent = result.tie.length / total
	console.log(`${totalText} Test Results:`)
	console.log('Computer Chance to Tie: ', window.computerChanceToTie)
	console.log('Computer Chance to Win: ', window.computerChanceToWin)
	console.log(
		`Change computer chances using terminal variables: window.computerChanceToTie and window.computerChanceToWin`
	)
	console.log('Lost Percent: ', result.lostPercent)
	console.log('Won Percent: ', result.wonPercent)
	console.log('Tie Percent: ', result.tiePercent)
	console.log('Lost Games: ', result.lost)
	console.log('Won Games: ', result.won)
	console.log('Tie Games: ', result.tie)
}

/**
 *
 * @param {'🪨' | '🧻' | '✂️'} playerChoice
 * @returns {{result: string, computerChoice: string}}
 */
function game(playerChoice) {
	const temp = Math.floor(Math.random() * 3)
	const result = {
		result: -1,
		computerChoice: temp === 0 ? '🪨' : temp === 1 ? '🧻' : '✂️',
	}

	if (Math.random() < window.computerChanceToWin) {
		result.result = -1
		return result
	}

	if (Math.random() < window.computerChanceToTie) {
		result.result = 0
		return result
	}

	switch (result.computerChoice) {
		case '🪨':
			switch (playerChoice) {
				case '🪨':
					result.result = 0
					break
				case '🧻':
					result.result = 1
					break
				case '✂️':
					result.result = -1
					break
			}
			break
		case '🧻':
			switch (playerChoice) {
				case '🪨':
					result.result = -1
					break
				case '🧻':
					result.result = 0
					break
				case '✂️':
					result.result = 1
					break
			}
			break
		case '✂️':
			switch (playerChoice) {
				case '🪨':
					result.result = 1
					break
				case '🧻':
					result.result = -1
					break
				case '✂️':
					result.result = 0
					break
			}
			break
	}

	return result
}
