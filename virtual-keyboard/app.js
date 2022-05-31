var $keyboardWrapper = $('.virtual-keyboard'),
    $key = $keyboardWrapper.find('input'),
    $key_delete = $('.delete'),
    $key_shift = $('.shift'),
    $outputField = $('.output input'),
    $currentValue = $outputField.val(),
    actionKey = $('.delete, .shift')
    activeShiftClass = 'shift-activated';

function _keystroke (keyCase) {
    $key.not(actionKey).on('click', function (e) {
        e.preventDefault();
        // check for the shift key
        if($key_shift.hasClass(activeShiftClass)) {
            keyCase = 'upper';
            $key_shift.removeClass(activeShiftClass);
        } else {
            keyCase = 'lower';
        }
        //handle case
        if(keyCase == 'upper') {
            var keyVal = $(this).val().toUpperCase();
        } else {
            var keyVal = $(this).val().toLowerCase();
        }
        //grap current value
        var output = $('.output input').val();
        $outputField.val(output + keyVal);
        getCurrentValue();
        focusOutputField();
    });
}

$key_delete.on('click', function (e) {
    e.preventDefault();
    $outputField.val($currentValue.substr(0, $currentValue.length -1));
    getCurrentValue();
    focusOutputField();
});

$key_shift.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass(activeShiftClass);
});

function getCurrentValue(){
    $currentValue = $outputField.val();
}

function focusOutputField(){
    $outputField.focus();
}

_keystroke('lower');