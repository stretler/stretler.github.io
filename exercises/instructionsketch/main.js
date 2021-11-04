const container = document.getElementById('breathe');
const text = document.getElementById('words');

const time = 10000;
const breathe = (time / 5) * 2;
const hold = time / 5;

relax();

function relax() {
  text.innerText = 'In...2...3...4!';
  container.className = 'words breathein';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Out...2...3...4!';
      container.className = 'words breatheout';
    }, hold);
  }, breathe);
}

setInterval(relax, time);