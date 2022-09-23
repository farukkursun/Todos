let liste = [];
let indexno;
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
    liste.push(String(input.value));
    console.log(liste);
    total++;
    toplam.textContent = total;
    yazdir.innerHTML =
      yazdir.innerHTML +
      `<li> <i class="fa-solid fa-check"></i> <p> ${liste[String(liste.length-1)]} </p> <i class="fa-solid fa-trash"></i></li>`;
    input.value = "";
  } else if (liste.includes(input.value)) {
    return;
  }
  document.querySelectorAll(".fa-check").forEach(
    (a) =>
      (a.onclick = () => {
        if (a.parentElement.classList.contains("checked")) {
          a.parentElement.classList = "";
          complete--;
          biten.textContent = complete;
          total++;
          toplam.textContent = total;
        } else {
          a.parentElement.classList.add("checked");

          total--;

          toplam.textContent = total;

          complete++;
          biten.textContent = complete;
        }
      })
  );

  document.querySelectorAll(".fa-trash").forEach(
    (a) =>
      a.onclick = () => {
        const  eleman= a.previousElementSibling.textContent;
        // console.log(eleman);
        // console.log(typeof(eleman));
         indexno= liste.indexOf(String(eleman));
        //  console.log(liste.includes('f'));
        //  if (eleman==='f') {
        //   console.log('dogru')
        //  } 
        //  else{console.log('yanlis')} ;
        
        // console.log(indexno);
        liste.splice(indexno,1);
        console.log(liste);
        a.parentElement.remove();
        if (a.parentElement.classList.contains("checked")) {
          complete--;
          biten.textContent = complete;
        } else {
          total--;

          toplam.textContent = total;
        }
      }
  );
};
