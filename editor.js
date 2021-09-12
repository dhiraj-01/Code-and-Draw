var editor = ace.edit("editor");
editor.setOptions({
   enableBasicAutocompletion: true, 
   enableLiveAutocompletion: true,
   showPrintMargin: false, 
   fontSize: "20px"
});
editor.setTheme("ace/theme/monokai");
// editor.session.setMode("ace/mode/c_cpp");

function setFont(sz) {
    console.log(sz);
    editor.setFontSize(`${sz}px`);
}
function setLanguage(lang) {
    console.log(lang);
    editor.session.setMode(`ace/mode/${lang}`);
}