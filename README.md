# index
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация - Конференции.РФ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <a class="logo" href="index.html">
                <img src="лого" alt="Конференции.РФ">
                Конференции.РФ
            </a>

            <div class="menu">
                <a href="index.html">Регистрация</a>
                <a href="login.html">Авторизация</a>
                <a href="history.html">Личный кабинет</a>
                <a href="createt.html">Заявка</a>
            </div>
        </nav>
    </header>

    <main class="page">
        <section class="hero">
            <h1>Бронирование площадок для мероприятий</h1>
            <p>Создайте аккаунт, выберите помещение и отправьте заявку за пару минут.</p>
        </section>

        <form class="form" data-form>
            <h2>Регистрация</h2>

            <input
                name="login"
                type="text"
                placeholder="Логин"
                pattern="[A-Za-z0-9]{6,}"
                title="Минимум 6 символов: латинские буквы и цифры"
                required
            >

            <input
                name="password"
                type="password"
                placeholder="Пароль"
                minlength="8"
                required
            >

            <input name="name" type="text" placeholder="ФИО" required>

            <input
                name="phone"
                type="tel"
                placeholder="8(XXX)XXX-XX-XX"
                pattern="8\(\d{3}\)\d{3}-\d{2}-\d{2}"
                required
            >

            <input name="email" type="email" placeholder="Email" required>

            <button type="submit">Создать пользователя</button>

            <p class="text">
                Уже зарегистрированы?
                <a href="login.html">Войти</a>
            </p>
        </form>
    </main>

    <footer class="footer">
        <a class="footer-logo" href="index.html">
            <img src="лого" alt="Конференции.РФ">
            Конференции.РФ
        </a>

        <a class="admin-link" href="admin.html">Панель администратора</a>
    </footer>

    <script src="script.js"></script>
</body>
</html>

# login
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация - Конференции.РФ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <a class="logo" href="index.html">
                <img src="лого" alt="Конференции.РФ">
                Конференции.РФ
            </a>

            <div class="menu">
                <a href="index.html">Регистрация</a>
                <a href="login.html">Авторизация</a>
                <a href="history.html">Личный кабинет</a>
                <a href="createt.html">Заявка</a>
            </div>
        </nav>
    </header>

    <main class="page">
        <section class="hero">
            <h1>Вход в личный кабинет</h1>
            <p>Следите за заявками и статусом мероприятий.</p>
        </section>

        <form class="form" data-form>
            <h2>Авторизация</h2>

            <input
                name="login"
                type="text"
                placeholder="Логин"
                pattern="[A-Za-z0-9]{6,}"
                title="Минимум 6 символов: латинские буквы и цифры"
                required
            >

            <input
                name="password"
                type="password"
                placeholder="Пароль"
                minlength="8"
                required
            >

            <button type="submit">Войти</button>

            <p class="text">
                Еще нет аккаунта?
                <a href="index.html">Регистрация</a>
            </p>
        </form>
    </main>

    <footer class="footer">
        <a class="footer-logo" href="index.html">
            <img src="лого" alt="Конференции.РФ">
            Конференции.РФ
        </a>

        <a class="admin-link" href="admin.html">Панель администратора</a>
    </footer>

    <script src="script.js"></script>
</body>
</html>

# history
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Личный кабинет - Конференции.РФ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <a class="logo" href="index.html">
                <img src="лого" alt="Конференции.РФ">
                Конференции.РФ
            </a>

            <div class="menu">
                <a href="index.html">Регистрация</a>
                <a href="login.html">Авторизация</a>
                <a href="history.html">Личный кабинет</a>
                <a href="createt.html">Заявка</a>
            </div>
        </nav>
    </header>

    <main class="page">
        <section class="hero">
            <h1>Мои заявки</h1>
            <p>История бронирований и быстрый доступ к новой заявке.</p>
            <a class="btn" href="createt.html">Новая заявка</a>
        </section>

        <section class="cards">
            <article class="card">
                <p>Помещение: <b>Коворкинг</b></p>
                <p>Дата: <b>29.06.2026</b></p>
                <p>Оплата: <b>Наличные</b></p>
                <p>Статус: <b>Новая</b></p>
            </article>

            <article class="card">
                <p>Помещение: <b>Аудитория</b></p>
                <p>Дата: <b>15.06.2026</b></p>
                <p>Оплата: <b>Перевод по номеру телефона</b></p>
                <p>Статус: <b>Мероприятие назначено</b></p>
            </article>

            <article class="card">
                <p>Помещение: <b>Кинозал</b></p>
                <p>Дата: <b>12.03.2026</b></p>
                <p>Оплата: <b>Наличные</b></p>
                <p>Статус: <b>Мероприятие завершено</b></p>
            </article>
        </section>

        <section class="slider" data-slider>
            <button class="slider-btn" data-prev type="button">‹</button>
            <img src="фото" alt="Зал для конференции">
            <button class="slider-btn" data-next type="button">›</button>
        </section>
    </main>

    <footer class="footer">
        <a class="footer-logo" href="index.html">
            <img src="лого" alt="Конференции.РФ">
            Конференции.РФ
        </a>

        <a class="admin-link" href="admin.html">Панель администратора</a>
    </footer>

    <script src="script.js"></script>
