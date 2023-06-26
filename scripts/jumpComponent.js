
/**
 * @param {{jumpName: string, description: string, jumpHeight: number, adultPrice: number, kidsPrice: number, imageURLS: string[]}} data The data for the component
*/
function fillPageContent(data) {
    $("#content").load("components/jump/jump.html", () => {
        $("#jump-name").text(`Feel the rush of our ultimate ${data.jumpName} jump.`)
        $("#jump-height").text(data.jumpHeight)
        $("#jump-description").text(data.description)
        $("#adult-price").text(`$${data.adultPrice}`)
        $("#kids-price").text(`$${data.kidsPrice}`)
        $("#hero").css({ "background-image": `url("../../assets/${data.imageURLS[0]}")` })
        $("#small-gallery-jump-name").text(`${data.jumpName.charAt(0).toUpperCase() + data.jumpName.slice(1)} Jump`)
        $("#small-gallery-jump-title").text(`Get an idea of the thrill of Ultra Bungee's ${data.jumpName.charAt(0).toUpperCase() + data.jumpName.slice(1)} jump`)
        data.imageURLS.map((url) => $("#small-gallery-images").append(`<a data-fancybox="gallery" href="/assets/${url}"> <img src="/assets/${url.replace('.jpg', '_thumb.jpg')}"></a>`))
    })
}