var d = new Date();
var t = d.getTime();

function array2table(list, columns){
    if (columns == 1){
        res = list
    } else {
        res = [];

        for (i=0; i<list.length; i++){
            res[i] = list[i].join("</td><td>");
            };
    };

    res_html = "<br\><table border=\"1\" cellpadding=\"5\"><tr><td>";
    res_html = res_html + res.join("</td></tr>\n<tr><td>")  + "</td></tr></table>";
    return res_html;
}

function edges2nodes(edges_list){

    nodes_list = [];
    for (i=0; i<edges_list.length; i++){
        for (j=0; j<2; j++){
            node = edges_list[i][j];
            if(nodes_list.indexOf(node) < 0){
                nodes_list.unshift(node);
            };
        }
     };

    return nodes_list;
}

function edges2numbers(edges_list, nodes_list){

    edges_num_list = [];
    edges_str = "Summary: " + String(nodes_list.length) + " nodes, "+ String(edges_list.length) + " connections";
    for (i=0; i<edges_list.length; i++){
        node0 = edges_list[i][0];
        node1 = edges_list[i][1];
        num0 = nodes_list.indexOf(node0);
        num1 = nodes_list.indexOf(node1);
        edges_num_list[i] = [String(num0+1), String(num1+1)];
        edges_str = edges_str + ", " + String(num0+1) + "-" + String(num1+1);
     };

    return [edges_num_list, edges_str];
}

// remove empty elements from the end
function normalize_data(data_list){

    n = data_list.length;

    while( (n>0) && (data_list[n-1].length < 5) ){
        data_list.pop();
        n = n-1;
    };

    return data_list;
}

function parse_data(){

	document.getElementById('page1').style.display ="none";
	document.getElementById('page2').style.display ="";

    data = document.getElementById('text1').value;

    edges_list = data.split("\n");
    edges_list = normalize_data(edges_list); // remove empty lines
    for (i=0; i<edges_list.length; i++){
        edges_list[i] = edges_list[i].split("\t");
        };

    nodes_num = [];
    nodes = edges2nodes(edges_list).sort();
    for (i=0; i<nodes.length; i++){
            nodes_num[i] = [String(i+1), nodes[i]];
        };

    nodes_html = array2table(nodes_num, 2);
    edges_num = edges2numbers(edges_list, nodes_list)[0];
    edges_str = edges2numbers(edges_list, nodes_list)[1];

    document.getElementById('output').innerHTML = array2table(edges_list, 2) + array2table(nodes_num, 2) + edges_str;
}

function try_again(){

	document.getElementById('page1').style.display ="";
	document.getElementById('page2').style.display ="none";
	document.getElementById('page3').style.display ="none";
    data = document.getElementById('text1').value = "";

}

function make_report(){

	document.getElementById('page3').style.display ="";
	document.getElementById('page2').style.display ="none";

}
