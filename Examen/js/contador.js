
console.log("Iniciando animación de contadores");



var counter = function() {
    $('#section-counter').waypoint(function(direction) {
        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.number').each(function() {
                var $this = $(this),
                    num = $this.data('number');
                console.log(num);
                $this.animateNumber({
                    number: num,
                    numberStep: comma_separator_number_step
                }, 7000);
            });
        }
    }, { offset: '95%' });
}
counter();
