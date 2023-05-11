var x = sessionStorage.getItem("giohang");
if (x == null) {
    giohangs = [];
} else {
    giohangs = JSON.parse(x);
}

function kiemtrasanpham(masp) {
    for (let i = 0; i < sanphams.length; i++) {
        if (sanphams[i].masp === masp) {
            return i;
        }
    }
    return -1;
}
var session_masp = sessionStorage.getItem('masp');
console.log(session_masp)
    //bỏ ngoặc "" cho masp
let kt = kiemtrasanpham(session_masp.replace(/"/g, ''));
let text = "";
if (kt == -1) {
    alert('no item');
} else {

    text += '<tr><td rowspan="5"><lable>' + sanphams[kt].masp + '</lable><img height="200px" width="300px" src="./image/' + sanphams[kt].hinh + '" /></td></tr>'
    text += '<tr><td>' + sanphams[kt].tensp + '</td></tr>';
    text += '<tr><td>' + sanphams[kt].ctsp + '</td></tr>';
    text += '<tr> <td>' + sanphams[kt].gia + '</td></tr>';
    text += '<tr> <td><input type="number" name="soluong" value="1" min="1"></td></tr>';
    text += '<tr><td><button onclick="chonhangctsp(this)">Chọn Hàng</button></td></tr>';
    document.getElementById('showchitietsanpham').innerHTML = text;
}

function chonhangctsp(x) {
    var the = x.parentElement.parentElement.parentElement;
    let masp = the.children[0].children[0].children[0].innerHTML;
    let hinh = the.children[0].children[0].children[1].src;
    let ten = the.children[1].children[0].innerHTML;
    let gia = the.children[3].children[0].innerText;
    let soluong = the.children[4].children[0].children[0].value;
    let kt = kiemtragiohang(masp);
    if (kt == -1) {
        let gh = new giohang.khoitao(masp, hinh, ten, gia, soluong);
        giohangs.push(gh);
    } else {
        let sl = Number(giohangs[kt].soluong) + Number(soluong);
        giohangs[kt].soluong = sl;
    }
    sessionStorage.setItem("giohang", JSON.stringify(giohangs));
    showspgiohang();
}