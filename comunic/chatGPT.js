
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
    
    getChatGptResponse('Necesito que me hagas una historia de no mas de 15 renglones, a partir de un JSON. Este JSON contendra informacion acerca de titulo, genero \
    personajes, habilidad de personajes y una pequena descripcion  de la historia pedida. \
    Este seria el JSON: \
    {\
      "title": "La historia de Juan el barrendero ", \
      "descripcion": "La historia debe estar narrada por Jorge Rial, y debe mencionarse en la historia", \
      "genre": "Terror psicologico",  \
      "characters": [ \
          "Juan el barrendero ", \
          "Pedro el ayudante",\
          "Guido el asesino", \
      ]\
  }');