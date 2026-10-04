import { NextResponse } from 'next/server';

const BOT_TOKEN = '8342901655:AAFuDtpAo9wVS9_YgV0Qn8CXxgzxHbYRqbY'; // Hardcoded for demo purposes

export async function POST(req: Request) {
  try {
    const update = await req.json();
    
    if (update.message && update.message.text) {
      const text = update.message.text;
      const chatId = update.message.chat.id;

      if (text.startsWith('/start')) {
        const payload = text.split(' ')[1];
        
        let replyText = "Привіт! Обери персонажа на нашому сайті, щоб почати спілкування.";
        
        if (payload === '1') {
          replyText = "Привіт! Я Алекс 💻\n\nБачу, ти перейшов з нашої AI-вітрини. Шукаєш способи автоматизувати свій бізнес за допомогою штучного інтелекту чи просто цікавишся трендами? Я до твоїх послуг!";
        } else if (payload === '2') {
          replyText = "Йоу! Марк на зв'язку 🏔️\n\nРадий бачити тебе тут! Готовий підкорювати нові вершини? Якщо потрібна мотивація чи крутий план тренувань — тільки скажи.";
        } else if (payload === '3') {
          replyText = "Привіт, люба! ✨ Це Олена.\n\nКруто, що ти тут! Якраз готую розбір нових весняних трендів. Якщо хочеш дізнатися більше про капсульний гардероб — пиши!";
        } else if (payload === '4') {
          replyText = "Привіт! Я Mya 🎨\n\nМистецтво — це свобода. Рада, що ти завітав. Хочеш побачити мої останні ескізи або поговорити про креативний процес?";
        }

        // Send typing action first for realism
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendChatAction`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, action: 'typing' })
        });
        
        // Wait 1 second (simulated typing)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Send the actual message
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: replyText
          })
        });
      }
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
