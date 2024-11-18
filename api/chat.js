import GPT4js from './utils/gpt4js';
import validateRequest from './utils/validateRequest';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send({ error: 'Method not allowed' });

  const { messages, provider, model } = req.body;

  try {
    validateRequest({ messages, provider, model });
    const gpt = GPT4js.createProvider(provider);
    const response = await gpt.chatCompletion(messages, { provider, model });
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
