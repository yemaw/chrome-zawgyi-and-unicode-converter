
document.addEventListener('DOMContentLoaded', function() {
    window.input_zg2uni = document.getElementById('input_zg2uni');
    window.input_uni2zg = document.getElementById('input_uni2zg');
    window.result_zg2uni = document.getElementById('result_zg2uni');
    window.result_uni2zg = document.getElementById('result_uni2zg');

    input_zg2uni.onkeyup = function(){
        result_zg2uni.innerText = Rabbit.zg2uni(input_zg2uni.value);
    };
    input_uni2zg.onkeyup = function(){
        result_uni2zg.innerText = Rabbit.uni2zg(input_uni2zg.value);
    };
    result_zg2uni.onclick = function(){
        selectText('result_zg2uni');
    };
    result_uni2zg.onclick = function(){
        selectText('result_uni2zg');
    };

}, false);


function selectText(containerid) {
    var range;
    if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
    }
}
