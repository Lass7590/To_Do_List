const form = document.querySelector('form');
const inputForm = document.querySelector('form input');
const liste = document.querySelector('.liste-tache');
let toutesLesTaches = [];

form.addEventListener('submit', event => {
   event.preventDefault();

   const text = inputForm.value.trim();
   if(text !== ''){
      ajouterTache(text);
      inputForm.value = '';
   }
})

function ajouterTache(text){

   const todo = {
      text,
      id : Date.now()
   }

   afficherTache(todo);
}

function afficherTache(todo){

   const item = document.createElement('li');
   item.setAttribute('data-key', todo.id);

   const input = document.createElement('input');
   input.setAttribute('type', 'checkbox');
   input.addEventListener('click', tacheFaite);
   item.appendChild(input);

   const tache = document.createElement('span');
   tache.innerText = todo.text;
   item.appendChild(tache);

   const btn = document.createElement('button');
   const img = document.createElement('img');
   img.setAttribute('src', 'ressources/fermer.svg');
   btn.appendChild(img);
   btn.addEventListener('click', supprimerTache);
   item.appendChild(btn);

   liste.appendChild(item);
   toutesLesTaches.push(item);
}

function tacheFaite(e){
   // console.log(e);
   e.target.parentNode.classList.toggle('finDeTache')
}

function supprimerTache(e){
   toutesLesTaches.forEach(item => {
      if(e.target.parentNode.getAttribute('data-key') === item.getAttribute('data-key')){
      item.remove();
      toutesLesTaches = toutesLesTaches.filter(li => li.dataset.key !== item.dataset.key);
      console.log(toutesLesTaches);
   }
   })
}