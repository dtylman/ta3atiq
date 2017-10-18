function transcribeText(text) {
    let out = "";
    let j = 0;
    let len = text.length;

    while (j < len) {
        let code = text.charCodeAt(j);
        switch (code) {
            case 1569:
            case 1570:
            case 1571:
            case 1573:
            case 1574:
            case 1575:
            case 1609:
                out = out + String.fromCharCode(1488);
                break;
            case 1572:
                out = out + String.fromCharCode(1493);
                break;
            case 1576:
                out = out + String.fromCharCode(1489);
                break;
            case 1577:
                out = out + String.fromCharCode(1492);
                break;
            case 1578:
                out = out + String.fromCharCode(1514);
                break;
            case 1579:
                out = out + String.fromCharCode(1514) + "'";
                break;
            case 1580:
                out = out + String.fromCharCode(1490) + "'";
                break;
            case 1581:
                out = out + String.fromCharCode(1495);
                break;
            case 1582:
                out = out + String.fromCharCode(1495) + "'";
                break;
            case 1583: // dal
                out = out + String.fromCharCode(1491);
                break;
            case 1584: // d'al
                out = out + String.fromCharCode(1491) + "'";
                break;
            case 1585: // ra
                out = out + String.fromCharCode(1512);
                break;
            case 1586: // zai
                out = out + String.fromCharCode(1494);
                break;
            case 1587: // sin
                out = out + String.fromCharCode(1505);
                break;
            case 1588: //shin
                out = out + String.fromCharCode(1513);
                break;
            case 1589: // sad
                out = out + String.fromCharCode(1510);
                break;
            case 1590: //dad -- maybe fix this
                out = out + String.fromCharCode(1491) + "~";
                break;
            case 1591: // ta
                out = out + String.fromCharCode(1496);
                break;
            case 1592:
                out = out + String.fromCharCode(1496) + "'";
                break;
            case 1593:
                out = out + String.fromCharCode(1506);
                break;
            case 1594:
                out = out + String.fromCharCode(1506) + "'";
                break;
            case 1601: // fa
                out = out + String.fromCharCode(1508);
                break;
            case 1602: // k^af
                out = out + String.fromCharCode(1511);
                break;
            case 1603: // kaf
                out = out + String.fromCharCode(1499);
                break;
            case 1604: // lam
                out = out + String.fromCharCode(1500);
                break;
            case 1605: // mim
                out = out + String.fromCharCode(1502);
                break;
            case 1606: // nun
                out = out + String.fromCharCode(1504);
                break;
            case 1607: // ha
                out = out + String.fromCharCode(1492);
                break;
            case 1608: // wow
                out = out + String.fromCharCode(1493);
                break;
            case 1610: // ya
                out = out + String.fromCharCode(1497);
                break;

            default:
                out = out + String.fromCharCode(code);
                break;
        }
        j = j + 1;
    }
    return out;
}

var textObjects = [];
var direction = document.body.dir;
var transcribed = false;

function toggleTranscription(m) {
    if (!transcribed) {
        document.body.dir = "rtl";
        for (let i in textObjects) {
            textObjects[i].node.textContent = transcribeText(textObjects[i].node.textContent);
        }
        transcribed = true;
    } else {
        for (let i in textObjects) {
            textObjects[i].node.textContent = textObjects[i].text;
        }
        document.body.dir = direction;
        transcribed = false;
    }
}


let treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (treeWalker.nextNode()) {
    textObjects.push({ node: treeWalker.currentNode, text: treeWalker.currentNode.textContent });
}

// this is called when page action is clicked
browser.runtime.onMessage.addListener(toggleTranscription);

//notify background script that we content script is done.
browser.runtime.sendMessage({});