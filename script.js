let lista = JSON.parse(localStorage.getItem("dados")) || [];

function render() {
    const area = document.getElementById("lista");
    area.innerHTML = "";

    lista.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <strong>${item.descricao}</strong><br>
            Valor: R$ ${item.valor}<br>
            Categoria: ${item.categoria}
        `;
        area.appendChild(div);
    });
}

render();

document.getElementById("add-btn").onclick = () => {
    document.getElementById("form-container").classList.remove("hidden");
};

document.getElementById("fechar").onclick = () => {
    document.getElementById("form-container").classList.add("hidden");
};

document.getElementById("salvar").onclick = () => {
    const descricao = document.getElementById("descricao").value;
    const valor = document.getElementById("valor").value;
    const categoria = document.getElementById("categoria").value;

    if (!descricao || !valor || !categoria) {
        alert("Preencha todos os campos!");
        return;
    }

    lista.push({ descricao, valor, categoria });

    localStorage.setItem("dados", JSON.stringify(lista));

    render();

    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("categoria").value = "";

    document.getElementById("form-container").classList.add("hidden");
};
