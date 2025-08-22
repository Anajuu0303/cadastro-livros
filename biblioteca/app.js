new Vue({
  el: "#app",
  data: {
    livros: [],
    novoLivro: { titulo: "", autor: "", data: "" },
    filtroMes: "",
    meses: [
      { value: "01", nome: "Janeiro" },
      { value: "02", nome: "Fevereiro" },
      { value: "03", nome: "Março" },
      { value: "04", nome: "Abril" },
      { value: "05", nome: "Maio" },
      { value: "06", nome: "Junho" },
      { value: "07", nome: "Julho" },
      { value: "08", nome: "Agosto" },
      { value: "09", nome: "Setembro" },
      { value: "10", nome: "Outubro" },
      { value: "11", nome: "Novembro" },
      { value: "12", nome: "Dezembro" }
    ],
    apiUrl: "http://localhost:8080/livros" // Agora Spring Boot
  },
  computed: {
    livrosFiltrados() {
      if (!this.filtroMes) return this.livros;
      return this.livros.filter(l => {
        if (!l.data) return false;
        const mes = l.data.split("-")[1];
        return mes === this.filtroMes;
      });
    }
  },
  methods: {
    async carregarLivros() {
      try {
        const response = await axios.get(this.apiUrl);
        this.livros = response.data;
      } catch (err) {
        console.error("Erro ao carregar livros:", err);
      }
    },
    async salvarLivro() {
      try {
        const { titulo, autor, data } = this.novoLivro;
        if (!titulo || !autor || !data) {
          alert("Preencha todos os campos!");
          return;
        }
        const response = await axios.post(this.apiUrl, { titulo, autor, data });
        this.livros.push(response.data);
        this.novoLivro = { titulo: "", autor: "", data: "" };
      } catch (err) {
        console.error("Erro ao salvar livro:", err);
      }
    },
    async removerLivro(id) {
      try {
        await axios.delete(`${this.apiUrl}/${id}`);
        this.livros = this.livros.filter(l => l.id !== id);
      } catch (err) {
        console.error("Erro ao remover livro:", err);
      }
    },
    formatarData(data) {
      if (!data) return "";
      const [ano, mes, dia] = data.split("-");
      return `${dia}/${mes}/${ano}`;
    }
  },
  mounted() {
    this.carregarLivros();
  }
});
