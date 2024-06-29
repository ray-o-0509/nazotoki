let portal_count = 0;

function portal_clicked() {
    portal_count++;
    if (portal_count == 8) {
        setTimeout(() => {
            if (portal_count == 8) {
                location.href = '43ru93fj.html';
            }
        }, 1000);
    }

    setTimeout(() => {
        portal_count = 0;
    }, 10000);

}

const mahoujin_answers = ['8', '5', '7', '4', '20', '3', '2', '9'];

function check_answer() {
    for (let index = 0; index < mahoujin_answers.length; index++) {
        let data = $('.input_' + index).val();
        console.log(data);
        if (data != mahoujin_answers[index]) {
            alert('答えが間違っています。※半角で入力してない場合も表示されます。');
            return;
        }
    }
    alert('正解！');
    location.href = 'index.html';
}

function check_aikotoba() {
    let data = $('.input_aikotoba').val();
    console.log(data);
    if (data == '5483927') {
        location.href = 'thy3kf.html';
    } else {
        alert('あいことばが間違っています。※半角で入力してない場合も表示されます。');
    }
}


function check_pw() {
    let data = $('.input_pw').val();
    // console.log(data);
    if (data == '11463') {
        location.href = 'done.html';
    } else {
        alert('回答が間違っています。※半角で入力してない場合も表示されます。');
    }
}