function he2ar() {
    let table = {};

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
    table[0x0621] = String.fromCharCode(0x05D0); //ARABIC LETTER HAMZA --> Alef
    table[0x0622] = String.fromCharCode(0x05D0); //ARABIC LETTER ALEF WITH MADDA ABOVE --> Alef
    table[0x0623] = String.fromCharCode(0x05D0); //ARABIC LETTER ALEF WITH HAMZA ABOVE -->Alef
    table[0x0624] = 0; //ARABIC LETTER WAW WITH HAMZA ABOVE 
    table[0x0625] = String.fromCharCode(0x05D0); //ARABIC LETTER ALEF WITH HAMZA BELOW -->Alef
    table[0x0626] = 0; //ARABIC LETTER YEH WITH HAMZA ABOVE
    table[0x0627] = String.fromCharCode(0x05D0); //ARABIC LETTER ALEF --> Alef
    table[0x0628] = String.fromCharCode(0x05D1) + String.fromCharCode(0x05BC); //ARABIC LETTER BEH --> Bet + Dagesh
    table[0x0629] = String.fromCharCode(0x05EA); //ARABIC LETTER TEH MARBUTA --> Tav
    table[0x062A] = String.fromCharCode(0x05EA); //ARABIC LETTER TEH -->Tav
    table[0x062B] = String.fromCharCode(0x05EA) + String.fromCharCode(0x05BF); //ARABIC LETTER THEH --> Tav + Line above
    table[0x062C] = 0; //ARABIC LETTER JEEM
    table[0x062D] = 0; //ARABIC LETTER HAH
    table[0x062E] = 0; //ARABIC LETTER KHAH
    table[0x062F] = 0; //ARABIC LETTER DAL
    table[0x0630] = 0; //ARABIC LETTER THAL
    table[0x0631] = 0; //ARABIC LETTER REH
    table[0x0632] = 0; //ARABIC LETTER ZAIN
    table[0x0633] = 0; //ARABIC LETTER SEEN
    table[0x0634] = 0; //ARABIC LETTER SHEEN
    table[0x0635] = 0; //ARABIC LETTER SAD
    table[0x0636] = 0; //ARABIC LETTER DAD
    table[0x0637] = 0; //ARABIC LETTER TAH
    table[0x0638] = 0; //ARABIC LETTER ZAH
    table[0x0639] = 0; //ARABIC LETTER AIN
    table[0x063A] = 0; //ARABIC LETTER GHAIN
    table[0x0640] = 0; //ARABIC TATWEEL
    table[0x0641] = 0; //ARABIC LETTER FEH
    table[0x0642] = 0; //ARABIC LETTER QAF
    table[0x0643] = 0; //ARABIC LETTER KAF
    table[0x0644] = 0; //ARABIC LETTER LAM
    table[0x0645] = 0; //ARABIC LETTER MEEM
    table[0x0646] = 0; //ARABIC LETTER NOON
    table[0x0647] = 0; //ARABIC LETTER HEH
    table[0x0648] = 0; //ARABIC LETTER WAW
    table[0x0649] = 0; //ARABIC LETTER ALEF MAKSURA
    table[0x064A] = 0; //ARABIC LETTER YEH
    table[0x064B] = 0; //ARABIC FATHATAN
    table[0x064C] = 0; //ARABIC DAMMATAN
    table[0x064D] = 0; //ARABIC KASRATAN
    table[0x064E] = 0; //ARABIC FATHA
    table[0x064F] = 0; //ARABIC DAMMA
    table[0x0650] = 0; //ARABIC KASRA
    table[0x0651] = 0; //ARABIC SHADDA
    table[0x0652] = 0; //ARABIC SUKUN
    table[0x0653] = 0; //ARABIC MADDAH ABOVE
    table[0x0654] = 0; //ARABIC HAMZA ABOVE
    table[0x0655] = 0; //ARABIC HAMZA BELOW
    table[0x0660] = 0; //ARABIC-INDIC DIGIT ZERO
    table[0x0661] = 0; //ARABIC-INDIC DIGIT ONE
    table[0x0662] = 0; //ARABIC-INDIC DIGIT TWO
    table[0x0663] = 0; //ARABIC-INDIC DIGIT THREE
    table[0x0664] = 0; //ARABIC-INDIC DIGIT FOUR
    table[0x0665] = 0; //ARABIC-INDIC DIGIT FIVE
    table[0x0666] = 0; //ARABIC-INDIC DIGIT SIX
    table[0x0667] = 0; //ARABIC-INDIC DIGIT SEVEN
    table[0x0668] = 0; //ARABIC-INDIC DIGIT EIGHT
    table[0x0669] = 0; //ARABIC-INDIC DIGIT NINE
    table[0x066A] = 0; //ARABIC PERCENT SIGN
    table[0x066B] = 0; //ARABIC DECIMAL SEPARATOR
    table[0x066C] = 0; //ARABIC THOUSANDS SEPARATOR
    table[0x066D] = 0; //ARABIC FIVE POINTED STAR
    table[0x0670] = 0; //ARABIC LETTER SUPERSCRIPT ALEF
    table[0x0671] = 0x05D0; //ARABIC LETTER ALEF WASLA
    table[0x0672] = 0x05D0; //ARABIC LETTER ALEF WITH WAVY HAMZA ABOVE
    table[0x0673] = 0x05D0; //ARABIC LETTER ALEF WITH WAVY HAMZA BELOW
    table[0x0674] = 0; //ARABIC LETTER HIGH HAMZA
    table[0x0675] = 0; //ARABIC LETTER HIGH HAMZA ALEF
    table[0x0676] = 0; //ARABIC LETTER HIGH HAMZA WAW
    table[0x0677] = 0; //ARABIC LETTER U WITH HAMZA ABOVE
    table[0x0678] = 0; //ARABIC LETTER HIGH HAMZA YEH
    table[0x0679] = 0; //ARABIC LETTER TTEH
    table[0x067A] = 0; //ARABIC LETTER TTEHEH
    table[0x067B] = 0; //ARABIC LETTER BEEH
    table[0x067C] = 0; //ARABIC LETTER TEH WITH RING
    table[0x067D] = 0; //ARABIC LETTER TEH WITH THREE DOTS ABOVE DOWNWARDS
    table[0x067E] = 0; //ARABIC LETTER PEH
    table[0x067F] = 0; //ARABIC LETTER TEHEH
    table[0x0680] = 0; //ARABIC LETTER BEHEH
    table[0x0681] = 0; //ARABIC LETTER HAH WITH HAMZA ABOVE
    table[0x0682] = 0; //ARABIC LETTER HAH WITH TWO DOTS VERTICAL ABOVE
    table[0x0683] = 0; //ARABIC LETTER NYEH
    table[0x0684] = 0; //ARABIC LETTER DYEH
    table[0x0685] = 0; //ARABIC LETTER HAH WITH THREE DOTS ABOVE
    table[0x0686] = 0; //ARABIC LETTER TCHEH
    table[0x0687] = 0; //ARABIC LETTER TCHEHEH
    table[0x0688] = 0; //ARABIC LETTER DDAL
    table[0x0689] = 0; //ARABIC LETTER DAL WITH RING
    table[0x068A] = 0; //ARABIC LETTER DAL WITH DOT BELOW
    table[0x068B] = 0; //ARABIC LETTER DAL WITH DOT BELOW AND SMALL TAH
    table[0x068C] = 0; //ARABIC LETTER DAHAL
    table[0x068D] = 0; //ARABIC LETTER DDAHAL
    table[0x068E] = 0; //ARABIC LETTER DUL
    table[0x068F] = 0; //ARABIC LETTER DAL WITH THREE DOTS ABOVE DOWNWARDS
    table[0x0690] = 0; //ARABIC LETTER DAL WITH FOUR DOTS ABOVE
    table[0x0691] = 0; //ARABIC LETTER RREH
    table[0x0692] = 0; //ARABIC LETTER REH WITH SMALL V
    table[0x0693] = 0; //ARABIC LETTER REH WITH RING
    table[0x0694] = 0; //ARABIC LETTER REH WITH DOT BELOW
    table[0x0695] = 0; //ARABIC LETTER REH WITH SMALL V BELOW
    table[0x0696] = 0; //ARABIC LETTER REH WITH DOT BELOW AND DOT ABOVE
    table[0x0697] = 0; //ARABIC LETTER REH WITH TWO DOTS ABOVE
    table[0x0698] = 0; //ARABIC LETTER JEH
    table[0x0699] = 0; //ARABIC LETTER REH WITH FOUR DOTS ABOVE
    table[0x069A] = 0; //ARABIC LETTER SEEN WITH DOT BELOW AND DOT ABOVE
    table[0x069B] = 0; //ARABIC LETTER SEEN WITH THREE DOTS BELOW
    table[0x069C] = 0; //ARABIC LETTER SEEN WITH THREE DOTS BELOW AND THREE DOTS ABOVE
    table[0x069D] = 0; //ARABIC LETTER SAD WITH TWO DOTS BELOW
    table[0x069E] = 0; //ARABIC LETTER SAD WITH THREE DOTS ABOVE
    table[0x069F] = 0; //ARABIC LETTER TAH WITH THREE DOTS ABOVE
    table[0x06A0] = 0; //ARABIC LETTER AIN WITH THREE DOTS ABOVE
    table[0x06A1] = 0; //ARABIC LETTER DOTLESS FEH
    table[0x06A2] = 0; //ARABIC LETTER FEH WITH DOT MOVED BELOW
    table[0x06A3] = 0; //ARABIC LETTER FEH WITH DOT BELOW
    table[0x06A4] = 0; //ARABIC LETTER VEH
    table[0x06A5] = 0; //ARABIC LETTER FEH WITH THREE DOTS BELOW
    table[0x06A6] = 0; //ARABIC LETTER PEHEH
    table[0x06A7] = 0; //ARABIC LETTER QAF WITH DOT ABOVE
    table[0x06A8] = 0; //ARABIC LETTER QAF WITH THREE DOTS ABOVE
    table[0x06A9] = 0; //ARABIC LETTER KEHEH
    table[0x06AA] = 0; //ARABIC LETTER SWASH KAF
    table[0x06AB] = 0; //ARABIC LETTER KAF WITH RING
    table[0x06AC] = 0; //ARABIC LETTER KAF WITH DOT ABOVE
    table[0x06AD] = 0; //ARABIC LETTER NG
    table[0x06AE] = 0; //ARABIC LETTER KAF WITH THREE DOTS BELOW
    table[0x06AF] = 0; //ARABIC LETTER GAF
    table[0x06B0] = 0; //ARABIC LETTER GAF WITH RING
    table[0x06B1] = 0; //ARABIC LETTER NGOEH
    table[0x06B2] = 0; //ARABIC LETTER GAF WITH TWO DOTS BELOW
    table[0x06B3] = 0; //ARABIC LETTER GUEH
    table[0x06B4] = 0; //ARABIC LETTER GAF WITH THREE DOTS ABOVE
    table[0x06B5] = 0; //ARABIC LETTER LAM WITH SMALL V
    table[0x06B6] = 0; //ARABIC LETTER LAM WITH DOT ABOVE
    table[0x06B7] = 0; //ARABIC LETTER LAM WITH THREE DOTS ABOVE
    table[0x06B8] = 0; //ARABIC LETTER LAM WITH THREE DOTS BELOW
    table[0x06B9] = 0; //ARABIC LETTER NOON WITH DOT BELOW
    table[0x06BA] = 0; //ARABIC LETTER NOON GHUNNAar2he
    table[0x06BB] = 0; //ARABIC LETTER RNOON
    table[0x06BC] = 0; //ARABIC LETTER NOON WITH RING
    table[0x06BD] = 0; //ARABIC LETTER NOON WITH THREE DOTS ABOVE
    table[0x06BE] = 0; //ARABIC LETTER HEH DOACHASHMEE
    table[0x06BF] = 0; //ARABIC LETTER TCHEH WITH DOT ABOVE
    table[0x06C0] = 0; //ARABIC LETTER HEH WITH YEH ABOVE
    table[0x06C1] = 0; //ARABIC LETTER HEH GOAL
    table[0x06C2] = 0; //ARABIC LETTER HEH GOAL WITH HAMZA ABOVE
    table[0x06C3] = 0; //ARABIC LETTER TEH MARBUTA GOAL
    table[0x06C4] = 0; //ARABIC LETTER WAW WITH RING
    table[0x06C5] = 0; //ARABIC LETTER KIRGHIZ OE
    table[0x06C6] = 0; //ARABIC LETTER OE
    table[0x06C7] = 0; //ARABIC LETTER U
    table[0x06C8] = 0; //ARABIC LETTER YU
    table[0x06C9] = 0; //ARABIC LETTER KIRGHIZ YU
    table[0x06CA] = 0; //ARABIC LETTER WAW WITH TWO DOTS ABOVE
    table[0x06CB] = 0; //ARABIC LETTER VE
    table[0x06CC] = 0; //ARABIC LETTER FARSI YEH
    table[0x06CD] = 0; //ARABIC LETTER YEH WITH TAIL
    table[0x06CE] = 0; //ARABIC LETTER YEH WITH SMALL V
    table[0x06CF] = 0; //ARABIC LETTER WAW WITH DOT ABOVE
    table[0x06D0] = 0; //ARABIC LETTER E
    table[0x06D1] = 0; //ARABIC LETTER YEH WITH THREE DOTS BELOW
    table[0x06D2] = 0; //ARABIC LETTER YEH BARREE
    table[0x06D3] = 0; //ARABIC LETTER YEH BARREE WITH HAMZA ABOVE
    table[0x06D4] = 0; //ARABIC FULL STOP
    table[0x06D5] = 0; //ARABIC LETTER AE
    // table[0x06D6] = 0; //ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA
    // table[0x06D7] = 0; //ARABIC SMALL HIGH LIGATURE QAF WITH LAM WITH ALEF MAKSURA
    // table[0x06D8] = 0; //ARABIC SMALL HIGH MEEM INITIAL FORM
    // table[0x06D9] = 0; //ARABIC SMALL HIGH LAM ALEF
    // table[0x06DA] = 0; //ARABIC SMALL HIGH JEEM
    // table[0x06DB] = 0; //ARABIC SMALL HIGH THREE DOTS
    // table[0x06DC] = 0; //ARABIC SMALL HIGH SEEN
    // table[0x06DD] = 0; //ARABIC END OF AYAH
    // table[0x06DE] = 0; //ARABIC START OF RUB EL HIZB
    // table[0x06DF] = 0; //ARABIC SMALL HIGH ROUNDED ZERO
    // table[0x06E0] = 0; //ARABIC SMALL HIGH UPRIGHT RECTANGULAR ZERO
    // table[0x06E1] = 0; //ARABIC SMALL HIGH DOTLESS HEAD OF KHAH
    // table[0x06E2] = 0; //ARABIC SMALL HIGH MEEM ISOLATED FORM
    // table[0x06E3] = 0; //ARABIC SMALL LOW SEEN
    // table[0x06E4] = 0; //ARABIC SMALL HIGH MADDA
    // table[0x06E5] = 0; //ARABIC SMALL WAW
    // table[0x06E6] = 0; //ARABIC SMALL YEH
    // table[0x06E7] = 0; //ARABIC SMALL HIGH YEH
    // table[0x06E8] = 0; //ARABIC SMALL HIGH NOON
    // table[0x06E9] = 0; //ARABIC PLACE OF SAJDAH
    // table[0x06EA] = 0; //ARABIC EMPTY CENTRE LOW STOP
    // table[0x06EB] = 0; //ARABIC EMPTY CENTRE HIGH STOP
    // table[0x06EC] = 0; //ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE
    // table[0x06ED] = 0; //ARABIC SMALL LOW MEEM
    table[0x06F0] = 0; //EXTENDED ARABIC-INDIC DIGIT ZERO
    table[0x06F1] = 0; //EXTENDED ARABIC-INDIC DIGIT ONE
    table[0x06F2] = 0; //EXTENDED ARABIC-INDIC DIGIT TWO
    table[0x06F3] = 0; //EXTENDED ARABIC-INDIC DIGIT THREE
    table[0x06F4] = 0; //EXTENDED ARABIC-INDIC DIGIT FOUR
    table[0x06F5] = 0; //EXTENDED ARABIC-INDIC DIGIT FIVE
    table[0x06F6] = 0; //EXTENDED ARABIC-INDIC DIGIT SIX
    table[0x06F7] = 0; //EXTENDED ARABIC-INDIC DIGIT SEVEN
    table[0x06F8] = 0; //EXTENDED ARABIC-INDIC DIGIT EIGHT
    table[0x06F9] = 0; //EXTENDED ARABIC-INDIC DIGIT NINE
    table[0x06FA] = 0; //ARABIC LETTER SHEEN WITH DOT BELOW
    table[0x06FB] = 0; //ARABIC LETTER DAD WITH DOT BELOW
    table[0x06FC] = 0; //ARABIC LETTER GHAIN WITH DOT BELOW
    // table[0x06FD] = 0; //ARABIC SIGN SINDHI AMPERSAND
    // table[0x06FE] = 0; //ARABIC SIGN SINDHI POSTPOSITION MEN
    return table;
}

var textTable = ar2he();

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
            out += letter;
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