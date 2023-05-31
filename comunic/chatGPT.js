
    const { Configuration, OpenAIApi } = require('openai');
    require('dotenv').config()

    const configuration = new Configuration({
      apiKey: process.env.CODE,
    });
    
    const openai = new OpenAIApi(configuration);
    
    async function getChatGptResponse(request) {
      try {
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: request }],
        });
    
        console.log(response.data.choices[0].message.content);
        return response.data.choices[0].message.content;
      } catch (err) {
        console.log('Error: ' + err);
        return err;
      }
    }
    
    getChatGptResponse('Necesito una historia de 3 renglones');