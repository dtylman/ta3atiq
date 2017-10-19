function he2ar() {
    let table = {};
    table["dir"] = "rtl";
    table[0x05D0] = 0; //HEBREW LETTER ALEF
    table[0x05D1] = 0; //HEBREW LETTER BET
    table[0x05D2] = 0; //HEBREW LETTER GIMEL
    table[0x05D3] = 0; //HEBREW LETTER DALET
    table[0x05D4] = 0; //HEBREW LETTER HE
    table[0x05D5] = 0; //HEBREW LETTER VAV
    table[0x05D6] = 0; //HEBREW LETTER ZAYIN
    table[0x05D7] = 0; //HEBREW LETTER HET
    table[0x05D8] = 0; //HEBREW LETTER TET
    table[0x05D9] = 0; //HEBREW LETTER YOD
    table[0x05DA] = 0; //HEBREW LETTER FINAL KAF
    table[0x05DB] = 0; //HEBREW LETTER KAF
    table[0x05DC] = 0; //HEBREW LETTER LAMED
    table[0x05DD] = 0; //HEBREW LETTER FINAL MEM
    table[0x05DE] = 0; //HEBREW LETTER MEM
    table[0x05DF] = 0; //HEBREW LETTER FINAL NUN
    table[0x05E0] = 0; //HEBREW LETTER NUN
    table[0x05E1] = 0; //HEBREW LETTER SAMEKH
    table[0x05E2] = 0; //HEBREW LETTER AYIN
    table[0x05E3] = 0; //HEBREW LETTER FINAL PE
    table[0x05E4] = 0; //HEBREW LETTER PE
    table[0x05E5] = 0; //HEBREW LETTER FINAL TSADI
    table[0x05E6] = 0; //HEBREW LETTER TSADI
    table[0x05E7] = 0; //HEBREW LETTER QOF
    table[0x05E8] = 0; //HEBREW LETTER RESH
    table[0x05E9] = 0; //HEBREW LETTER SHIN
    table[0x05EA] = 0; //HEBREW LETTER TAV
    table[0x05F0] = 0; //HEBREW LIGATURE YIDDISH DOUBLE VAV
    table[0x05F1] = 0; //HEBREW LIGATURE YIDDISH VAV YOD
    table[0x05F2] = 0; //HEBREW LIGATURE YIDDISH DOUBLE YOD
    table[0x05F3] = 0; //HEBREW PUNCTUATION GERESH
    table[0x05F4] = 0; //HEBREW PUNCTUATION GERSHAYIM
    return table;
}

