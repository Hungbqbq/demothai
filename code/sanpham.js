var sanphams = [];
let sanpham = {
    masp: "",
    tensp: "",
    gia: "",
    ctsp: "",
    hinh: "",
    khoitao: function sanpham(masp, tensp, gia, ctsp, hinh) {
        this.masp = masp;
        this.tensp = tensp;
        this.gia = gia;
        this.ctsp = ctsp;
        this.hinh = hinh;
    },
    xuatsp: function(sanphams) {
        let text = "";
        for (let i = 0; i < sanphams.length; i++) {
            text += '<div class="sanpham">';
            text += this.motsp(sanphams[i]);
            text += '</div>';
        }
        return text;
    },
    motsp: function(sanpham) {
        let text = "";
        text += ' <div><img src="./image/' + sanpham.hinh + '"></div>';
        text += ' <p>' + sanpham.tensp + '</p>'
        text += '<p>$<span>' + sanpham.gia + '</span></p>';
        text += '<input nam="soluong" value="1" min="1" type="number">'
        text += '<lable hidden>' + sanpham.masp + '</lable><br>';
        text += '<button onclick="chonhang(this)">Chọn Hàng</button><button onclick="chitietsp(this)">CTSP</button>';
        return text;
    }
};
let sp1 = new sanpham.khoitao("Sản Phẩm 01", "Bánh Mì", "100", "Thức Ăn Nhanh", "product_1.png");
sanphams.push(sp1);
let sp2 = new sanpham.khoitao("Sản Phẩm 02", "Trứng Lòng Đào", "50", "Thức Ăn Nhanh", "product_2.png");
sanphams.push(sp2);
let sp3 = new sanpham.khoitao("Sản Phẩm 03", "Salad", "125", "Thức Ăn Nhanh", "product_3.png");
sanphams.push(sp3);
let sp4 = new sanpham.khoitao("Sản Phẩm 04", "Hambuger", "75", "Thức Ăn Nhanh", "product_4.png");
sanphams.push(sp4);
let sp5 = new sanpham.khoitao("Sản Phẩm 05", "Bánh Cuốn", "85", "Thức Ăn Nhanh", "product_5.png");
sanphams.push(sp5);

let sp = sanpham
document.getElementById("showsanpham").innerHTML = sp.xuatsp(sanphams);


var danhsachsp = document.querySelectorAll('div.sanpham');
for (let i = 0; i < danhsachsp.length; i++) {
    danhsachsp[i].addEventListener("mouseover", thaydoi);
    danhsachsp[i].addEventListener("mouseout", trave)

    function thaydoi() {
        danhsachsp[i] = document.querySelectorAll('div.sanpham');
        danhsachsp[i].className = "sanphamchange";
    }

    function trave() {
        danhsachsp[i] = document.querySelectorAll('div.sanphamchange');
        danhsachsp[i].className = "sanpham";
    }
}

function chitietsp(x) {
    var the = x.parentElement;
    let masp = the.children[4].innerText;
    sessionStorage.setItem("masp", JSON.stringify(masp))
    window.location = 'chitietsp.html'
}