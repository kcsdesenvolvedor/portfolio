document.addEventListener('DOMContentLoaded', () => {
    // 1. Carregar idioma salvo ou padrão
    const currentLang = localStorage.getItem('lang') || 'en';
    document.getElementById('language-select').value = currentLang;
    
    // 2. Aplicar traduções
    function applyTranslations(lang) {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
      });
    }
  
    // 3. Trocar idioma
    document.getElementById('language-select').addEventListener('change', (e) => {
      const newLang = e.target.value;
      localStorage.setItem('lang', newLang);
      applyTranslations(newLang);
    });
  
    // Aplicar tradução inicial
    applyTranslations(currentLang);
  });