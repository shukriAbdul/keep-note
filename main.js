let note_area = document.querySelector(".note_area");
let tittle = document.querySelector(".tittle");
let note_text = document.querySelector(".note_text");
let notes = document.querySelector("#notes");
let note = document.querySelector(".note");

const showNoteArea = () => {
  note_text.style = "display: block";
  //  tittle.style.background = "green";
  //   note_text.style.background = "green";

    // note_area.style.background = "red";  
  //   note_area.style.padding = "50px";
  note_area.classList.add("note_now");
  tittle.setAttribute("placeholder", "Title");
  tittle.style.fontSize = "20px";
};
const hideNoteArea = () => {
  note_text.style = "display: none";
  note_area.classList.remove("note_now");
  tittle.setAttribute("placeholder", "Take a note...");
  tittle.style.fontSize = " 16px";
};

//adding note txt tattle io note
const addNote = (t, n) => {
  notes.innerHTML += `<div class="note">
  <h3 class="title_txt" id="tittle_txt">${t}</h3>
  <p class="note_blog" id="note_blog">${n}</p>
  <i class="fa-solid fa-trash"></i>
</div>`;
  tittle.value = "";
  note_text.value = "";
};

note_area.addEventListener("click", showNoteArea);

// hadii click lasiiyo note area iso muuji hadii kle iga qari
//document ka all page ka wye
document.addEventListener("click", (event) => {
  let isClicked = note_area.contains(event.target);

  if (!isClicked) {
    hideNoteArea();

    if (tittle.value.length === 0 && note_text.value.length === 0) {
      return;
    } else {
      addNote(tittle.value, note_text.value);
    }
  }
});

//hadii ladulkeyoh moveka noteka iso muuji cml iconska iguna dar classka show ladhahyo
// document.addEventListener("mouseover", (event) => {
//   if (event.target.classList.contains("note")) {
//     event.target.querySelector("i").classList.add("show");
//   }
// });

//hadii laga dulaaqdoh  moveka noteka iga qari cml iconska io classka show ka
// document.addEventListener("mouseout", (event) => {
//   if (event.target.classList.contains("note")) {
//     event.target.querySelector("i").classList.remove("show");
//   }
// });

//hadii iconka click lasiiyo  noteka dhan iga delete or move cml iga dheh
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-trash")) {
    event.target.parentElement.remove();
  }
});
