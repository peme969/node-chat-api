import GPT4js from './utils/gpt4js';
import validateRequest from './utils/validateRequest';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send({ error: 'Method not allowed' });

  const { prompt, provider, options } = req.body;

  try {
    validateRequest({ prompt, provider });
    const gpt = GPT4js.createProvider(provider);
    const image = await gpt.imageGeneration(prompt, options);
    res.status(200).json({ image });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
