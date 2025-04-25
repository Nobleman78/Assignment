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


/*  This is for to go to top after arrow_icon clicked  */

document.querySelector('.copy_right .arrow-icon').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* This is for expanded Testimonials*/

let isExpanded = false;

function isMobile() {
    return window.innerWidth <= 768;
}

function handleTestimonials() {
    const testimonials = document.querySelectorAll('.testimonials');
    const loadMoreButton = document.querySelector('.loadmore_button');
    
    if (!isExpanded && isMobile()) {
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.toggle('hidden', index >= 4);
        });
        loadMoreButton.classList.remove('hidden');
    } else {
        testimonials.forEach(testimonial => testimonial.classList.remove('hidden'));
        loadMoreButton.classList.add('hidden');
    }
}

window.addEventListener('load', handleTestimonials);
window.addEventListener('resize', handleTestimonials);

document.querySelector('.loadmore_button').addEventListener('click', () => {
    isExpanded = true;
    handleTestimonials();
});

