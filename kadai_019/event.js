const clickBtn = document.getElementById('btn');
const firstText = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  firstText.textContent = 'ボタンをクリックしました';
});