let liste = [];
let total = 0;
let complete = 0;
let input = document.querySelector("#todo-input");
let yazdir = document.querySelector("#todo-ul");
let toplam = document.querySelector("#toplam");
let biten = document.querySelector("#tamamlanan");

document.querySelector("#todo-button").onclick = () => {
  if (!input.value) {
    input.value.textContent = "Add New Todo...";
  } else if (!liste.includes(input.value)) {
    liste.push(input.value);
    total++;
    toplam.textContent = total;
  }
  console.log(liste);
  if (!yazdir.innerHTML.includes(input.value)) {
    yazdir.innerHTML =
      yazdir.innerHTML +
      `<li> <i class="fa-solid fa-check"></i> <P> ${input.value} </P> <i class="fa-solid fa-trash"></i></li>`;
    input.value = "";
  }
  document.querySelectorAll(".fa-check").forEach(
    (a) =>
      (a.onclick = () => {
        a.parentElement.classList.add("checked");
        // const li = document.querySelector("li");
        console.log(a);

        total--;

        toplam.textContent = total;

        complete++;
        biten.textContent = complete;
       
                

      })
      

      
  );

  document.querySelectorAll(".fa-trash").forEach(
    (a) =>
      (a.onclick = () => {
        a.parentElement.remove();
        complete--;
        biten.textContent = complete;

        // liste.siplice(liste.indexOf(a), 1);

        console.log(liste.indexOf(a));
      })
  );

 

};
