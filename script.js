const sections = [
  document.getElementById('question1'),
  document.getElementById('question2'),
  document.getElementById('question3'),
  document.getElementById('videoSection'),
];
const video = document.getElementById('finalVideo');

// Show only the first question on load
function init() {
  sections.forEach((sec, i) => {
    sec.classList.toggle('active', i === 0);
  });
}
init();

// Advance to the next section whenever a radio is selected
sections.forEach((sec, idx) => {
  sec.addEventListener('change', e => {
    if (e.target.matches('input[type="radio"]')) {
      // hide current
      sec.classList.remove('active');
      // show next
      const next = sections[idx + 1];
      if (next) {
        next.classList.add('active');
        // if it's the video, ensure it plays
        if (next.id === 'videoSection') {
          video.play().catch(() => {
            console.warn('Autoplay blocked; video is muted for compatibility.');
          });
        }
      }
    }
  });
});

// Optional: restart quiz after video ends
video.addEventListener('ended', init);
