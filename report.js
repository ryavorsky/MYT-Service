
function select_friends(id){
    y = [];
    for (i=0; i<x.length ; i++){
        if (i != id){ y.push(x[i])}
    };

    str = '<img src = "pic/' + x[id][1] + '" width="120"> <b> ' +  x[id][0] + ' выбирает 5 друзей: </b>';
    str += '<div id="leaders"></div><br><hr>';

    str += '<div id="faces">';
    str += '<h1 style="text-align:center">Выбери 5 друзей!</h1>';
    str += '<table border = "0"  cellpadding = "12" align="center"><tr>';
    for (i=0; i<y.length ; i++){

        str += '<td width="100"  align="center" >';
        str += '<div id="block' + i + '" onclick = "chosen_friend(' + id + ',y[' + i + '])">';
        str += '<p> ' + y[i][0] + '\n';
        str += '<p> <img src = "pic/' + y[i][1] + '" width="90">';
        str += '</div></td>';

        if (i%5 == 4){
            str+= '</tr><tr>';
        }
    };
    str += '</tr></table></div>';
    page.innerHTML = str;
    page.style.background="#aaaaff";
}

//-----------------------------------------------------------------------------
//  Display selected experts in the page header
//-----------------------------------------------------------------------------
var f = 0;
var res_f = '';

function chosen_friend(id, data){

    if (f < 5){
        str = ' <img src = "pic/' + data[1] + '" width="90">';
        leaders.innerHTML += str;
        f++;
		d = new Date();
		t = d.getTime();
        res_f += '<br>f;' + x[id][1] + ';' + data[1] + ';' + t + '\n';
    };

    if (f == 5){

        str = '<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" style="font-size:larger" value="  Это настоящие друзья!  "';
		str += ' onclick="finalize()" />';
        str += ' или  <input type="button" value="   Переиграть   " ';
		str += ' onclick="f=0;res_f = \'\';select_friends(' + id + ')"/>';

        leaders.innerHTML += str;
		faces.innerHTML = '';
        f++;
    }

    window.scrollTo(0,0);
}

