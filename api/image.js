import { initializeGPT4js } from './utils/gpt4js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Method not allowed' });
  }

  const { prompt, provider, options } = req.body;

  try {
    const GPT4js = await initializeGPT4js();
    const gptProvider = GPT4js.createProvider(provider);
    const image = await gptProvider.imageGeneration(prompt, options);
    res.status(200).json({ image });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
}
