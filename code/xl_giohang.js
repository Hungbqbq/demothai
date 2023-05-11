document.getElementById('showgiohang').style.display = 'none'

function showgiohang() {
    var x = document.getElementById('showgiohang');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    showspgiohang();
}

function kiemtragiohang(masp) {
    for (let i = 0; i < giohangs.length; i++) {
        if (giohangs[i].masp == masp) {
            return i;
        }
    }
    return -1;
}

function chonhang(x) {
    var the = x.parentElement;
    let hinh = the.children[0].children[0].src;
    let ten = the.children[1].innerText;
    let gia = the.children[2].children[0].innerText;
    let soluong = the.children[3].value;
    let masp = the.children[4].innerText;
    let kt = kiemtragiohang(masp);
    if (kt == -1) {
        let gh = new giohang.khoitao(masp, hinh, ten, gia, soluong);
        giohangs.push(gh);
    } else {
        let sl = Number(giohangs[kt].soluong) + Number(soluong);
        giohangs[kt].soluong = sl;
    }
    showspgiohang();
}

function showspgiohang() {
    let gh = giohang;
    document.getElementById('danhsachsanpham').innerHTML = gh.xuatgiohang(giohangs)
}

function xoaspgiohang(x) {
    let the = x.parentElement.parentElement;
    let masp = the.children[0].children[0].innerText
    let kt = kiemtragiohang(masp);
    giohangs.splice(kt, 1);
    the.remove();
}