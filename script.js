function showPage(pageId) {
    // Usuwamy klasę 'active' z wszystkich sekcji
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Dodajemy klasę 'active' do wybranej sekcji
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
}
