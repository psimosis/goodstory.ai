const { v4: uuidv4 } = require('uuid');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config()

class Historia {

    constructor(title, descripcion, genero, personajes, username) {
        this.id = uuidv4();
        this.title = title;
        this.descripcion = descripcion;
        this.genero = null;
        this.personajes = [];
        this.historia = null;
        
        this.username = username
    }

    setGenero(genero){
      this.genero = genero;
    }

    setPersonajes(personajes){
      this.personajes = personajes;
    }

    async getChatGptResponse(request) {
      const configuration = new Configuration({
        apiKey: process.env.CODE,
      });

      const openAI = new OpenAIApi(configuration);;
        try {
          const response = await openAI.createChatCompletion({
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

module.exports = Historia;