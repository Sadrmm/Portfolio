document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.personal-projects-filter button');
    const items = document.querySelectorAll('.p-p-item');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');

            items.forEach(item => {
                const itemFilter = item.getAttribute('data-filter');
                if (filterValue === 'all' || filterValue === itemFilter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
