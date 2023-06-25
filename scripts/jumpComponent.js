
/**
 * @param {{jumpName: string, description: string, jumpHeight: number, adultPrice: number, kidsPrice: number}} data The data for the component
*/
function fillPageContent(data) {
    $("#content").load("components/jump/jump.html", () => {
        $("#jump-name").text(`Feel the rush of our ultimate ${data.jumpName} jump.`)
        $("#jump-height").text(data.jumpHeight)
        $("#jump-description").text(data.description)
        $("#adult-price").text(`$${data.adultPrice}`)
        $("#kids-price").text(`$${data.kidsPrice}`)
    })

}