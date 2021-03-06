function validateComments(input) {
    if (input.value.length < 20) {
        input.setCustomValidity("Дайте более развернутый ответ.");
    }
    else {
        // Длина комментария отвечает требованию,
        // поэтому очищаем сообщение об ошибке
        input.setCustomValidity("");
    }
}
function outputUpdate(vol) {

    document.querySelector('#Возраст').value = vol;

}