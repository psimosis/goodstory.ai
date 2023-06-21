const { v4: uuidv4 } = require('uuid');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config()

class Historia {

    constructor(title, descripcion, genero, personajes, username) {
        this.id = uuidv4();
        this.title = title;
        this.descripcion = descripcion;
        
        if(genero == null || genero == undefined || personajes == null || personajes == undefined){
          this.genero = null;
          this.personajes = [];
        }else{
          this.genero = genero;
          this.personajes = personajes;
        }
        
        this.username = username
    }

    setGenero(genero){
      this.genero = genero;
    }

    setPersonajes(personajes){
      this.personajes = personajes;
    }

    async getChatGptResponse(request) {
      console.log("Api KEY: " + process.env.CODE)
      const configuration = new Configuration({
        apiKey: process.env.CODE,
      });

      const openAI = new OpenAIApi(configuration);;
        try {
          const response = await openAI.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: request }],
          });
      
          return response.data.choices[0].message.content;
        } catch (err) {
          console.log('Error: ' + err);
          return err;
        }
    }

}

module.exports = Historia;