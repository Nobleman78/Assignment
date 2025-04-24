document.addEventListener('DOMContentLoaded', function () {
    const mainFaqItems = document.querySelectorAll('.main_faq_contents');
    mainFaqItems.forEach(item => {
        const faqContents = item.querySelector('.faq_contents');
        const arrow = faqContents.querySelector('.arrow-icon');

        faqContents.addEventListener('click', () => {
            mainFaqItems.forEach(clickedItem => {
                if (clickedItem !== item) {
                    clickedItem.classList.remove('active');
                    clickedItem.querySelector('.arrow-icon').classList.remove('rotate');
                }
            })
            item.classList.toggle('active')
            arrow.classList.toggle('rotate')
        })
    })
})