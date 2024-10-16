document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularioVeiculo');
    const ul = document.getElementById('ulVeiculos');

    const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    veiculos.forEach(veiculo => adicionarVeiculo(veiculo.nome, veiculo.ano, veiculo.cor, veiculo.imagem));

    function adicionarVeiculo(nome, ano, cor, imagem) {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${imagem}" alt="${nome}" class="veiculo-imagem" />
            <div>
                <h3>Modelo: ${nome}</h3>
                <h4>Ano: ${ano}</h4>
                <h4>Cor: ${cor}</h4>
            </div>
        `;
        ul.appendChild(li);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const ano = document.getElementById('ano').value;
        const cor = document.getElementById('cor').value;
        const imagem = document.getElementById('imagem').value;

        const veiculo = { nome, ano, cor, imagem };
        const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
        veiculos.push(veiculo);
        localStorage.setItem('veiculos', JSON.stringify(veiculos));

        adicionarVeiculo(nome, ano, cor, imagem);
        this.reset();
    });
});
