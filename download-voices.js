const fs = require('fs');
const https = require('https');

const downloadTTS = (text, filename) => {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=uk&q=${encodeURIComponent(text)}`;
  https.get(url, (res) => {
    const file = fs.createWriteStream(filename);
    res.pipe(file);
    file.on('finish', () => file.close());
  });
};

downloadTTS('Привіт! Дуже радий бачити тебе у своєму профілі. Скоро буде багато нового контенту!', 'public/voices/1.mp3');
downloadTTS('Привіт! Дякую, що завітав. Якщо цікавишся технологіями та бізнесом, ти за адресою.', 'public/voices/2.mp3');
downloadTTS('Привітик! Рада знайомству. Обожнюю моду та стиль, сподіваюсь тобі тут сподобається!', 'public/voices/3.mp3');
downloadTTS('Привіт! Я саме на тренуванні, але дуже рада, що ти підписався. Будемо тримати форму разом!', 'public/voices/4.mp3');
