// ANCRES SMOOTH

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });

// ANIMATION POUR FAIRE APPARAITRE LA DESCRIPTION DES FRAMEWORKS
var symfonyText = "Symfony est un framework qui représente un ensemble de composants (aussi appelés librairies) PHP autonomes qui peuvent être utilisés dans des projets web privé ou open source. Mais c’est également un puissant Framework PHP développé par une société française : SensioLabs. Il permet de réaliser des sites internet dynamiques de manière rapide, structurée, et avec un développement clair. Les développeurs peuvent travailler sur ce Framework très facilement, seuls ou en équipe, grâce à la facilité de prise en main.";

var laravelText = 'Laravel est un framework PHP qui propose des outils pour construire une application web. Le créateur de Laravel, Taylor Otwel, a simplement regroupé les meilleures librairies pour chaque fonctionnalité nécessaire pour la création d’un site web. Il a aussi rajouté des fonctionnalités exclusives, comme le moteur de template Blade. ';

var angularText = 'Angular est un framework Javascript côté client qui permet de réaliser des applications de type "Single Page Application". Il est basé sur le concept de l\'architecture MVC (Model View Controller) qui permet de séparer les données, les vues et les différentes actions que l\'on peut effectuer. Depuis 2009 jusqu\'à aujourd\'hui, Google a sorti trois différentes versions d\'Angular: AngularJS (2009), Angular 2 (2016) et Angular 4 (2017). A partir de la version 2, le framework a été complètement reécrit. AngularJS n\'est donc pas compatible avec les versions ultérieures. En revanche, il est tout à fait possible de migrer entre la version 2 et la version 4.';

var reactText = 'React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d\'application web monopage, via la création de composants dépendant d\'un état et générant une page (ou portion) HTML à chaque changement d\'état. React est une bibliothèque qui ne gère que l\'interface de l\'application, considéré comme la vue dans le modèle MVC. Elle peut ainsi être utilisée avec une autre bibliothèque ou un framework MVC comme AngularJS. La bibliothèque se démarque de ses concurrents par sa flexibilité et ses performances, en travaillant avec un DOM virtuel et en ne mettant à jour le rendu dans le navigateur qu\'en cas de nécessité.';

$('#symfony-icon-container').hover(function(){
    $('#framework-desc p').text(symfonyText);
});

$('#laravel-icon-container').hover(function(){
    $('#framework-desc p').text(laravelText);
});

$('#angular-icon-container').hover(function(){
    $('#framework-desc p').text(angularText);
});

$('#react-icon-container').hover(function(){
    $('#framework-desc p').text(reactText);
});