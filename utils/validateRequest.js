export default function validateRequest(params) {
  const { messages, prompt, provider, model } = params;
  if (!provider) throw new Error('Provider is required.');
  if (messages && !Array.isArray(messages)) throw new Error('Messages should be an array.');
  if (prompt && typeof prompt !== 'string') throw new Error('Prompt should be a string.');
}
