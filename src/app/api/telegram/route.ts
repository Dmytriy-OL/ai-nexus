import { NextResponse } from 'next/server';

const BOT_TOKEN = '8342901655:AAFuDtpAo9wVS9_YgV0Qn8CXxgzxHbYRqbY';
const APP_URL = 'https://ai-nexus-ten-alpha.vercel.app'; // Your Vercel domain

export async function POST(req: Request) {
  try {
    const update = await req.json();
    
    if (update.message && update.message.text) {
      const text = update.message.text;
      const chatId = update.message.chat.id;

      if (text.startsWith('/start')) {
        const payload = text.split(' ')[1];
        
        let replyText = "Привіт! Я віртуальний блогер. На жаль, я не зрозумів ваш запит.";
        let imagePath = "";
        let audioPath = "";
        
        if (payload === '1') {
          replyText = "Привіт! Я Макс 📸\n\nРадий, що ти завітав до мого AI-блогу. Тут ми обговорюємо стиль життя та цікаві подорожі. Залишайся зі мною, буде круто!";
          imagePath = "/images/male1.jpg";
          audioPath = "/voices/1.mp3";
        } else if (payload === '2') {
          replyText = "Привіт! Я Алекс 💻\n\nМоя стихія — технології та бізнес. Якщо тебе цікавить, як працюють нейромережі або як запустити свій стартап, ти за адресою.";
          imagePath = "/images/male2.jpg";
          audioPath = "/voices/2.mp3";
        } else if (payload === '3') {
          replyText = "Привіт, люба! Я Софія ✨\n\nДякую, що ти тут! Ми будемо говорити про моду, красу та стиль життя. Завжди рада бачити твої коментарі під моїми постами!";
          imagePath = "/images/female1.jpg";
          audioPath = "/voices/3.mp3";
        } else if (payload === '4') {
          replyText = "Привіт! Я Mya 🏃‍♀️\n\nСподіваюсь ти сьогодні вже потренувався? Я, як завжди, після залу. Залишайся зі мною, якщо хочеш бути у формі!";
          imagePath = "/images/female2.jpg";
          audioPath = "/voices/4.mp3";
        }

        // 1. Send typing action
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendChatAction`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, action: 'upload_photo' })
        });
        
        // 2. Send photo with text (caption)
        if (imagePath) {
          await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              photo: `${APP_URL}${imagePath}`,
              caption: replyText
            })
          });
        }
        
        // 3. Send audio action
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendChatAction`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, action: 'record_voice' })
        });

        // 4. Send voice message (using sendAudio since it's mp3)
        if (audioPath) {
          await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendAudio`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              audio: `${APP_URL}${audioPath}`
            })
          });
        }
      }
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
