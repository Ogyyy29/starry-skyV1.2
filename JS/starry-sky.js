// 1 фото планеты
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var planet = document.querySelector('.planet');
  var triggerPoint = 180; // Точка, при достижении которой будет изменен фон
  var maxScroll = 570; // Максимальная длина прокрутки, при которой прозрачность будет 100%

  if (scrollPosition > triggerPoint) {
    var opacity = (scrollPosition - triggerPoint) / maxScroll; // Рассчитываем прозрачность на основе длины прокрутки
    planet.style.opacity = opacity.toString(); // Применяем вычисленную прозрачность
    planet.style.transition = 'opacity 0.5s ease'; // Добавляем плавное появление
  } else {
    planet.style.opacity = '0'; // Скрываем планету, если прокрутка ниже triggerPoint
  }
});

// 2 фото планеты
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var planet = document.querySelector('.planet-2');
  var triggerPoint = 1000; // Точка, при достижении которой будет изменен фон
  var maxScroll = 570; // Максимальная длина прокрутки, при которой прозрачность будет 100%

  if (scrollPosition > triggerPoint) {
    var opacity = (scrollPosition - triggerPoint) / maxScroll; // Рассчитываем прозрачность на основе длины прокрутки
    planet.style.opacity = opacity.toString(); // Применяем вычисленную прозрачность
    planet.style.transition = 'opacity 0.5s ease'; // Добавляем плавное появление
  } else {
    planet.style.opacity = '0'; // Скрываем планету, если прокрутка ниже triggerPoint
  }
});


// 3 фото планеты
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var planet = document.querySelector('.planet-3');
  var triggerPoint = 1750; // Точка, при достижении которой будет изменен фон
  var maxScroll = 570; // Максимальная длина прокрутки, при которой прозрачность будет 100%

  if (scrollPosition > triggerPoint) {
    var opacity = (scrollPosition - triggerPoint) / maxScroll; // Рассчитываем прозрачность на основе длины прокрутки
    planet.style.opacity = opacity.toString(); // Применяем вычисленную прозрачность
    planet.style.transition = 'opacity 0.5s ease'; // Добавляем плавное появление
  } else {
    planet.style.opacity = '0'; // Скрываем планету, если прокрутка ниже triggerPoint
  }
});


// 4 фото планеты
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var planet = document.querySelector('.planet-4');
  var triggerPoint = 2550; // Точка, при достижении которой будет изменен фон
  var maxScroll = 570; // Максимальная длина прокрутки, при которой прозрачность будет 100%

  if (scrollPosition > triggerPoint) {
    var opacity = (scrollPosition - triggerPoint) / maxScroll; // Рассчитываем прозрачность на основе длины прокрутки
    planet.style.opacity = opacity.toString(); // Применяем вычисленную прозрачность
    planet.style.transition = 'opacity 0.5s ease'; // Добавляем плавное появление
  } else {
    planet.style.opacity = '0'; // Скрываем планету, если прокрутка ниже triggerPoint
  }
});


// кнопка смены день-ночь
const toggleButton = document.getElementById('toggleBackground');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('night-mode');
});

// Кнопка интересные факты
let facts = [
  "Некоторые яркие точки на небе – галактики, а не звёзды",
  "Половина населения Земли (а по некоторым подсчетам, даже две трети) никогда не видели снега (а некоторые и воды...)",
  "Кубик Рубика – товар, который больше всего продается в мире. На втором месте – iPhone (когда не хватило денег на эпл)",
  "Чтобы пересмотреть все видео на YouTube, понадобится 1000 лет",
  "Самый сильный мускул человеческого тела – язык (ты знаешь кому это отправить)",
  "Вероятность того, что молния ударит в мужчину в 6 раз выше, чем в женщину (феминистки обрадовались)",
  "Если бы в Coca-Cola не добавляли краситель, она была бы зеленого цвета (если бы у бабушки был бы кхм... она была бы дедушкой)",
  "Четырехлетний ребенок в среднем задает 400 вопросов в день (еще одна причина не заводить детей)",
  "На шлемах астронавтов есть специальное устройство, чтобы чесать нос (топ 5 полезных функций,1 место -)",
  "Вероятность стать президентом у каждого человека выше, чем выиграть в лотерею. Кстати, умереть по дороге за лотерейным билетом также более вероятно, чем победить (не играйте, пацаны, вы еще в президенты нужны)",
  "Емкость мозга человека превышает 4 терабайта (почему я тогда такой тупой)",
  "Один человеческий мозг генерирует больше электрических импульсов в течение одного дня, чем все телефоны мира, вместе взятые (почему тогда я такой тупой х2)",
  "Среднее человеческое тело содержит достаточно серы, чтобы убить всех блох на средней собаке; углерода - чтобы изготовить 900 карандашей; калия - чтобы выстрелить из игрушечной пушки; жира - чтобы сделать 7 кусков мыла; и достаточно воды, чтобы заполнить бочку в 50 литров (вопросы по методам подсчета опустим...)",
  "Сердце человека перекачивает 182 миллиона литров крови в своей жизни (значит если сдавать кровь на протяжении всей своей жизни...зачем я вообще работаю?)"
  // Добавьте здесь еще факты по вашему выбору
];

