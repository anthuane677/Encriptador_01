const primertexto = document.getElementById("tex1");
const segundotexto = document.getElementById("textnuevo");

const codigo = [
    ["a", "ʕ•́ᴥ•̀ʔっ"],
    ["b", "(̶◉͛‿◉̶)"],
    ["c", "≧◉ᴥ◉≦"],
    ["d", "(ㆆ_ㆆ)"],
    ["e", "( ˘︹˘ )"],
    ["á", "(ง︡'-'︠)ง"],
    ["é", "(╥︣﹏᷅╥)"],
    ["í", "(>‿◠)"],
    ["ó", "(ɔ◔‿◔)ɔ"],
    ["ú", "(っ＾▿＾)"],
    ["f", "٩(˘◡˘)۶"],
    ["g", "(✿◠‿◠) "],
    ["h", "≧◠‿◠≦"],
    ["i", "(͡• ͜ʖ ͡•)"],
    ["j", "(͡° ͜ʖ ͡°)"],
    ["k", "(❛‿❛✿̶̥̥)"],
    ["l", "ᕙ(^▿^-ᕙ)"],
    ["m", "ᕙ(`▿´)ᕗ"],
    ["n", " (•◡•) /"],
    ["ñ", "(¬‿¬)"],
    ["o", "(─‿‿─)"],
    ["p", "≧◠‿●‿◠≦"],
    ["q", "≧◠ᴥ◠≦"],
    ["r", "（っ＾▿＾）"],
    ["s", "☜(▿c)"],
    ["t", "(͠≖ ͜ʖ͠≖)"],
    ["u", " つ︣﹏╰）"],
    ["v", "ಥ_ಥ"],
    ["w", "(╥﹏╥)"],
    ["x", "(≖_≖ )"],
    ["y", "(҂◡̀_◡́)ᕤ"],
    ["z", "凸(¬‿¬)凸"],
    ["1", "(◣◢)┌∩┐"],
    ["2", "t(>.<t)"],
    ["3", "(`▿´) "],
    ["4", "┻━┻ ︵ヽ(`▭´)ﾉ ┻━┻"],
    ["5", "(ᕗ ಠ︡益︠ಠ︠)ᕗ ┬━━━━┬"],
    ["6", "(⊙.⊙(◉̃_᷅◉)⊙.⊙)"],
    ["7", "⁀⊙﹏☉⁀"],
    ["8", "( ≖.≖)"],
    ["9", "(͠◉_◉᷅ )"],
    ["0", "(ɔ˘ ³(c)"],
    ["@", "(ˆ‿ˆԅ)"],

    
];

function btnEncriptar() {
    const textoEncriptado = encriptar(primertexto.value);
    segundotexto.value = textoEncriptado;
    primertexto.value = "";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(primertexto.value);
    segundotexto.value = textoDesencriptado;
    primertexto.value = "";
}

function encriptar(stringEncriptado) {
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < codigo.length; i++) {
        if (stringEncriptado.includes(codigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i = 0; i < codigo.length; i++) {
        if (stringDesencriptado.includes(codigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function btnCopiar() {
    const textocopiado = segundotexto.value;
    navigator.clipboard.writeText(textocopiado);
}
