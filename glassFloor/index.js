const questions = [
	'Se o vinho é líquido, como pode existir vinho seco?',
	'Por que o céu é azul?',
	'Por que o mar é salgado?',
	'Por que o sol brilha?',
	'Por que a lua brilha?',
	'Por que as estrelas brilham?',
	'Por que o fogo queima?',
	'Por que o gelo é frio?',
	'Por que o vento sopra?',
	'Por que a chuva cai?',
	'Por que o arco-íris aparece?',
	'Por que as folhas das árvores caem?',
	'Se todos os direitos são reservados…. os canhotos são desinibidos?',
	'Por que a palavra grande é menor do que a palavra pequeno ?',
	'Onde está a outra metade do Oriente Médio?',
	'Se cárcere e prisão são sinônimos, por que carcereiro e prisioneiro não são?',
	'Se uma pessoa está pelada, ela pode levar um tiro à queima-roupa?',
	'Qual o sinônimo de sinônimo?',
	'Por que abril é o único mês que não termina com O?',
	'Será que a palavra dicionário existe no dicionário?',
	'Qual é o oposto da palavra oposto?',
	'Se alguma palavra for escrita de forma errada no dicionário, quem irá saber?',
	'Por que é que quem trabalha no mar se chama marujo e quem trabalha no ar não se chama araújo?',
	'Por que é que a laranja se chama laranja e o limão não se chama verde?',
	'Por que é que se chama discoteca se o disco toca e não teca?',
	'Será que é meio ambiente por que já destruímos a metade?',
	'Por que chamam nosso planeta de Terra, se ele é formado por 3/4 de água?',
	'Por que o quadro-negro é verde?',
	'Por que Zeca Pagodinho canta samba e o Exaltasamba canta pagode?',
	'Por que o milho verde é amarelo?',
	'Como se chama a torta holandesa na Holanda?',
	'Na Rússia, como são chamadas as montanhas-russas?',
	'O que existiu primeiro, a cor laranja ou a fruta laranja?',
	'Por que a caixa-preta dos aviões, na verdade, é vermelha?',
	'Por que o Halls preto é da cor branca?',
	'Por que o remédio se chama “Boa noite, Cinderela”, se, nas histórias, quem dormia era a Bela Adormecida?',
	'Que nome é usado para a joaninha macho?',
	'O que as ovelhas contam para pegarem no sono?',
	'Peixes bebem água?',
	'Se a vaca come grama e bebe água, por que ela produz leite e não chá?',
	'Pinguins têm joelhos?',
	'Como saber se a carne é de chester se ninguém nunca viu um chester?',
	'Se as pessoas vieram dos macacos, por que ainda existem macacos?',
	'Por que não existe comida de gato com sabor de rato?',
	'Se uma tartaruga ficar sem a sua carapaça, no fim, ela fica nua ou sem casa?',
	'Se o pato perder a pata, ele ficará manco ou viúvo?',
	'O que devemos fazer quando virmos um animal em extinção, prestes a devorar outro animal que também está em extinção?',
	'Se uma vaca tivesse crise de riso, sairia leite pelo nariz?',
	'Se as penas nos fazem cócegas, elas também fazem cócegas nos pássaros?',
	'Por que baixamos a cabeça para correr na chuva… molha menos?',
	'Por que é que quando você para no sinal vermelho, há sempre alguém no carro do lado ‘limpando o salão’?',
	'Por que as pessoas apertam o controle remoto com mais força quando uma pilha está fraca?',
	'Por que quando alguém nos pede para ajudar a procurar um objeto perdido, temos a mania de perguntar: Onde foi que você perdeu?',
	'É possível chorar debaixo de água?',
	'Se depois do banho estamos limpos, por que lavar uma toalha?',
	'Por que as crianças participam do Halloween, quando sempre dizemos para que não aceitem doces de estranhos?',
	'Por que quando dormimos bem falamos que “dormimos como um anjo”, se nunca vimos um anjo dormindo?',
	'Por que quando éramos crianças pintávamos as nuvens de azul e o céu de branco, quando na verdade é o inverso?',
	'Por que arrotar é considerado super nojento e espirrar não?',
]

const playerInput = document.getElementById('name')
const questionSpan = document.getElementById('question')
const answerInput = document.getElementById('answer')

let round = 0
let points = 0
let wrongs = 0

function getOneQuestion() {
	const index = Math.floor(Math.random() * questions.length)
	const question = questions.splice(index, 1)[0]
	console.log('length', questions.length)

	questionSpan.innerHTML = `Rodada ${round + 1}, pergunta:<br/><br/>${question}`

	round++
}

function jogar() {
	getOneQuestion()

	if (answerInput.value.length > 0 && Math.random() < 0.7) {
		points++
	} else {
		wrongs++
	}

	if (questions.length === 0) {
		alert(`Você acertou todas as perguntas!`)
		localStorage.setItem(playerInput.value, points)
		location.reload()
	}

	if (wrongs > 3) {
		alert(`Você perdeu!, pontos feitos: ${points}`)
		localStorage.setItem(playerInput.value, points)
		location.reload()
	}

	console.log('points', points)
	console.log('wrongs', wrongs)
}

;(() => {
	getOneQuestion()

	const history = Object.entries(localStorage).reduce((acc, [key, value]) => {
		acc += `<li>Player "${key}" made ${value} points</li>`
		return acc
	}, '')
	console.log('history', history)
	document.getElementById('last_players').innerHTML = history
})()