const factDisplay = document.getElementById('factDisplay');
const interestingFactsButton = document.getElementById('InterestingFacts');

// Функция для отображения случайного факта
function displayRandomFact() {
  if (facts.length === 0) {
    factDisplay.textContent = 'Это все факты на сегодня (ставь лайк и подписывайся на канал)'; // Сообщение, если все факты использованы
    return;
  }

  // Генерируем случайный индекс для выбора случайного факта из массива
  const randomIndex = Math.floor(Math.random() * facts.length);
  // Отображаем случайный факт
  factDisplay.textContent = facts[randomIndex];
  
  // Удаляем использованный факт из массива
  facts.splice(randomIndex, 1);
}

// Обработчик события клика на кнопке "Интересные факты"
interestingFactsButton.addEventListener('click', displayRandomFact);

// Обработчик события клика на документе для скрытия текста с фактом
document.addEventListener('click', function(event) {
  // Проверяем, был ли клик выполнен вне кнопки "Интересные факты"
  if (event.target !== interestingFactsButton) {
    // Если да, скрываем текст с фактом
    factDisplay.textContent = '';
  }
});


// КНОПКИ ЭЭФЕКТОВ
const effectsButton = document.getElementById('effects');
const effectsMenu = document.getElementById('effectsMenu');

// Обработчик события для кнопки "Полное погружение"
effectsButton.addEventListener('click', function() {
  effectsMenu.classList.toggle('show');
  
  // Добавим проверку, чтобы закрывать меню при повторном нажатии на кнопку "Полное погружение"
  if (!effectsMenu.classList.contains('show')) {
    effectsMenu.style.display = 'none';
  } else {
    effectsMenu.style.display = 'flex'; // Используем 'flex' вместо 'block' для отображения меню
  }
});

// Добавьте обработчики событий для выбранных эффектов по аналогии
document.getElementById('effect1').addEventListener('click', function() {
  // Действия при выборе эффекта 1
});

document.getElementById('effect2').addEventListener('click', function() {
  // Действия при выборе эффекта 2
});

// Добавляем обработчики событий для каждого эффекта
const effectButtons = document.querySelectorAll('.effect-option');
effectButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Проверяем, какой эффект выбран
    let effectName = '';
    switch (button.id) {
      case 'effect1':
        effectName = 'Звук';
        break;
      case 'effect2':
        effectName = 'Мерцание';
        break;
      case 'effect3':
        effectName = 'Падающие звезды';
        break;
    }

    // Проверяем, включен ли уже выбранный эффект
    if (button.classList.contains('active')) {
      // Если эффект уже включен, выводим уведомление о выключении
      showNotification(`Эффект "${effectName}" выключен`);
      button.classList.remove('active');
    } else {
      // Иначе, если эффект еще не включен, выводим уведомление о включении
      showNotification(`Эффект "${effectName}" включен`);
      button.classList.add('active');
    }
  });
});
// Функция для показа уведомления
function showNotification(message) {
  // Создаем элемент уведомления
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;

  // Добавляем уведомление на страницу
  document.body.appendChild(notification);

  // Скрываем уведомление через 3 секунды
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      notification.remove();
    }, 1000);
  }, 2000);
}


// Звук
// Получаем ссылку на аудиоэлемент
const soundEffect = document.getElementById('soundEffect');

// Флаг для отслеживания состояния звука
let isSoundOn = false;

