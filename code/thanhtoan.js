showgiohang_thanhtoan();
var thanhtoan = [];
function showgiohang_thanhtoan(){
    var x = sessionStorage.getItem("giohang");
    thanhtoan = JSON.parse(x);
    console.log(thanhtoan)
    // giohangs = JSON.parse(x);
    // console.log(giohangs);
    // let gh = giohang;
    sessionStorage.setItem("giohang",JSON.stringify(""));
    document.getElementById('showgiohang_thanhtoan').innerHTML =  thanhtoansp(thanhtoan);
    
}
function thanhtoansp(thanhtoan){
    let text="";
    for(let i = 0 ; i< thanhtoan.length;i++){
        text += '<tr>';
        text += '<td width = "20%"><lable hidden>'+thanhtoan[i].masp+'</lable>';
        text += '<img heigth="40px" width="60px" src="'+ thanhtoan[i].hinh +'"></td>';
        text += '<td width = "20%"><p>'+ thanhtoan[i].tensp +'</p></td>'
        text += '<td width = "25%"><p>$<span>'+thanhtoan[i].gia+'</span>&emsp;*&emsp;</p></td>';
        text += '<td width = "5%"><input nam="soluong" disabled value="'+thanhtoan[i].soluong+'" min="1" type="number" ></td>';
        text += '<td width = "30%"><p>&emsp;=&emsp;$<span>'+thanhtoan[i].gia *thanhtoan[i].soluong+'</span></p></td>';
        text +='</tr>';
    }
    if(thanhtoan.length > 0){
        text +="<tr><td colspan='5'><button onclick='thanhtoan()'>thanhtoan</button></td></tr>";
    }
    
    return text;
}
