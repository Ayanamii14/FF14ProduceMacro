var outputArr = new Array();
var hongCount = 0;
var waitTime = "2.5";
//输出宏
function outPut(e) {
    var actionStr = "/ac ";
    var outPutWaitTime = "<wait.".concat(waitTime).concat(">");
    var skill = e.name;
    //拼接字符串，添加到数组中
    outputArr.push(actionStr.concat(skill).concat(outPutWaitTime).concat("\n"));
    //宏最多15行
    if (outputArr.length > 14 * (hongCount + 1) + 4 * hongCount) {
        hongCount ++;
        outputArr.push("\n");
        outputArr.push("==============================>\n");
        outputArr.push("\n");
    }
    //push时，会用","来区分各字符串，join("")去掉数组中的","
    document.getElementById("text").innerHTML = outputArr.join("");
}

//改变等待时间
function changeWaitTime() {
    var s = document.getElementById("waitTextField").value;
    if (s == null || s == "") {
        alert("输入不能为空");
    }
    else {
        waitTime = s;
        alert("修改成功");
    }
}

//撤回
function back() {
    if (outputArr[outputArr.length-1] != "\n") {
        outputArr.pop();
        document.getElementById("text").innerHTML = outputArr.join("");
    }
}

//复制文本
function copyText() {
    var allStr = document.getElementById("text");
    allStr.select();
    document.execCommand("Copy");
    alert("已复制");
}