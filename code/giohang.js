var giohangs = [];
var giohang = {
    masp: "",
    tensp: "",
    gia: "",
    soluong: "",
    hinh: "",
    khoitao: function giohang(masp, hinh, ten, gia, soluong) {
        this.masp = masp;
        this.tensp = ten;
        this.hinh = hinh;
        this.gia = gia;
        this.soluong = soluong;
    },
    xuatgiohang: function(giohangs) {
        let text = "";
        for (let i = 0; i < giohangs.length; i++) {
            text += '<tr>';
            text += this.motsp_giohang(giohangs[i]);
            text += '</tr>';
        }
        if (giohangs.length > 0) {
            text += "<tr><td colspan='6'><button onclick='thanhtoan()'>thanhtoan</button></td></tr>";
        }

        return text;
    },
    motsp_giohang: function(giohang) {
        let text = "";
        text += '<td width = "20%"><lable>' + giohang.masp + '</lable><img heigth="40px" width="60px" src="' + giohang.hinh + '"></td>';
        text += '<td width = "20%"><p>' + giohang.tensp + '</p></td>'
        text += '<td width = "25%"><p>$<span>' + giohang.gia + '</span>&emsp;*&emsp;</p></td>';
        text += '<td width = "5%"><input nam="soluong" disabled value="' + giohang.soluong + '" min="1" type="number" ></td>';
        text += '<td width = "30%"><p>&emsp;=&emsp;$<span>' + giohang.gia * giohang.soluong + '</span></p></td>';
        text += '<td width = "10%"><button onclick ="xoaspgiohang(this)">Xoa</button></td>';
        return text;
    }
}