function ar2he() {
    let table = {};
    table[0x0621] = 0x05D0; //ARABIC LETTER HAMZA --> Alef
    table[0x0622] = 0x05D0; //ARABIC LETTER ALEF WITH MADDA ABOVE --> Alef
    table[0x0623] = 0x05D0; //ARABIC LETTER ALEF WITH HAMZA ABOVE -->Alef
    table[0x0624] = 0x05D0; //ARABIC LETTER WAW WITH HAMZA ABOVE  --ALEF
    table[0x0625] = 0x05D0; //ARABIC LETTER ALEF WITH HAMZA BELOW -->Alef
    table[0x0626] = 0x05D0; //ARABIC LETTER YEH WITH HAMZA ABOVE -->ALEF
    table[0x0627] = 0x05D0; //ARABIC LETTER ALEF --> Alef
    table[0x0628] = [0x05D1, 0x05BC]; //ARABIC LETTER BEH --> Bet + Dagesh
    table[0x0629] = [0x05D4, 0x05BF]; //ARABIC LETTER TEH MARBUTA --> He + Line above
    table[0x062A] = 0x05EA; //ARABIC LETTER TEH -->Tav
    table[0x062B] = [0x05EA, 0x05BF]; //ARABIC LETTER THEH --> Tav + Line above
    table[0x062C] = [0x05D2, 0x05F3]; //ARABIC LETTER JEEM --> Gimmel + Geresh
    table[0x062D] = 0x05D7; //ARABIC LETTER HAH --> Het
    table[0x062E] = [0x05D7, 0x05F3]; //ARABIC LETTER KHAH --> Het+ Geresh
    table[0x062F] = 0x05D3; //ARABIC LETTER DAL --> DALET
    table[0x0630] = [0x05D3, 0x05BF]; //ARABIC LETTER THAL --> Dalet + Line ABOVE
    table[0x0631] = 0x05E8; //ARABIC LETTER REH --> RESH
    table[0x0632] = 0x05D6; //ARABIC LETTER ZAIN --> ZAYIN
    table[0x0633] = 0x05E1; //ARABIC LETTER SEEN -->SAMEKH
    table[0x0634] = 0x05E9; //ARABIC LETTER SHEEN -->SHIN
    table[0x0635] = 0x05E6; //ARABIC LETTER SAD -->TSADI
    table[0x0636] = [0x05D3, 0x05C4]; //ARABIC LETTER DAD --> DALET + Nekuda
    table[0x0637] = 0x05D8; //ARABIC LETTER TAH -->TET
    table[0x0638] = 0x05D6; //ARABIC LETTER ZAH -->ZAYIN
    table[0x0639] = 0x05E2; //ARABIC LETTER AIN -->AYIN
    table[0x063A] = [0x05E2, 0x05C4]; //ARABIC LETTER GHAIN --> AYIN + Nekuda
    table[0x0641] = 0x05E4; //ARABIC LETTER FEH --> PE
    table[0x0642] = 0x05E7; //ARABIC LETTER QAF --> QOF
    table[0x0643] = [0x05DB, 0x05BC]; //ARABIC LETTER KAF --> KAF + Dagesh
    table[0x0644] = 0x05DC; //ARABIC LETTER LAM -->LAMED
    table[0x0645] = 0x05DE; //ARABIC LETTER MEEM --> MEM
    table[0x0646] = 0x05E0; //ARABIC LETTER NOON -->NUN
    table[0x0647] = 0x05D4; //ARABIC LETTER HEH --> HE
    table[0x0648] = 0x05D5; //ARABIC LETTER WAW -->VAV
    table[0x0649] = 0x05D0; //ARABIC LETTER ALEF MAKSURA --> ALEF
    table[0x064A] = 0x05D9; //ARABIC LETTER YEH -->YOD
    table[0x0660] = 48; //ARABIC-INDIC DIGIT ZERO
    table[0x0661] = 49; //ARABIC-INDIC DIGIT ONE
    table[0x0662] = 50; //ARABIC-INDIC DIGIT TWO
    table[0x0663] = 51; //ARABIC-INDIC DIGIT THREE
    table[0x0664] = 52; //ARABIC-INDIC DIGIT FOUR
    table[0x0665] = 53; //ARABIC-INDIC DIGIT FIVE
    table[0x0666] = 54; //ARABIC-INDIC DIGIT SIX
    table[0x0667] = 55; //ARABIC-INDIC DIGIT SEVEN
    table[0x0668] = 56; //ARABIC-INDIC DIGIT EIGHT
    table[0x0669] = 57; //ARABIC-INDIC DIGIT NINE
    table[0x0671] = 0x05D0; //ARABIC LETTER ALEF WASLA
    table[0x0672] = 0x05D0; //ARABIC LETTER ALEF WITH WAVY HAMZA ABOVE
    table[0x0673] = 0x05D0; //ARABIC LETTER ALEF WITH WAVY HAMZA BELOW
    table[0x06F0] = 48; //EXTENDED ARABIC-INDIC DIGIT ZERO
    table[0x06F1] = 49; //EXTENDED ARABIC-INDIC DIGIT ONE
    table[0x06F2] = 50; //EXTENDED ARABIC-INDIC DIGIT TWO
    table[0x06F3] = 51; //EXTENDED ARABIC-INDIC DIGIT THREE
    table[0x06F4] = 52; //EXTENDED ARABIC-INDIC DIGIT FOUR
    table[0x06F5] = 53; //EXTENDED ARABIC-INDIC DIGIT FIVE
    table[0x06F6] = 54; //EXTENDED ARABIC-INDIC DIGIT SIX
    table[0x06F7] = 55; //EXTENDED ARABIC-INDIC DIGIT SEVEN
    table[0x06F8] = 56; //EXTENDED ARABIC-INDIC DIGIT EIGHT
    table[0x06F9] = 57; //EXTENDED ARABIC-INDIC DIGIT NINE
    return table;
}


