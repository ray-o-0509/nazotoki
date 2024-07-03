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


$(document).ready(function () {
    const $map = $('.map_innner_div');
    const containerWidth = $('.map_outer_div').width();
    const containerHeight = $('.map_outer_div').height();
    const mapWidth = $map.width();
    const mapHeight = $map.height();
    let mapX = 0;
    let mapY = 0;
    const step = 5;
    const keys = {};

    const moveMap = () => {
      if (keys['w'] && keys['a']) {
        if (mapY + step <= 0) mapY += step;
        if (mapX + step <= 0) mapX += step;
      } else if (keys['w'] && keys['d']) {
        if (mapY + step <= 0) mapY += step;
        if (mapX - step >= containerWidth - mapWidth) mapX -= step;
      } else if (keys['s'] && keys['a']) {
        if (mapY - step >= containerHeight - mapHeight) mapY -= step;
        if (mapX + step <= 0) mapX += step;
      } else if (keys['s'] && keys['d']) {
        if (mapY - step >= containerHeight - mapHeight) mapY -= step;
        if (mapX - step >= containerWidth - mapWidth) mapX -= step;
      } else if (keys['w']) {
        if (mapY + step <= 0) mapY += step;
      } else if (keys['a']) {
        if (mapX + step <= 0) mapX += step;
      } else if (keys['s']) {
        if (mapY - step >= containerHeight - mapHeight) mapY -= step;
      } else if (keys['d']) {
        if (mapX - step >= containerWidth - mapWidth) mapX -= step;
      }
      $map.css('transform', `translate(${mapX}px, ${mapY}px)`);
    }

    let interval;

    $(document).keydown(function(event) {
      keys[event.key] = true;
      if (!interval) {
        interval = setInterval(moveMap, 5);
      }
    });

    $(document).keyup(function(event) {
      delete keys[event.key];
      if (Object.keys(keys).length === 0) {
        clearInterval(interval);
        interval = null;
      }
    });

   
    $map.on('mousedown', function(event) {
        isDragging = true;
        lastX = event.clientX;
        lastY = event.clientY;
        event.preventDefault();  // Prevent default dragging of selected content
      });

      $(document).on('mousemove', function(event) {
        if (isDragging) {
          const deltaX = event.clientX - lastX;
          const deltaY = event.clientY - lastY;
          mapX = Math.min(0, Math.max(containerWidth - mapWidth, mapX + deltaX));
          mapY = Math.min(0, Math.max(containerHeight - mapHeight, mapY + deltaY));
          $map.css('transform', `translate(${mapX}px, ${mapY}px)`);
          lastX = event.clientX;
          lastY = event.clientY;
        }
      });

      $(document).on('mouseup', function() {
        isDragging = false;
      });

      $map.on('dragstart', function(event) {
        event.preventDefault();  // Prevent default dragging behavior
      });
  });