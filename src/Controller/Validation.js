export class Validation{
    required(value, messageError, id){
        const element = document.getElementById(id);
        if(value.trim() === '' || value.trim() === null || value.trim() === undefined || value.trim() === 0 || value.trim() === '0'){
            element.innerHTML = messageError;
            element.style.display = 'block';
            return false;
        }
        element.innerHTML = '';
        element.style.display = 'none';
        return true
    }

    checkTaiKhoan(lenght, messageError, id){
        const element = document.getElementById(id);
        if( lenght < 4 || lenght > 6){
            element.innerHTML = messageError;
            element.style.display = 'block';
            return false;
        }
        element.innerHTML = '';
        element.style.display = 'none';
        return true
    }

    checkLuongCoBan(value, messageError, id){
        const element = document.getElementById(id);
        if( value < 1000000 || value > 20000000 | Number.isNaN(value)){
            element.innerHTML = messageError;
            element.style.display = 'block';
            return false;
        }
        element.innerHTML = '';
        element.style.display = 'none';
        return true
    }

    checkGioLam(value, messageError, id){
        const element = document.getElementById(id);
        if( value < 80 || value > 200 | Number.isNaN(value)){
            element.innerHTML = messageError;
            element.style.display = 'block';
            return false;
        }
        element.innerHTML = '';
        element.style.display = 'none';
        return true
    }

    regexText(value, messageError, id) {
        const element = document.getElementById(id);;
        const regex = /^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵđèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ\s]+$/u
        if (regex.test(value.trim())) {
            element.innerHTML = '';
            element.style.display = 'none';
            return true;
        }
        element.innerHTML = messageError;
        element.style.display = 'block';
        return false;
    }

    regexEmail(value, messageError, id) {
        const element = document.getElementById(id);;
        const regex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (regex.test(value)) {
            element.innerHTML = '';
            element.style.display = 'none';
            return true;
        }
        element.innerHTML = messageError;
        element.style.display = 'block';
        return false;
    }

    regexPassword(value, messageError, id) {
        const element = document.getElementById(id);;
        const regex =  /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,10}$/
        if (regex.test(value)) {
            element.innerHTML = '';
            element.style.display = 'none';
            return true;
        }
        element.innerHTML = messageError;
        element.style.display = 'block';
        return false;
    }

}