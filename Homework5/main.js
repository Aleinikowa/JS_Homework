var menu = $('#menuBurgerJS');
var menuBurger = $('#BurgerJS');

menu.click(function(){
    menuBurger.slideToggle("400");
});

var search = $ ('.searchJS');
var searchInput = $ ('#inputSearchJS');

search.click(function() {
    searchInput.slideToggle("300");
});