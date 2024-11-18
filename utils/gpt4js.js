import getGPT4js from 'gpt4js';

let GPT4js;

(async () => {
  GPT4js = await getGPT4js();
})();

export default GPT4js;