// Добавляем обработчик события для кнопки "Звук"
document.getElementById('effect1').addEventListener('click', function() {
  if (isSoundOn) {
    // Если звук уже включен, выключаем его
    soundEffect.pause();
    soundEffect.currentTime = 0; // Сбрасываем воспроизведение в начало
    isSoundOn = false;
    
  } else {
    // Если звук выключен, включаем его
    soundEffect.play();
    isSoundOn = true;
  }
});


// Эффект мерцания
// Объявляем переменную для хранения состояния эффекта мерцания
let isSparkling = false;

// Объявляем переменную для хранения контейнера с мерцающими точками
let sparklesContainer = null;

// Функция для создания мерцающих точек
function createSparkles() {
  // Создаем новый контейнер с мерцающими точками
  sparklesContainer = document.createElement('div');
  sparklesContainer.classList.add('sparkles');
  document.body.appendChild(sparklesContainer);

  // Создаем 75 мерцающих точек
  for (let i = 0; i < 75; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Добавляем мерцающую точку в контейнер
    sparklesContainer.appendChild(sparkle);
  }
}

// Функция для обновления позиций мерцающих точек
function updateSparkles() {
  // Если эффект мерцания активен
  if (isSparkling) {
    // Обновляем позиции каждой точки с небольшой задержкой
    const sparkles = sparklesContainer.querySelectorAll('.sparkle');
    sparkles.forEach(sparkle => {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
      }, Math.random() * 5000000); 
    });
  }
}

// Добавляем обработчик события для эффекта "Мерцание"
document.getElementById('effect2').addEventListener('click', function() {
  // Если эффект мерцания активен, то выключаем его
  if (isSparkling) {
    // Удаляем контейнер с мерцающими точками
    if (sparklesContainer) {
      sparklesContainer.remove();
      sparklesContainer = null;
    }
    isSparkling = false;
    return;
  }

  // Создаем мерцающие точки
  createSparkles();

  // Устанавливаем флаг активности эффекта мерцания в true
  isSparkling = true;

  // Запускаем функцию обновления позиций мерцающих точек через requestAnimationFrame
  function update() {
    updateSparkles();
    requestAnimationFrame(update);
  }
  update();
});



// Эффект падающих звезд
let starsAreFalling = false;
   let starsContainer = null;

   function createStars() {
     if (!starsAreFalling) {
       starsAreFalling = true;
       starsContainer = document.createElement('div');
       starsContainer.classList.add('sky');
       document.body.appendChild(starsContainer);
       for (let i = 0; i < 15; i++) {
         const star = document.createElement('div');
         star.className = 'star';
         starsContainer.appendChild(star);
         const x = Math.random() * window.innerWidth;
         const y = Math.random() * -window.innerHeight;
         const speed = Math.random() * 4 + 1;
         const angle = Math.random() * Math.PI / 4 - Math.PI / 8; // Случайный угол наклона
         const horizontalSpeed = Math.sin(angle) * speed; // Горизонтальная составляющая скорости
         const verticalSpeed = Math.cos(angle) * speed; // Вертикальная составляющая скорости
         star.style.left = `${x}px`;
         star.style.top = `${y}px`;
         animateStar(star, horizontalSpeed, verticalSpeed);
       }
     }
   }

   function stopStars() {
     if (starsAreFalling) {
       starsAreFalling = false;
       starsContainer.remove();
     }
   }

   function animateStar(star, horizontalSpeed, verticalSpeed) {
     const windowHeight = window.innerHeight;
     const windowWidth = window.innerWidth;

     function moveStar() {
       let currentY = parseFloat(star.style.top);
       let currentX = parseFloat(star.style.left);
       if (currentY >= windowHeight || currentX <= 0 || currentX >= windowWidth) {
         star.style.top = `${-10}px`;
         star.style.left = `${Math.random() * windowWidth}px`; // Перемещаем звезду на случайную горизонтальную позицию
       } else {
         currentY += verticalSpeed;
         currentX += horizontalSpeed;
         star.style.top = `${currentY}px`;
         star.style.left = `${currentX}px`;
       }
     }

     setInterval(moveStar, 1000 / 60);
   }

   document.getElementById('effect3').addEventListener('click', function() {
     if (starsAreFalling) {
       stopStars();
     } else {
       createStars();
     }
   });



   
   
 