<script>
  document.addEventListener('DOMContentLoaded', () => {
    const skillsCols = document.querySelectorAll('.skills-column');
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 100);
          skillsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    skillsCols.forEach(col => skillsObserver.observe(col));
  });
</script>