</body>
</html>

# createt
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Новая заявка - Конференции.РФ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <a class="logo" href="index.html">
                <img src="лого" alt="Конференции.РФ">
                Конференции.РФ
            </a>

            <div class="menu">
                <a href="index.html">Регистрация</a>
                <a href="login.html">Авторизация</a>
                <a href="history.html">Личный кабинет</a>
                <a href="createt.html">Заявка</a>
            </div>
        </nav>
    </header>

    <main class="page">
        <section class="hero">
            <h1>Формирование заявки</h1>
            <p>Выберите помещение, дату и удобный способ оплаты.</p>
        </section>

        <form class="form" data-form>
            <h2>Новая заявка</h2>

            <label>Помещение</label>
            <select required>
                <option value="">Выберите помещение</option>
                <option>Аудитория</option>
                <option>Коворкинг</option>
                <option>Кинозал</option>
            </select>

            <label>Дата</label>
            <input type="date" required>

            <label>Способ оплаты</label>
            <select required>
                <option value="">Выберите способ оплаты</option>
                <option>Наличные</option>
                <option>Перевод по номеру телефона</option>
            </select>

            <button type="submit">Создать заявку</button>
        </form>
    </main>

    <footer class="footer">
        <a class="footer-logo" href="index.html">
            <img src="лого" alt="Конференции.РФ">
            Конференции.РФ
        </a>

        <a class="admin-link" href="admin.html">Панель администратора</a>
    </footer>

    <script src="script.js"></script>
</body>
</html>

# admin
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Администратор - Конференции.РФ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <a class="logo" href="index.html">
                <img src="лого" alt="Конференции.РФ">
                Конференции.РФ
            </a>

            <div class="menu">
                <a href="index.html">Регистрация</a>
                <a href="login.html">Авторизация</a>
                <a href="history.html">Личный кабинет</a>
                <a href="createt.html">Заявка</a>
            </div>
        </nav>
    </header>

    <main class="page">
        <section class="hero">
            <h1>Панель администратора</h1>
            <p>Заявки пользователей и управление статусами.</p>
        </section>

        <section class="cards">
            <article class="card">
                <p>ФИО: <b>Ходырев Даниил</b></p>
                <p>Телефон: <b>8(913)934-68-95</b></p>
                <p>Email: <b>dr.ray.st@mail.ru</b></p>
                <p>Помещение: <b>Кинозал</b></p>
                <p>Дата: <b>12.03.2026</b></p>
                <p>Оплата: <b>Наличные</b></p>

                <label>Статус</label>
                <select>
                    <option>Новая</option>
                    <option>Мероприятие назначено</option>
                    <option>Мероприятие завершено</option>
                </select>
            </article>

            <article class="card">
                <p>ФИО: <b>Горбаченко Максим</b></p>
                <p>Телефон: <b>8(913)325-34-47</b></p>
                <p>Email: <b>maks@mail.ru</b></p>
                <p>Помещение: <b>Коворкинг</b></p>
                <p>Дата: <b>19.08.2026</b></p>
                <p>Оплата: <b>Наличные</b></p>

                <label>Статус</label>
                <select>
                    <option>Новая</option>
                    <option>Мероприятие назначено</option>
                    <option>Мероприятие завершено</option>
                </select>
            </article>

            <article class="card">
                <p>ФИО: <b>Юдин Дмитрий</b></p>
                <p>Телефон: <b>8(913)352-23-46</b></p>
                <p>Email: <b>dima@mail.ru</b></p>
                <p>Помещение: <b>Аудитория</b></p>
                <p>Дата: <b>15.06.2026</b></p>
                <p>Оплата: <b>Перевод по номеру телефона</b></p>

                <label>Статус</label>
                <select>
                    <option>Новая</option>
                    <option>Мероприятие назначено</option>
                    <option>Мероприятие завершено</option>
                </select>
            </article>
        </section>
    </main>

    <footer class="footer">
        <a class="footer-logo" href="index.html">
            <img src="лого" alt="Конференции.РФ">
            Конференции.РФ
        </a>

        <a class="admin-link" href="admin.html">Панель администратора</a>
    </footer>

    <script src="script.js"></script>
</body>
</html>

