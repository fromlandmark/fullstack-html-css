O objectivo deste exercício é realizar um design system básico.
A apresentação deste sistema está em:
https://www.figma.com/file/udWyes5Zfj14qQDmD6oUzL/Edit---Design-Systems?type=design&node-id=2%3A783&mode=dev&t=RszSJCDWvtv4ecS1-1

Temos que construir os seguintes componentes:

- Buttons
- Avatar
- Inputs

- Tabs, são extras, caso se queiram aventurar. Não se preocupem senão o fizerem.

Algumas sugestões:

1 - Utilização de várias folhas de CSS é convencional para conseguir separar as responsabilidades de cada componente.

```html
// Conteúdo de CSS Global, como tipografia, gestão de margens da página etc.
<link rel="stylesheet" href="styles/globals.css" />
// Conteúdo somente relacionado com o Botão
<link rel="stylesheet" href="styles/button.css" />
// Conteúdo somente relacionado com o Input
<link rel="stylesheet" href="styles/input.css" />
// Conteúdo somente relacionado com o Avatar
<link rel="stylesheet" href="styles/avatar.css" />
```

2 - Utilização de Icones:

- Pode ser através de SVG, levantem a questão se quiserem optar por esta estratégia.

- Utilização de bibliotecas, no ficheiro que vos passo já existe uma pré instalada, chama-se feather.
  A Feather é uma biblioteca que insere icones através da tag <i>, por exemplo:

```html
<!-- Isto é um icone de database, a utilização do atributo [data-feather="name"] dentro de um <i></i> chama a bibilioteca e cria o componente -->

<i data-feather="database"></i>
```

mais informação em https://feathericons.com/

3 - As imagens para o avatar já se encontram na pasta assets

4 - Todo o código deve entrar dentro dos wrappers já definidos:

```html
<div class="wrapper">
	<h3 class="wrapper__title">Inputs</h3>
	<div class="wrapper__content">
		<div class="flex">
			<!-- Conteúdo aqui -->
		</div>
	</div>
</div>
```

5 - Vê com atenção o exemplo, identifica os elementos, identifica estruturas base, modificadores, olha para além dos componentes que tens que construir. Utiliza ideologias como o flex que temos vindo a introduzir lentamente.

6 - Experimenta, levanta dúvidas. Debate. Não é sobre fazer certo ou errado. É sobre entender o que se está a passar. É sobre entender que todas as acções têm consequências e cada declaração de CSS e cada elemento de html têm o seu propósito.
