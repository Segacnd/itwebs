import line1 from "../assets/stage1-line.svg";
import line2 from "../assets/stage2-line.svg";
import line3 from "../assets/stage3-line.svg";
import line4 from "../assets/stage4-line.svg";
import line5 from "../assets/stage5-line.svg";
import line6 from "../assets/stage6-line.svg";

import line1Mobile from "../assets/stage1-line-mobile.svg";
import line2Mobile from "../assets/stage2-line-mobile.svg";
import line3Mobile from "../assets/stage3-line-mobile.svg";
import line4Mobile from "../assets/stage4-line-mobile.svg";
import line5Mobile from "../assets/stage5-line-mobile.svg";
import line6Mobile from "../assets/stage6-line-mobile.svg";

export const STAGES = [
  {
    id: 1,
    heading: "Брифинг",
    text: "Мы узнаём, что нужно клиенту: цели сайта, аудитория, особенности бизнеса. Это помогает заложить правильный фундамент",
    side: "left",
    line: { desktop: line1, mobile: line1Mobile },
  },
  {
    id: 2,
    heading: "Анализ и структура",
    text: "Проводим анализ конкурентов и разрабатываем структуру сайта — продумываем, как пользователь будет взаимодействовать с контентом",
    side: "right",
    line: { desktop: line2, mobile: line2Mobile },
  },
  {
    id: 3,
    heading: "Прототипирование",
    text: "Создаём черновую схему будущего сайта — без дизайна, только логика: где будет меню, кнопки, формы и т.д.",
    side: "left",
    line: { desktop: line3, mobile: line3Mobile },
  },
  {
    id: 4,
    heading: "Дизайн",
    text: "Разрабатываем визуальную часть: стиль, цвета, шрифты и UI-элементы. Все макеты — адаптивные и современные",
    side: "right",
    line: { desktop: line4, mobile: line4Mobile },
  },
  {
    id: 5,
    heading: "Разработка",
    text: "Переводим дизайн в живой код. Настраиваем фронтенд и бэкенд, а также адаптацию под все устройства",
    side: "left",
    line: { desktop: line5, mobile: line5Mobile },
  },
  {
    id: 6,
    heading: "Тестирование",
    text: "Проверяем сайт на ошибки, адаптацию, скорость загрузки и корректную работу всех функций",
    side: "right",
    line: { desktop: line6, mobile: line6Mobile },
  },
  {
    id: 7,
    heading: "Запуск и поддержка",
    text: "Публикуем сайт и при необходимости сопровождаем: обновляем, дорабатываем, подключаем аналитику и рекламу",
    side: "left",
    line: null,
  },
];
