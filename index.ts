import promptSync from 'prompt-sync';

const prompt = promptSync();

console.log("Catálogo De Filmes - Teste");

const nomeFilme: string = prompt('Digite o nome de um filme: ') || 'Filme Desconhecido';
const anoString: string = prompt('Digite o ano do filme: ') || '2024';
const ano: number = parseInt(anoString);

interface Filme {
    nome: string;
    ano: number;
    genero?: string;
}

const filme: Filme = {
    nome: nomeFilme,
    ano: ano,
    genero: "Ação"
};

console.log("\n🎬 Filme Cadastrado:");
console.log(`Nome: ${filme.nome}`);
console.log(`Ano: ${filme.ano}`);
console.log(`Gênero: ${filme.genero}`);