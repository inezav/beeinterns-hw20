function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender} = data;

    if (login === 'beeline') {
        alert('Логин занят. Введите другой.');
    } else if (login === 'bee') {
        alert('Логин занят. Введите другой пароль.');
    } else if (login === 'beeinterns') {
        alert('Логин занят. Введите другой пароль.');
    }

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!firstName) {
        alert('Необходимо ввести имя!');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        let askGender;
        if (gender === 'male') {
            askGender = 'Уважаемый';
        } else {
            askGender = 'Уважаемая';
        }
        alert (`${askGender} ${firstName}, заявка создана!`);
    } 
}

