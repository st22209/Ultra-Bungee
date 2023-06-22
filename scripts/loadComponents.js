$("body").prepend('<nav id="navbar"></nav>')
$("body").append('<footer id="footer"></footer>')

$("#navbar").load("components/navbar/navbar.html")
$("#footer").load("components/footer/footer.html")