# css
:root {
    --bg: #f5f7fb;
    --card: #fff;
    --text: #172033;
    --muted: #657083;
    --brand: #2364d2;
    --line: #dfe5ef;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: var(--bg);
    color: var(--text);
}

a {
    color: inherit;
    text-decoration: none;
}

.header {
    position: sticky;
    top: 0;
    z-index: 5;
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid var(--line);
    backdrop-filter: blur(12px);
}

.nav {
    max-width: 1120px;
    margin: auto;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
}

.logo img {
    width: 76px;
    height: 76px;
    object-fit: contain;
}

.menu {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.menu a {
    padding: 9px 12px;
    border-radius: 8px;
    color: var(--muted);
}

.menu a:hover {
    background: #eef4ff;
    color: var(--brand);
}

.page {
    max-width: 1120px;
    margin: auto;
    padding: 34px 20px;
}

.hero {
    position: relative;
    overflow: hidden;
    padding: 44px;
    margin-bottom: 26px;
    border: 0;
    border-radius: 8px;
    background:
        linear-gradient(120deg, rgba(23, 32, 51, 0.92), rgba(35, 100, 210, 0.78)),
        url("фото") center / cover;
    color: #fff;
}

.hero h1 {
    max-width: 720px;
    margin: 0 0 10px;
    font-size: clamp(32px, 5vw, 52px);
    line-height: 1.08;
}

.hero p {
    max-width: 560px;
    margin: 0 0 18px;
    color: rgba(255, 255, 255, 0.82);
    font-size: 18px;
}

.form,
.card {
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 8px;
    box-shadow: 0 18px 45px rgba(24, 39, 75, 0.08);
}

.form {
    max-width: 430px;
    margin: 0 auto;
    padding: 28px;
    display: grid;
    gap: 14px;
}

.form h2 {
    margin: 0 0 6px;
    text-align: center;
}

input,
select {
    width: 100%;
    padding: 13px 14px;
    border: 1px solid var(--line);
    border-radius: 8px;
    font: inherit;
    background: #fff;
}

input:focus,
select:focus {
    outline: 2px solid #b8d2ff;
    border-color: var(--brand);
}

button,
.btn {
    padding: 13px 16px;
    border: 0;
    border-radius: 8px;
    background: var(--brand);
    color: #fff;
    font: 700 16px Arial;
    text-align: center;
    cursor: pointer;
}

button:hover,
.btn:hover {
    background: #184fae;
}

.text {
    margin: 4px 0;
    text-align: center;
    color: var(--muted);
}

.text a {
    color: var(--brand);
    font-weight: 700;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 18px;
}

.card {
    padding: 20px;
}

.card p {
    margin: 0 0 12px;
}

.card label {
    display: block;
    margin: 12px 0 8px;
    color: var(--muted);
}

.slider {
    position: relative;
    height: 370px;
    margin-top: 28px;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #dfe5ef;
}

.slider img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}

.slider-btn {
    position: absolute;
    top: 50%;
    width: 44px;
    height: 44px;
    padding: 0;
    border-radius: 50%;
    background: rgba(23, 32, 51, 0.75);
    font-size: 32px;
    transform: translateY(-50%);
}

.slider-btn:hover {
    background: rgba(23, 32, 51, 0.95);
}

[data-prev] {
    left: 16px;
}

[data-next] {
    right: 16px;
}

.footer {
    max-width: 1120px;
    margin: 20px auto 0;
    padding: 22px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    border-top: 1px solid var(--line);
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
}

.footer-logo img {
    width: 52px;
    height: 52px;
    object-fit: contain;
}

.admin-link {
    color: var(--brand);
    font-weight: 700;
}

.admin-link:hover {
    color: #184fae;
}

@media (max-width: 760px) {
    .nav {
        align-items: flex-start;
        flex-direction: column;
    }

    .menu {
        width: 100%;
    }

    .menu a {
        width: 100%;
    }

    .hero {
        padding: 24px;
    }

    .slider {
        height: 260px;
    }

    .footer {
        align-items: flex-start;
        flex-direction: column;
    }
}

# js
const slides = [
    "image/image07.jpg",
    "image/image10.webp",
    "image/image13.webp",
    "image/image15.jpg",
    "image/image17.jpeg"
];

document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        alert("Форма заполнена верно");
        form.reset();
    });
});

const slider = document.querySelector("[data-slider]");

if (slider) {
    let index = 0;
    const image = slider.querySelector("img");

    const show = (step) => {
        index = (index + step + slides.length) % slides.length;
        image.src = slides[index];
    };

    slider
        .querySelector("[data-prev]")
        .addEventListener("click", () => show(-1));

    slider
        .querySelector("[data-next]")
        .addEventListener("click", () => show(1));

    setInterval(() => show(1), 4000);
}
