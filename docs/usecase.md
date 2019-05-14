# Use Case

## 1. Аутентификация в системе
Цель - войти в систему под своей учетной записью
Действующее лицо - Пользователь с любой ролью (Игрок, Администратор)
### Основной сценарий
1. Не аутентифицированный пользователь заходит на домашнюю страницу
2. Система предлагает пользователю аутентифицироваться (ввести логин и пароль)
3. Пользователь успешно аутентифицировался (
    3a. Пользователь  не смог аутентифицироваться
    3b. Пользователь не имеет учетной записи
    )
4. Система переадресует пользователя на страницу с игрой
### Альтернативный сценарий A
3а. Пользователь не смог аутентифициироваться
4а. Система предлагает пользователю аутентифицироваться еще раз
сценарий продолжается с пункта 3 основного сценария
### Альтернативный сценарий B
3b. Пользователь не имеет учетной записи
4b. Пользователь переходит в режим создания учетной записи
5b. Пользователь успешно создает уникальную учетную запись (5c. Пользователь не смог создать учетную запись)
сценарий продолжается с пункта 2 основного сценария
### Альтернативный сценарий C
5c. Пользователь не смог создать учетную запись
6c. Система предлагает пользователю создать учетную запись еще раз
сценарий продолжается с пункта 4b

## 2. Угадать песню
Цель - провести игровой сценарий
Действующее лицо - Пользователь с ролью игрок
### Основной сценарий
1. Система проигрывает пользователю случайный трек из выбранной подборки (если подборка не выбрана, учитываются все треки из библиотеки треков системы)
2. Система предлагает пользователю ввести исполнителя и название трека
3. Пользователь вводит исполнителя и название трека
4. Система оценивает правильность введенной информации и начисляет 1 очко за правильной ответ и 0 очков за неправильный.
5. Система показывает пользователю основную информацию по проигранному треку:
    - Название
    - Исполнитель
    - Обложка альбома
6. сценарий продолжается с пункта 1 основного сценария

## 3. Посмотреть карточку трека
Цель - узнать информацию о треке
Действующее лицо - Пользователь с ролью игрок
### Основной сценарий
1. Система показывает список проигранных треков
2. Пользователь нажимает на элемент списка
3. Система показывает пользователю карточку трека, в которой отображается информация о треке:
    - название трека
    - исполнитель
    - обложка альбома

## 4. Добавить трек
Цель - добавить трек в библиотеку
Действующее лицо - пользователь с ролью администратор
### Основной сценарий
1. Пользователь входит в режим добавления трека
2. Пользователь успешно вводит данные трека (название трек и исполнитель) (2а. Пользователь не смог ввести данные трека)
3. Система автоматически заполнят остальные поля трека
4. Система предлагает пользователю добавить трек в библиотеку
5. Пользователь подтверждает добавление трека в библиотеку системы
6. Система добавляет новый трек в библиотеку системы
### Альтернативный сценарий
2а. Пользователь не смог ввести данные трека
3а. Система предлагает пользователю ввести данные трека еще раз
сценарий продолжается с пункта 2 основного сценария

## 5. Изменить трек
Цель - изменить дынные трека в библиотеке системы
Действующее лицо - Пользователь с ролью Администратор
### Основной сценарий
1. Пользователь входит в режим редактирования трека
2. Пользователь изменяет параметры трека в библиотеке системы
3. Пользователь подтверждает сохранение изменений
4. Система сохраняет изменения

## 6. Добавить подборку
Цель - Добавить подборку треков
Действующее лицо - пользователь с ролью Администратор
### основной сценарий
1. Пользователь переходит в режим добавления подборок
2. Пользователь задает параметры подборки
    - Название
    - Описание
3. Пользователь успешно добавляет треки (3а. пользователю не удалось добавит трек)
4. Пользователь подтверждает добавление подборки
5. Система сохраняет подборку в библиотеку подборок системы
### Альтернативный сценарий
3а. Пользователю не удалось добавить трек
4а. Система предлагает пользователю добавить трек еще раз
сценарий продолжается с пункта 3 основного сценария