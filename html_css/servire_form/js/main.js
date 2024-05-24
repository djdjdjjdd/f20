document.getElementsByClassName('container')[0].insertAdjacentHTML('afterbegin', getHeaderUi())
// y tuong 1 form co nhieu input
//1 input can check nhieu dieu kien(validation)

function resetErrorElements() {
    const errorElements = document.getElementsByClassName('error');

    for (const errorElement of errorElements) {
        errorElement.innerHTML = '';
    }
}

function validateSurveyForm() {
    try {
        //logic chinh

        // reset cac element hien thi message loi
        resetErrorElements();

        // mang error chua danh sach loi cua user nhap vao
        const errors = [];

        // check inputs cua form

        // check input name
        const validateNameInput = validateInput(
            'surveyForm',
            'name',
            [
                {
                    type: 'required'
                },
                {
                    type: 'maxLength',
                    value: 50
                }
            ]
        );

        if (validateNameInput) {
            errors.push(validateNameInput);
        }

        // check input email
        const validateEmailInput = validateInput(
            'surveyForm',
            'email',
            [
                {
                    type: 'required'
                },
                {
                    type: 'maxLength',
                    value: 50
                },
                {
                    type: 'email'
                }
            ]
        );

        if (validateEmailInput) {
            errors.push(validateEmailInput);
        }

        if (!errors.length) {
            return true;
        }

        for (const error of errors) {
            document.getElementById('error_' + error.name).innerHTML = error.message;

        }
        document.forms['surveyForm'][errors[0].name].focus();

        return false;
    } catch (e) {
        // xu ly loi khi logic chinh xay ra loi
        console.log(e);

        return false;
    }
}

// form ten form bat ki
//input ten input trong for,
// validations mang cac  dieu kien minh muon check gia trij cua input
function validateInput(form, input, validations) {
    const surveyFormElement = document.forms[form];
    // const surveyFormElement = document.getElementById('surveyForm');
    const inputElement = surveyFormElement[input];
    let error = null;

    for (const validation of validations) {
        switch (validation.type) {
            case 'required':
                if (!inputElement.value.length) {
                    error = {
                        name: input,
                        message: input + 'khong duoc de trong'
                    }
                }
                break;
            case 'maxLength':
                if (inputElement.value.length > validation.value) {
                    error = {
                        name: input,
                        message: input + 'khong duoc lon hon' + validation.value

                    }
                }
                break;
            case 'email':
                if (inputElement.value.length && !inputElement.value.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) {
                    error = {
                        name: 'email'
                    }
                }
                break;
        }
    }

    return error;
}

function getHeaderUi() {
    return `
        <div class='header'>
            <h1>freeCodeCamp survey Form</h1>
            <p>Thank you</p>
        </div>
    `
}
