const { test, expect } = require('@playwright/test');

// 0. Структура тесту https://playwright.dev/docs/writing-tests

test('Обчислення та класифікація замовлення', async ({ page }) => {
  // 1. Навігація
  // Потрібно перейти на сторінку https://www.saucedemo.com/

  // 2. Змінні та Типи даних
  // Створити змінні з початковими значеннями типів Number, String, Boolean
  // Потрібно створити 2 змінні з типом String для логіну та паролю
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(/* write here username */);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(/* write here pass */);
  await page.locator('[data-test="login-button"]').click();

  // Створити змінну типу String з числовим значенням

  // Створити змінну без значення

  // 3. Базові оператори та Перетворення типу
  // Явне перетворення рядка на число (використання унарного +)

  // Обчислення (операції +, -, *, /)

  // Вивести всі значення у консоль

  // 4. Умовні розгалуження: if/else та Оператори порівняння

  // Використання тернарного оператора '?'

  // 5. Цикли: while і for

  // Створити приклад використання циклу while

  // Створити приклад використання циклу for

  // 6. Конструкція "switch". Створити приклад використання

  // 7. Перевірити ціну на сайті для товару Sauce Labs Backpack
  // https://playwright.dev/docs/test-assertions
});