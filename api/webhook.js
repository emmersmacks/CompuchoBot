import TelegramBot from "node-telegram-bot-api";

const { PORT, TELEGRAM_TOKEN, SERVER_URL } = process.env

export default async (request, response) => {
    try {
        const bot = new TelegramBot(TELEGRAM_TOKEN);
        const { body } = request;

        if (body.message) {
            const { chat: { id }, text } = body.message;

            const message = `✅ Thanks for your message: *"${text}"*\nHave a great day! 👋🏻`;

            await bot.sendMessage(id, message, {parse_mode: 'Markdown'});
        }
    }
    catch(error) {
        console.error('Error sending message');
        console.log(error.toString());
    }

    response.send('OK');
}
