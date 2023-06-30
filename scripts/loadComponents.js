$("body").prepend('<nav id="navbar"></nav>');
$("body").append('<footer id="footer"></footer>');

$("#navbar").load("components/navbar/navbar.html", () => {
    if (window.location.href.includes("st22209.github.io")) {
        $("#homeurl").attr("href", "https://st22209.github.io/Ultra-Bungee/")
    }
});

$("#footer").load("components/footer/footer.html");
