document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.lead-row');
    rows.forEach(row => {
        row.addEventListener('click', () => {
            // In a real application, you would get the lead's unique ID and
            // navigate to a dynamic URL like `lead.html?id=123`.
            // For this mockup, we will navigate to a single static page.
            window.location.href = 'leads-details.html';
        });
    });
});