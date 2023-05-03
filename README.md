![alt text](https://github.com/psimosis/goodstory.ai/blob/develop/images/logo_goodstoryai.png?raw=true)
# GoodStory.Ai

Make great stories with the power of artificial intelligence
***
### Instituto Tecnológico de Educación Superior ORT Argentina 
#### Trabajo Practico Integrador - BETP2E
#### Grupo: 5

Integrantes:

- Patricio Simosis
- Guido Compagno
- Lucas Martin Funes
- Noelia Taboada Vega

***

## 1. Introducción
El software de creación de historias impulsado por inteligencia artificial es una herramienta innovadora que utiliza algoritmos de aprendizaje automáticopara crear historias, personajes y escenarios únicos y personalizados.
Los usuarios pueden crear historias en una amplia variedad de géneros, desde romance hasta ciencia ficción, y desde la fantasía hasta el misterio. Además, el software también puede crear personajes únicos, detallados y con personalidades distintas, con habilidades, debilidades y características especiales.
El software también incluye herramientas de edición y personalización que permiten a los usuarios ajustar los detalles de la trama y el entorno para que se ajusten mejor a su visión y requisitos específicos. Además, el software también puede generar imágenes que corresponden a los personajes y lugares creados, lo que ayuda a dar vida a la historia.

## 2. Requerimientos del sistema

### 2.1 Funcionales

- Capacidad para generar historias coherentes: el sistema debe ser capaz de generar historias que tengan sentido y coherencia en términos de la trama, los personajes y la ambientación.
- Generación de personajes: el sistema debe ser capaz de generar personajes con características y rasgos únicos, y que sean coherentes con la historia.
- Generación de imágenes: el sistema debe ser capaz de generar imágenes que estén relacionadas con la historia y los personajes que se han creado.
- Flexibilidad en la generación de historias: el sistema debe ser capaz de generar diferentes tipos de historias, desde cuentos cortos hasta novelas completas, y permitir la personalización de la historia por parte del usuario.
- Personalización de personajes: el sistema debe permitir la personalización de los personajes creados, permitiendo al usuario cambiar sus características y rasgos.

### 2.2 No funcionales

- Conectividad: el sistema debe establecer una conexion y consumir los servicios de OpenAi GPT3 para la generacion de contenido y DALL·E 2 para las imagenes respectivamente.
- Fácil de usar: el sistema debe tener una instruccion fácil de usar e intuitiva para que el usuario pueda interactuar con él de manera efectiva.
- Integración con otros sistemas: el sistema debe ser capaz de integrarse con otros sistemas o plataformas, como procesadores de texto o aplicaciones de redes sociales, para permitir la fácil compartición y publicación de las historias generadas.
- Adaptabilidad: el sistema debe ser capaz de aprender de las preferencias y patrones de los usuarios, para generar historias más personalizadas y adaptadas a sus gustos.

## 3. Reglas de negocio

- Ingresar información: el usuario deberá ingresar una pequeña información sobre la historia que desea generar, sobre la trama, el género, los personajes y la ambientación.
- Personalizar personajes: el usuario podrá personalizar mas los personajes a crear, seleccionando sus características y rasgos.
- Obtener imágenes: el usuario podrá obtener las imágenes que se utilizarán para ilustrar la historia generada.
- Revisar y editar: el usuario podrá revisar y editar la historia generada para asegurarse de que cumpla con sus expectativas.


## 4. Posibles Clases:

Historia: representa la historia completa. Esta clase tiene los siguientes atributos:
- descripcion: descripción general de la historia.
- genero: género al que pertenece la historia.
- personajes: lista de objetos Personaje que aparecen en la historia.

Personaje: representa a un personaje de la historia. Esta clase tiene los siguientes atributos:
- nombre: nombre del personaje.
- edad: edad del personaje.
- descripcion: descripción del personaje.

GeneradorHistoria: esta clase es la encargada de generar una historia completa a partir de los datos ingresados por el usuario. Tiene los siguientes métodos:
- generarHistoria(descripcion, cantidadPersonajes, genero): método que recibe la descripción de la historia, la cantidad de personajes y el género, y devuelve un objeto Historia completo con personajes y sus características.

ValidadorEntrada: esta clase se encarga de validar que los datos ingresados por el usuario sean válidos. Tiene los siguientes métodos:

- validarDescripcion(descripcion): método que recibe la descripción de la historia y verifica que tenga al menos una longitud mínima y máxima.
- validarCantidadPersonajes(cantidadPersonajes): método que recibe la cantidad de personajes y verifica que sea un número válido.
- validarGenero(genero): método que recibe el género de la historia y verifica que sea un género válido.

El flujo de trabajo sería el siguiente: el usuario ingresaría los datos de la historia, los cuales pasarían por la clase ValidadorEntrada para verificar que sean válidos. Si los datos son válidos, se llamaría al método generarHistoria de la clase GeneradorHistoria para crear la historia completa. Si los datos no son válidos, se le informaría al usuario y se le pediría que ingrese datos válidos.

## 5. Conclusión
El sistema de creación de historias es una herramienta poderosa y creativa que permite a los usuarios crear historias originales, con personajes únicos y detalles vívidos.
