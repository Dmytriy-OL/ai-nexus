const token = '8342901655:AAFuDtpAo9wVS9_YgV0Qn8CXxgzxHbYRqbY';
const url = method => `https://api.telegram.org/bot${token}/${method}`;
const post = (method, body) => fetch(url(method), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(r => r.json());

Promise.all([
  post('setMyShortDescription', { short_description: 'Платформа віртуальних інфлюенсерів наступного покоління. Спілкуйся з AI-блогерами вже зараз! 🚀' }),
  post('setMyDescription', { description: 'Вітаємо в AI Nexus Showcase! 🌐\n\nТут ви можете поспілкуватися з нашими віртуальними блогерами. Кожен із них має унікальний характер, стиль та нішу.\n\nНатискайте "Розпочати", щоб перевірити, як це працює!' })
]).then(console.log).catch(console.error);
