var editor = ace.edit("editor");
editor.setOptions({
   enableBasicAutocompletion: true, 
   enableLiveAutocompletion: true,
   showPrintMargin: false, 
   fontSize: "20px"
});
editor.setTheme("ace/theme/monokai");

let cur_lang = "text";
let cur_font_size = "20px";

if (typeof(Storage) !== "undefined") {
    let code = localStorage.getItem("code");
    let lang = localStorage.getItem("lang");
    let fontSize = localStorage.getItem("font-size");
    if(code) {
        editor.setValue(code);
    }
    if(lang) {
        setLanguage(lang);
    }
    if(fontSize) {
        setFont(fontSize);
    }
}

function setFont(sz) {
    console.log(sz);
    cur_font_size = sz;
    editor.setFontSize(`${sz}px`);
}
function setLanguage(lang) {
    console.log(lang);
    cur_lang = lang;
    editor.session.setMode(`ace/mode/${lang}`);
}

function save() {
    let code = editor.getValue();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("code", code);
        localStorage.setItem("lang", cur_lang);
        localStorage.setItem("font-size", cur_font_size);
    }
}
setInterval(save, 5000);