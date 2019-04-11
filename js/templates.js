var logo_img = "img/name.png";
var logo_full_img = "img/originallogo2.png";
var favicon_img = "img/favicon2.png";

// Termplates 
var navbar_template = Handlebars.compile(
"<header class=\"header_area\">" +
    "<div class=\"main_menu\">" +
        "<nav class=\"navbar navbar-expand-lg navbar-light\">" +
            "<div class=\"container\">" +
                "<!-- Brand and toggle get grouped for better mobile display -->"+
                "<a class=\"navbar-brand logo_h\" href=\"index.html\"><img src=\"{{logo_img}}\" alt=\"\"></a>"+
                "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\""+
                "aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">"+
                    "<span class=\"icon-bar\"></span>"+
                    "<span class=\"icon-bar\"></span>"+
                    "<span class=\"icon-bar\"></span>"+
                "</button>"+
                "<!-- Collect the nav links, forms, and other content for toggling -->"+
                "<div class=\"collapse navbar-collapse offset\" id=\"navbarSupportedContent\">"+
                    "<ul class=\"nav navbar-nav menu_nav justify-content-end\">"+
                        "<li class=\"nav-item\"><a class=\"nav-link\" href=\"index.html\">{{home}}</a></li>"+
                        "<li class=\"nav-item\"><a class=\"nav-link\" href=\"about.html\">{{about}}</a></li>"+
                        "<li class=\"nav-item\"><a class=\"nav-link\" href=\"portfolio.html\">{{portfolio}}</a></li>"+
                        "<li class=\"nav-item\"><a class=\"nav-link\" href=\"contact.html\">{{contact}}</a></li>"+
                    "</ul>"+
                "</div>"+
            "</div>"+
        "</nav>"+
    "</div>"+
"</header>");

var footer_template = Handlebars.compile(
    "<div class=\"container\">"+
        "<div class=\"row justify-content-center\">"+
            "<div class=\"col-lg-12\">"+
                "<div class=\"footer_top flex-column\">"+
                    "<div class=\"footer_logo\">"+
                        "<a href=\"{{logo_link}}\">"+
                            "<img src=\"{{logo_img}}\" alt=\"\"/>"+
                        "</a>"+
                        "<h4>{{title}}</h4>"+
                    "</div>"+
                    "<div class=\"footer_social\">"+
                        "<a href=\"https://www.facebook.com/diego.tobarra\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>"+
                        "<a href=\"https://twitter.com/DiegoTobas\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>"+
                        "<a href=\"https://www.linkedin.com/in/diego-tobarra\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>"+
        "<div class=\"row footer_bottom justify-content-center\">"+
            "<p class=\"col-lg-8 col-sm-12 footer-text\">"+
            "<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->"+
            "Copyright &copy; {{date}} All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>"+
            "<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>"+
        "</div>"+
    "</div>"
);

function loadNavbar(index){
    var data = {
        index:index,
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        contact: "Contact",
        logo_img: logo_img,
      };
    var navbar = document.getElementById("navbar");
    navbar.innerHTML = navbar_template(data);
    console.log(navbar);
}

function loadBanner()
{

    var source = "";
}

function loadPortfolio()
{
    // var portfolio_source = document.getElementById("portfolio_entry_template").innerHTML;
    // var portfolio_elements = document.getElementById("portfolio_elements");
    // var portfolio_template = Handlebars.compile(portfolio_source);
    
    // var carousel_source = document.getElementById("carousel_template").innerHTML;
    // var carousel_template = Handlebars.compile(carousel_source);
    // var data = [
    //     {
    //         tag:"unity",
    //         image_url:"img/portfolio/finalposter_eos.jpg",
    //         carousel_url:"portfolio-details.html ",
    //         title:"Edge of Sanity",
    //         description:"Published videogame for Android and iOS, made with Unity."
    //     },
    //     {
    //         tag:"unreal",
    //         image_url:"img/portfolio/finalposter_eos.jpg",
    //         carousel_url:"portfolio-details.html ",
    //         title:"Gods of Soko",
    //         description:"Published videogame for Android and iOS, made with Unity."
    //     },
    // ];

    // let entry;
    // data.forEach( function(e) {
    //     entry = document.createElement("div");
    //     entry.innerHTML = portfolio_template(e);
    //     // console.log(entry);
    //     portfolio_elements.appendChild(entry);
    // });
}

function loadTestimonials()
{
    var source = document.getElementById("testi_entry_template").innerHTML;
    var pElements = document.getElementById("testi_elements");
    var template = Handlebars.compile(source);
    var data = [
        {
            name:"Alexander Frey",
            title:"Game Director at Edge of Sanity",
            image_url:"img/testimonials/t1.jpg",
            description:"Diego is so cool!"
        },
    ];

    data.forEach( function(e) {
        var entry = document.createElement("div");
        entry.className = "testi_item"
        entry.innerHTML = template(e);
        console.log(entry);
        pElements.appendChild(entry);
    });  
}

function loadFooter()
{
    // var source = document.getElementById("footer_entry_template").innerHTML;
    // var footer_template = Handlebars.compile(source);
    var footer = document.getElementById("footer");
    var data = {
            logo_link: "index.html",
            logo_img: logo_img,
            title: "Follow me",
            date: new Date().getFullYear()
    };
    footer.innerHTML = footer_template(data);
    console.log(footer)
}