const controllo = document.getElementById('controllo');
const indovina = new URLSearchParams(window.location.search);
const num = indovina.get('indovina');

if (num === "5"){
    controllo.innerHTML = 'Fantastico, hai indovinato!';
} else {
    controllo.innerHTML = 'Non hai indovinato, ritenta...';
}
