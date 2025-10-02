  listarTodos(): Movie[] {
    return this.filmes;
  }
  buscarPorTitulo(termo: string): Movie[] {
    const termoBusca = termo.toLowerCase();
    return this.filmes.filter(filme => 
      filme.titulo.toLowerCase().includes(termoBusca)
    );
  }
  filtrarPorGenero(genero: string): Movie[] {
    return this.filmes.filter(filme => 
      filme.genero.toLowerCase() === genero.toLowerCase()
    );
  }
  adicionarFilme(filme: Omit<Movie, 'id'>): void {
    const novoFilme: Movie = {
      ...filme,
      id: Date.now().toString()
    };
    this.filmes.push(novoFilme);
    this.salvarFilmes();
  }
  removerFilme(id: string): boolean {
    const index = this.filmes.findIndex(f => f.id === id);
    if (index !== -1) {
      this.filmes.splice(index, 1);
      this.salvarFilmes();
      return true;
    }
    return false;
  }
  obterGeneros(): string[] {
    const generos = this.filmes.map(f => f.genero);
    return [...new Set(generos)].sort();
  }
}
