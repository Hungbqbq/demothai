var index = 1;
changeImage = function() {
    var imgs = ["product_1.png", "product_2.png", "product_3.png"];
    document.getElementById("img").src = "./image/" + imgs[index];
    index++;
    if (index == 3) {
        index = 0;
    }
}
setInterval(changeImage, 3000);