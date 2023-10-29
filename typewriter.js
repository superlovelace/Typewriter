const outputContainer = document.getElementById("output-container");
const textElement = document.getElementById("text");
const text = document.getElementById('text').innerText;
let index = 0;
document.getElementById("text").innerText = '';

function showText() {
    if (index < text.length) {
        const nextChar = text.charAt(index);
        if(nextChar == "#"){
          textElement.textContent += "\n\n";
          textElement.textContent += "";
        }else{
          textElement.textContent += nextChar;
        }
        index++;
        outputContainer.scrollTop = outputContainer.scrollHeight; // 滚动到底部

        // 随着文字的增加，逐步显示border-right
        textElement.style.borderRight = `12px solid`;

        setTimeout(showText, 36); // 调整显示速度
    }
}

showText();
