import getGPT4js from 'gpt4js';

let GPT4js;

export const initializeGPT4js = async () => {
  if (!GPT4js) {
    GPT4js = await getGPT4js();
  }
  return GPT4js;
};
