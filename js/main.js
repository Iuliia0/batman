$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    
    tabsItem.on('click', function(event){
        // отменяет всё, что происходит при стандартном действие ( в данном случае не отбрасывает назад при клике на ссылку)
        event.preventDefault(); 
        // activeContent хранит айдишник нужного нам элемента
        let activeContent = $(this).attr('href');
        // находим нужный класс и если он там есть, то отключаем его
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    })
});