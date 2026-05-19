const form = document.querySelector('form');
const container = document.querySelector("#tarefas")

let tarefas = localStorage.getItem("tarefas") 
  ? JSON.parse(localStorage.getItem("tarefas")) 
  : [];


const mostrarTarefas = () => {
    container.innerHTML = "";
    tarefas.forEach(e => {
      container.innerHTML += `
        <li id="${e.id}">
            <input type="checkbox" class="check" ${e.check ? "checked" : ""}/>
            <span>${e.nome}</span>
            <span class="material-symbols-outlined delete">delete</span>
        </li>
      `;
    });
};

const tarefa = () => {
    document.querySelectorAll("li").forEach(e => {
        e.addEventListener("click" , a => {
            if(a.target.classList.value.includes("delete")){
                
            }
        })
    })
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   if(e.target[0].value.length > 0){
       tarefas.push({nome:e.target[0].value, id: Math.random(), check: false });
       mostrarTarefas();
   }
});