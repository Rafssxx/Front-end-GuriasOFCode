document.addEventListener('DOMContentLoaded', function () {
  const scrollPosition = window.scrollY;
  console.log(scrollPosition);
  const btnClose = document.getElementById('btnClose');
  const avatarWrapper = document.getElementById('avatarWrapper');
  const aboutSection = document.getElementById('hidden-avatar');
  const myVideo = document.getElementById('video-avatar')
  
  if (btnClose && avatarWrapper && aboutSection) {
    btnClose.addEventListener('click', function () {
      avatarWrapper.classList.add('hidden');
      myVideo.pause();
    });
    window.addEventListener("scroll", function () {
      const header = document.getElementById("headerHome");
      const avatarWrapper = document.querySelector(".avatarWrapper");

      // Posição inferior do header
      const headerBottom = header.getBoundingClientRect().bottom;

      // Se o header sair da tela ocultar o avatar
      if (headerBottom < 0) {
        avatarWrapper.classList.add("hidden");
        myVideo.pause();
      } else {
        avatarWrapper.classList.remove("hidden");
      }
    });

  }
});
