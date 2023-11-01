<template>
    <div class="catalogo-livros">
        <h2>Catálogo de Livros</h2>
        <input v-model="novoLivro" @keyup.enter="adicionarLivro" placeholder="Digite um novo Livro" />
        <ul>
            <li v-for="(livro, index) in livros" :key="index">
                {{ livro.titulo }}
                <button @click="alternarStatusLivro(livro)">Marcar como {{
                    livro.visto ? 'Não lido' : 'lido' }}</button>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            novoLivro: "",
            livros: [],
        };
    },

    methods: {
        adicionarLivro() {
            if (this.novoLivro.trim() !== "") {
                this.livros.push({ titulo: this.novoLivro, visto: false });
                this.novoLivro = "";
            }
        },
        alternarStatusLivro(livro) {
            livro.visto = !livro.visto;
        },

    },
};
</script>
    
<style scoped>
.catalogo-filmes, .catalogo-livros {
    margin: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
}
</style>