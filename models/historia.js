const { v4: uuidv4 } = require('uuid');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config()

class historia {

    constructor(title, descripcion, genero, personajes, username, openai) {
        this.id = uuidv4();
        this.title = title;
        this.descripcion = descripcion;
        this.genero = genero;
        this.personajes = personajes;
        this.historia = null;
        this.openAI = new OpenAIApi(configuration);;
        this.username = username
    }

    async getChatGptResponse(request) {
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

}

module.exports = historia;