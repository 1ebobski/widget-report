function createPage(Page, Pageviews, BounceRate, ExitRate, AvgTimeOnPage) {
  return { Page, Pageviews, BounceRate, ExitRate, AvgTimeOnPage };
}

function createWidget(name, funnel, clicks) {
  return { name, funnel, clicks };
}

const pages = [
  createPage(
    "open-broker.ru/trading/your-financial-analyst/",
    159,
    6.0,
    24,
    4.0
  ),
  createPage("open-broker.ru/trading/model-portfolios/", 237, 9.0, 37, 4.3),
  createPage(
    "open-broker.ru/investing/structural-products/",
    262,
    16.0,
    24,
    6.0
  ),
  createPage(
    "open-broker.ru/lp/individual-investment-account/",
    305,
    3.7,
    67,
    4.3
  ),
  createPage("open-broker.ru/learning/", 356, 16.0, 49, 3.9),
];

const widgets = [
  createWidget("Форма консультации", 14.8, 29.2),
  createWidget("Начать проще чем кажется", 17.8, 29.2),
  createWidget("Сбережения могут зарабатывать больше", 20.8, 29.2),
  createWidget("Специальные предложения от «Открытие Брокер»", 25.8, 29.2),
  createWidget("Инвестируйте прямо с телефона", 29.8, 29.2),
];

export { pages };
