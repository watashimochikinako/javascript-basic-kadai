const clickBtn = document.getElementById('btn');
const changeText = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    changeText.textContent = 'ボタンをクリックしました';
  }, 2000);
});