function ar2chat() {
    let table = {};
    table["dir"] = "ltr";
    table[0x0621] = 50; //ARABIC LETTER HAMZA --> 2
    table[0x0622] = 50; //ARABIC LETTER ALEF WITH MADDA ABOVE --> 2
    table[0x0623] = 50; //ARABIC LETTER ALEF WITH HAMZA ABOVE --> 2
    table[0x0624] = 50; //ARABIC LETTER WAW WITH HAMZA ABOVE  --> 2
    table[0x0625] = 50; //ARABIC LETTER ALEF WITH HAMZA BELOW -->2
    table[0x0626] = 50; //ARABIC LETTER YEH WITH HAMZA ABOVE -->ALEF
    table[0x0627] = 97; //ARABIC LETTER ALEF --> a
    table[0x0628] = 98; //ARABIC LETTER BEH --> b
    table[0x0629] = [97, 104]; //ARABIC LETTER TEH MARBUTA --> ah
    table[0x062A] = 116; //ARABIC LETTER TEH -->Tav -->t
    table[0x062B] = [116, 104]; //ARABIC LETTER THEH --> th
    table[0x062C] = 106; //ARABIC LETTER JEEM --> j
    table[0x062D] = 55; //ARABIC LETTER HAH --> 7
    table[0x062E] = [107, 104]; //ARABIC LETTER KHAH --> kh
    table[0x062F] = 100; //ARABIC LETTER DAL --> d
    table[0x0630] = [116, 104]; //ARABIC LETTER THAL --> th
    table[0x0631] = 114; //ARABIC LETTER REH --> r
    table[0x0632] = 122; //ARABIC LETTER ZAIN --> z
    table[0x0633] = 115; //ARABIC LETTER SEEN -->s
    table[0x0634] = [115, 104]; //ARABIC LETTER SHEEN -->sh
    table[0x0635] = [115, 0x05C4]; //ARABIC LETTER SAD -->s + dot
    table[0x0636] = [100, 0x05C4]; //ARABIC LETTER DAD --> d + dot
    table[0x0637] = 116; //ARABIC LETTER TAH -->t
    table[0x0638] = 122; //ARABIC LETTER ZAH -->z
    table[0x0639] = 51; //ARABIC LETTER AIN -->3
    table[0x063A] = [103, 104]; //ARABIC LETTER GHAIN --> gh
    table[0x0641] = 102; //ARABIC LETTER FEH --> f
    table[0x0642] = 113; //ARABIC LETTER QAF --> q
    table[0x0643] = 107; //ARABIC LETTER KAF --> k
    table[0x0644] = 108; //ARABIC LETTER LAM --> l
    table[0x0645] = 109; //ARABIC LETTER MEEM --> m
    table[0x0646] = 110; //ARABIC LETTER NOON --> n
    table[0x0647] = 104; //ARABIC LETTER HEH --> h
    table[0x0648] = 119; //ARABIC LETTER WAW --> w
    table[0x0649] = 97; //ARABIC LETTER ALEF MAKSURA --> a
    table[0x064A] = 121; //ARABIC LETTER YEH --> y
    table[0x0660] = 48; //ARABIC-INDIC DIGIT ZERO
    table[0x0661] = 49; //ARABIC-INDIC DIGIT ONE
    table[0x0662] = 50; //ARABIC-INDIC DIGIT TWO
    table[0x0663] = 51; //ARABIC-INDIC DIGIT THREE
    table[0x0664] = 52; //ARABIC-INDIC DIGIT FOUR
    table[0x0665] = 53; //ARABIC-INDIC DIGIT FIVE
    table[0x0666] = 54; //ARABIC-INDIC DIGIT SIX
    table[0x0667] = 55; //ARABIC-INDIC DIGIT SEVEN
    table[0x0668] = 56; //ARABIC-INDIC DIGIT EIGHT
    table[0x0669] = 57; //ARABIC-INDIC DIGIT NINE
    table[0x0671] = 97; //ARABIC LETTER ALEF WASLA
    table[0x0672] = 97; //ARABIC LETTER ALEF WITH WAVY HAMZA ABOVE
    table[0x0673] = 97; //ARABIC LETTER ALEF WITH WAVY HAMZA BELOW
    table[0x06F0] = 48; //EXTENDED ARABIC-INDIC DIGIT ZERO
    table[0x06F1] = 49; //EXTENDED ARABIC-INDIC DIGIT ONE
    table[0x06F2] = 50; //EXTENDED ARABIC-INDIC DIGIT TWO
    table[0x06F3] = 51; //EXTENDED ARABIC-INDIC DIGIT THREE
    table[0x06F4] = 52; //EXTENDED ARABIC-INDIC DIGIT FOUR
    table[0x06F5] = 53; //EXTENDED ARABIC-INDIC DIGIT FIVE
    table[0x06F6] = 54; //EXTENDED ARABIC-INDIC DIGIT SIX
    table[0x06F7] = 55; //EXTENDED ARABIC-INDIC DIGIT SEVEN
    table[0x06F8] = 56; //EXTENDED ARABIC-INDIC DIGIT EIGHT
    table[0x06F9] = 57; //EXTENDED ARABIC-INDIC DIGIT NINE
    return table;
}

var textTable = ar2chat();

function transcribeText(text) {
    let out = "";
    let j = 0;
    let len = text.length;

    while (j < len) {
        let code = text.charCodeAt(j);
        let letter = textTable[code];
        if (letter === undefined) {
            out += String.fromCharCode(code);
        } else {
            if (Array.isArray(letter)) {
                for (k in letter) {
                    out += String.fromCharCode(letter[k]);
                }
            }
            out += String.fromCharCode(letter);
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
        document.body.dir = textTable["dir"];
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