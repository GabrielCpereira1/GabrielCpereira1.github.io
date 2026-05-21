const form = document.querySelector('form');
const container = document.querySelector("#tarefas")

let tarefas = localStorage.getItem("tarefas") 
  ? JSON.parse(localStorage.getItem("tarefas")) 
  : [];


const mostrarTarefas = () => {
    container.innerHTML = "";
    tarefas.forEach(e => {
      container.innerHTML += `
        <li id="${e.id}" class="w-full bg-gray-800 rounded-xl p-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
        <input 
            type="checkbox" 
            class="check"
            ${e.check ? "checked" : ""}
        />
        <span class="${e.check ? 'line-through text-gray-400' : ''}">
            ${e.nome}
        </span>
        </div>
        <div class="flex items-center gap-3">
        <span class="material-symbols-outlined edit cursor-pointer hover:text-blue-400 transition">edit</span>
        <span class="material-symbols-outlined delete cursor-pointer hover:text-red-400 transition">delete</span>
    </div>
</li>`;
 });
tarefa();
};

const tarefa = () => {
    document.querySelectorAll("li").forEach(e => {
        e.addEventListener("click" , a => {
            if(a.target.classList.value.includes("delete")){
                tarefas = tarefas.filter(b => b.id !== +e.id)
                save();
                mostrarTarefas();
            }

            if(a.target.classList.value.includes("check")){
                const index = tarefas.findIndex((i) => i.id === +e.id);
                tarefas[index].check = !tarefas[index].check;
                save()
                mostrarTarefas();
            }
            if(a.target.classList.value.includes("edit")){
                const index = tarefas.findIndex((i) => i.id === +e.id);
                const novoTexto = prompt("Editar tarefa:",tarefas[index].nome);
            if(novoTexto !== null && novoTexto.trim() !== ""){
                tarefas[index].nome = novoTexto;

        save();
        mostrarTarefas();
    }
}});
    });
};

const save = () => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   if(e.target[0].value.length > 0){
       tarefas.push({nome:e.target[0].value, id: Math.random(), check: false });
       save();
       mostrarTarefas();
       e.target.reset();
   }
});

window.addEventListener("load" , mostrarTarefas)