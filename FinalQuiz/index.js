// PARTE 1: Lista de perguntas e respostas
const perguntas = [
	{
		pergunta: 'Qual é a capital da França?',
		respostas: [
			{
				opcao: 'Paris',
				correto: true,
			},
			{
				opcao: 'Londres',
				correto: false,
			},
			{
				opcao: 'Berlim',
				correto: false,
			},
			{
				opcao: 'Madri',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o maior planeta do nosso sistema solar?',
		respostas: [
			{
				opcao: 'Terra',
				correto: false,
			},
			{
				opcao: 'Marte',
				correto: false,
			},
			{
				opcao: 'Júpiter',
				correto: true,
			},
			{
				opcao: 'Saturno',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Quem pintou a Mona Lisa?',
		respostas: [
			{
				opcao: 'Michelangelo',
				correto: false,
			},
			{
				opcao: 'Leonardo da Vinci',
				correto: true,
			},
			{
				opcao: 'Rafael',
				correto: false,
			},
			{
				opcao: 'Van Gogh',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o símbolo químico da água?',
		respostas: [
			{
				opcao: 'O2',
				correto: false,
			},
			{
				opcao: 'CO2',
				correto: false,
			},
			{
				opcao: 'H2O',
				correto: true,
			},
			{
				opcao: 'NaCl',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Em que ano o Brasil se tornou independente?',
		respostas: [
			{
				opcao: '1808',
				correto: false,
			},
			{
				opcao: '1822',
				correto: true,
			},
			{
				opcao: '1889',
				correto: false,
			},
			{
				opcao: '1964',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o oceano mais extenso da Terra?',
		respostas: [
			{
				opcao: 'Atlântico',
				correto: false,
			},
			{
				opcao: 'Índico',
				correto: false,
			},
			{
				opcao: 'Pacífico',
				correto: true,
			},
			{
				opcao: 'Ártico',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Quem escreveu a peça "Romeu e Julieta"?',
		respostas: [
			{
				opcao: 'Charles Dickens',
				correto: false,
			},
			{
				opcao: 'Jane Austen',
				correto: false,
			},
			{
				opcao: 'William Shakespeare',
				correto: true,
			},
			{
				opcao: 'Leo Tolstoy',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é a moeda oficial do Japão?',
		respostas: [
			{
				opcao: 'Yuan',
				correto: false,
			},
			{
				opcao: 'Won',
				correto: false,
			},
			{
				opcao: 'Iene',
				correto: true,
			},
			{
				opcao: 'Dólar',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o maior mamífero terrestre?',
		respostas: [
			{
				opcao: 'Rinoceronte',
				correto: false,
			},
			{
				opcao: 'Girafa',
				correto: false,
			},
			{
				opcao: 'Elefante Africano',
				correto: true,
			},
			{
				opcao: 'Hipopótamo',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Quem descobriu a América?',
		respostas: [
			{
				opcao: 'Pedro Álvares Cabral',
				correto: false,
			},
			{
				opcao: 'Vasco da Gama',
				correto: false,
			},
			{
				opcao: 'Cristóvão Colombo',
				correto: true,
			},
			{
				opcao: 'Américo Vespúcio',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é a montanha mais alta do mundo?',
		respostas: [
			{
				opcao: 'K2',
				correto: false,
			},
			{
				opcao: 'Kangchenjunga',
				correto: false,
			},
			{
				opcao: 'Monte Everest',
				correto: true,
			},
			{
				opcao: 'Lhotse',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o nome do primeiro presidente do Brasil?',
		respostas: [
			{
				opcao: 'Getúlio Vargas',
				correto: false,
			},
			{
				opcao: 'Juscelino Kubitschek',
				correto: false,
			},
			{
				opcao: 'Marechal Deodoro da Fonseca',
				correto: true,
			},
			{
				opcao: 'Café Filho',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o gás mais abundante na atmosfera terrestre?',
		respostas: [
			{
				opcao: 'Oxigênio',
				correto: false,
			},
			{
				opcao: 'Dióxido de Carbono',
				correto: false,
			},
			{
				opcao: 'Nitrogênio',
				correto: true,
			},
			{
				opcao: 'Hélio',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Quem desenvolveu a teoria da relatividade?',
		respostas: [
			{
				opcao: 'Isaac Newton',
				correto: false,
			},
			{
				opcao: 'Galileu Galilei',
				correto: false,
			},
			{
				opcao: 'Albert Einstein',
				correto: true,
			},
			{
				opcao: 'Stephen Hawking',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o rio mais longo do mundo?',
		respostas: [
			{
				opcao: 'Rio Amazonas',
				correto: true,
			},
			{
				opcao: 'Rio Nilo',
				correto: false,
			},
			{
				opcao: 'Rio Yangtzé',
				correto: false,
			},
			{
				opcao: 'Rio Mississipi',
				correto: false,
			},
		],
	},
	{
		pergunta:
			'Qual é o nome do navegador português que liderou a primeira viagem de circum-navegação ao mundo?',
		respostas: [
			{
				opcao: 'Vasco da Gama',
				correto: false,
			},
			{
				opcao: 'Bartolomeu Dias',
				correto: false,
			},
			{
				opcao: 'Fernão de Magalhães',
				correto: true,
			},
			{
				opcao: 'Pedro Álvares Cabral',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é a capital da Austrália?',
		respostas: [
			{
				opcao: 'Sydney',
				correto: false,
			},
			{
				opcao: 'Melbourne',
				correto: false,
			},
			{
				opcao: 'Canberra',
				correto: true,
			},
			{
				opcao: 'Brisbane',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o menor país do mundo em área?',
		respostas: [
			{
				opcao: 'Mônaco',
				correto: false,
			},
			{
				opcao: 'San Marino',
				correto: false,
			},
			{
				opcao: 'Vaticano',
				correto: true,
			},
			{
				opcao: 'Liechtenstein',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o nome do primeiro ser vivo a ir para o espaço?',
		respostas: [
			{
				opcao: 'Yuri Gagarin',
				correto: false,
			},
			{
				opcao: 'Neil Armstrong',
				correto: false,
			},
			{
				opcao: 'Laika',
				correto: true,
			},
			{
				opcao: 'Alan Shepard',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o metal líquido à temperatura ambiente?',
		respostas: [
			{
				opcao: 'Ferro',
				correto: false,
			},
			{
				opcao: 'Ouro',
				correto: false,
			},
			{
				opcao: 'Mercúrio',
				correto: true,
			},
			{
				opcao: 'Chumbo',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é a capital da Argentina?',
		respostas: [
			{
				opcao: 'Buenos Aires',
				correto: true,
			},
			{
				opcao: 'Córdoba',
				correto: false,
			},
			{
				opcao: 'Rosário',
				correto: false,
			},
			{
				opcao: 'Mendoza',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Quem escreveu o livro "Dom Quixote"?',
		respostas: [
			{
				opcao: 'Gabriel García Márquez',
				correto: false,
			},
			{
				opcao: 'Miguel de Cervantes',
				correto: true,
			},
			{
				opcao: 'Jorge Luis Borges',
				correto: false,
			},
			{
				opcao: 'Pablo Neruda',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o símbolo químico do oxigênio?',
		respostas: [
			{
				opcao: 'Ox',
				correto: false,
			},
			{
				opcao: 'O',
				correto: true,
			},
			{
				opcao: 'Og',
				correto: false,
			},
			{
				opcao: 'Oi',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Em que ano ocorreu a Queda do Muro de Berlim?',
		respostas: [
			{
				opcao: '1979',
				correto: false,
			},
			{
				opcao: '1985',
				correto: false,
			},
			{
				opcao: '1989',
				correto: true,
			},
			{
				opcao: '1991',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o segundo maior planeta do nosso sistema solar?',
		respostas: [
			{
				opcao: 'Marte',
				correto: false,
			},
			{
				opcao: 'Saturno',
				correto: true,
			},
			{
				opcao: 'Urano',
				correto: false,
			},
			{
				opcao: 'Netuno',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o principal ingrediente do guacamole?',
		respostas: [
			{
				opcao: 'Tomate',
				correto: false,
			},
			{
				opcao: 'Cebola',
				correto: false,
			},
			{
				opcao: 'Abacate',
				correto: true,
			},
			{
				opcao: 'Pimenta',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Quem foi o primeiro ser humano a pisar na Lua?',
		respostas: [
			{
				opcao: 'Buzz Aldrin',
				correto: false,
			},
			{
				opcao: 'Yuri Gagarin',
				correto: false,
			},
			{
				opcao: 'Neil Armstrong',
				correto: true,
			},
			{
				opcao: 'Michael Collins',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é a capital do Canadá?',
		respostas: [
			{
				opcao: 'Toronto',
				correto: false,
			},
			{
				opcao: 'Montreal',
				correto: false,
			},
			{
				opcao: 'Ottawa',
				correto: true,
			},
			{
				opcao: 'Vancouver',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o nome do processo pelo qual as plantas produzem seu próprio alimento?',
		respostas: [
			{
				opcao: 'Respiração',
				correto: false,
			},
			{
				opcao: 'Transpiração',
				correto: false,
			},
			{
				opcao: 'Fotossíntese',
				correto: true,
			},
			{
				opcao: 'Germinação',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o maior deserto do mundo (em área)?',
		respostas: [
			{
				opcao: 'Deserto do Saara',
				correto: false,
			},
			{
				opcao: 'Deserto da Arábia',
				correto: false,
			},
			{
				opcao: 'Deserto da Antártida',
				correto: true,
			},
			{
				opcao: 'Deserto de Gobi',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é a cor primária que, misturada com o azul, forma o verde?',
		respostas: [
			{
				opcao: 'Vermelho',
				correto: false,
			},
			{
				opcao: 'Amarelo',
				correto: true,
			},
			{
				opcao: 'Laranja',
				correto: false,
			},
			{
				opcao: 'Roxo',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual foi a primeira Copa do Mundo de futebol?',
		respostas: [
			{
				opcao: '1930',
				correto: true,
			},
			{
				opcao: '1934',
				correto: false,
			},
			{
				opcao: '1938',
				correto: false,
			},
			{
				opcao: '1950',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Quem foi o líder da luta contra o apartheid na África do Sul?',
		respostas: [
			{
				opcao: 'Mahatma Gandhi',
				correto: false,
			},
			{
				opcao: 'Martin Luther King Jr.',
				correto: false,
			},
			{
				opcao: 'Nelson Mandela',
				correto: true,
			},
			{
				opcao: 'Desmond Tutu',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o nome do rio que atravessa Londres?',
		respostas: [
			{
				opcao: 'Rio Sena',
				correto: false,
			},
			{
				opcao: 'Rio Reno',
				correto: false,
			},
			{
				opcao: 'Rio Tâmisa',
				correto: true,
			},
			{
				opcao: 'Rio Danúbio',
				correto: false,
			},
		],
	},
	{
		pergunta:
			'Qual é o nome do famoso quadro de Edvard Munch que retrata uma figura em angústia?',
		respostas: [
			{
				opcao: 'A Noite Estrelada',
				correto: false,
			},
			{
				opcao: 'O Grito',
				correto: true,
			},
			{
				opcao: 'Guernica',
				correto: false,
			},
			{
				opcao: 'O Beijo',
				correto: false,
			},
		],
	},
	{
		pergunta:
			'Qual é a unidade básica de medida de comprimento no Sistema Internacional de Unidades (SI)?',
		respostas: [
			{
				opcao: 'Quilômetro',
				correto: false,
			},
			{
				opcao: 'Centímetro',
				correto: false,
			},
			{
				opcao: 'Metro',
				correto: true,
			},
			{
				opcao: 'Milímetro',
				correto: false,
			},
		],
	},
	{
		pergunta:
			'Qual é o nome do instrumento musical de cordas friccionadas mais agudo da família do violino?',
		respostas: [
			{
				opcao: 'Violoncelo',
				correto: false,
			},
			{
				opcao: 'Contrabaixo',
				correto: false,
			},
			{
				opcao: 'Violino',
				correto: true,
			},
			{
				opcao: 'Viola',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o nome da primeira mulher a ganhar um Prêmio Nobel?',
		respostas: [
			{
				opcao: 'Marie Curie',
				correto: true,
			},
			{
				opcao: 'Rosalind Franklin',
				correto: false,
			},
			{
				opcao: 'Jane Goodall',
				correto: false,
			},
			{
				opcao: 'Dorothy Hodgkin',
				correto: false,
			},
		],
	},
	{
		pergunta: 'Qual é o nome do tratado que pôs fim à Primeira Guerra Mundial?',
		respostas: [
			{
				opcao: 'Tratado de Versalhes',
				correto: true,
			},
			{
				opcao: 'Pacto de Varsóvia',
				correto: false,
			},
			{
				opcao: 'Tratado de Tordesilhas',
				correto: false,
			},
			{
				opcao: 'Acordo de Munique',
				correto: false,
			},
		],
	},
	{
		pergunta:
			'Qual é o nome da camada da atmosfera onde ocorre a maioria dos fenômenos meteorológicos?',
		respostas: [
			{
				opcao: 'Estratosfera',
				correto: false,
			},
			{
				opcao: 'Mesosfera',
				correto: false,
			},
			{
				opcao: 'Troposfera',
				correto: true,
			},
			{
				opcao: 'Termosfera',
				correto: false,
			},
		],
	},
]

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector('.pergunta')
const respostasElemento = document.querySelector('.respostas')
const progressoElemento = document.querySelector('.progresso')
const textoFinal = document.querySelector('.fim span')
const conteudo = document.querySelector('.conteudo')
const conteudoFinal = document.querySelector('.fim')

// PARTE 3: Variáveis para controle do jogo
// let indiceAtual = 0 // Índice da pergunta atual
let acertos = 0 // Contador de acertos
let erros = 0 // Contador de acertos
const total = 10

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
	const indiceAtual = Math.floor(Math.random() * perguntas.length) + 1
	progressoElemento.innerHTML = `${acertos + erros + 1}/${total}` // Atualiza o progresso
	const perguntaAtual = perguntas.splice(indiceAtual, 1)[0] // Pega a pergunta atual
	perguntaElemento.innerHTML = perguntaAtual.pergunta // Exibe a pergunta

	respostasElemento.innerHTML = '' // Limpa as respostas anteriores

	// Percorre todas as respostas da pergunta atual
	for (let i = 0; i < perguntaAtual.respostas.length; i++) {
		// Pega a resposta atual com base no índice 'i'
		const resposta = perguntaAtual.respostas[i]
		// Cria um novo elemento 'button' (botão)
		const botao = document.createElement('button')
		// Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
		botao.classList.add('botao-resposta')
		// Define o texto do botão com a opção de resposta (resposta.opcao)
		botao.innerText = resposta.opcao
		// Adiciona um evento de clique no botão
		botao.onclick = function () {
			// Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
			if (resposta.correto) {
				//acertos = acertos + 1
				acertos++ // Incrementa o contador de acertos
			} else {
				erros++
			}

			// Avança para a próxima pergunta
			// indiceAtual++

			// Se ainda houver perguntas, carrega a próxima pergunta
			if (acertos + erros < 10) {
				carregarPergunta() // Carrega a próxima pergunta
			} else {
				// Se não houver mais perguntas, finaliza o jogo
				finalizarJogo()
			}
		}

		// Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
		respostasElemento.appendChild(botao)
	}
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
	textoFinal.innerHTML = `Você acertou ${acertos} de ${total}` // Exibe o resultado
	conteudo.style.display = 'none' // Esconde as perguntas
	conteudoFinal.style.display = 'flex' // Mostra a tela final

	const botao = document.createElement('button')
	botao.classList.add('botao-resposta')
	botao.innerText = 'Jogar Novamente'
	botao.onclick = function () {
		location.reload()
	}
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta()
