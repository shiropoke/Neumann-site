// ===== ナビゲーションのリンクをスクロール位置に合わせてハイライト =====
const navLinks = document.querySelectorAll('nav a');
const sections = [...document.querySelectorAll('main section')];

function onScroll() {
  const scrollPos = window.scrollY + 100; // ヘッダー高さ分オフセット
  for (const sec of sections) {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${sec.id}`));
    }
  }
}
document.addEventListener('scroll', onScroll);

// ===== ページ読み込み時に初期ハイライト =====
window.addEventListener('load', onScroll);
