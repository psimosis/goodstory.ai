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

***

## 1. Introducción
El software de creación de historias impulsado por inteligencia artificial es una herramienta innovadora que utiliza algoritmos de aprendizaje automático para crear historias a traves de personajes y elementos del usuario que podrá almacenar asociados a su perfil.
Los usuarios pueden crear historias en una amplia variedad de géneros, desde romance hasta ciencia ficción, y desde la fantasía hasta el misterio. Además, estas historias son porsonalizables y almacenadas en una base de datos. El software también incluye herramientas de edición y personalización que permiten a los usuarios ajustar los detalles de las habilidades y caracteristicas de sus personajes.

## 2. Requerimientos del sistema

### 2.1 Funcionales

- Capacidad para generar historias coherentes: el sistema debe ser capaz de generar historias que tengan sentido y coherencia en términos de la trama, los personajes y la ambientación.
- Creacion de personajes: el sistema debe permitir al usuario crear sus propios personajes con características y rasgos únicos.
- Flexibilidad en la generación de historias: el sistema debe ser capaz de generar diferentes tipos de historias, desde cuentos cortos hasta novelas completas, y permitir la personalización de la historia por parte del usuario.
- Personalización: el sistema debe permitir la personalización de los personajes creados, permitiendo al usuario crear nuevas características y rasgos, para luego ser aplicados a los personajes.
- Generos: El sistema debe permitirle al usuario crear nuevos generos que seran aplicados a la generacion de las historias.
  
### 2.2 No funcionales

- Conectividad: el sistema debe establecer una conexion y consumir los servicios de OpenAi GPT3 para la generacion de contenido.
- Fácil de usar: el sistema debe tener una instruccion fácil de usar e intuitiva para que el usuario pueda interactuar con él de manera efectiva.
- Integración con otros sistemas: el sistema debe ser capaz de integrarse con otros sistemas o plataformas, como procesadores de texto o aplicaciones de redes sociales, para permitir la fácil compartición y publicación de las historias generadas.
- Adaptabilidad: el sistema debe ser capaz de tener diversas preferencias y patrones de los usuarios, para generar historias más personalizadas y adaptadas a sus gustos.
- Seguridad: el sistema debe tener una validacion de usuario que permita identificarlo unequívocamente y operar con él.

## 3. Reglas de negocio

- Ingresar al sistema: el usuario deberá ingresar al sistema con su usuario y contraseña, mediante este proceso obtendra un Token de sesion que le permitira de ahi en mas realizar todas las operaciones con el sistema
- Ingresar información: el usuario deberá crear sus generos, habilidades y personajes que seran los elementos necesarios para generar la historia.
- Personalizar personajes: el usuario podrá personalizar mas los personajes, seleccionando sus características y personalidades.
- Crear base de la historia: el usuario podrá crear la base de la historia con los elementos basicos para obtener mediante IA la trama de la misma. A partir de esta base podrá regenerar la trama cuantas veces quiera hasta obtener la deseada.
- Generaracion IA: el usuario podrá generar la trama a travesa de la IA de OpenAi, podra hacerlo cuantas veces quiera hasta obtener la historia indicada. Estas historias se almacenan en la base de datos asociada al usuario.

## 4. Posibles Clases Principales:

Historia: representa la historia completa. Esta clase tiene los siguientes atributos:
- id: Clave.
- Titulo: Titulo de la historia.
- descripcion: descripción general de la historia.
- genero: género al que pertenece la historia.
- personajes: lista de objetos Personaje que aparecen en la historia.
- username: usuario de la historia.

Personaje: representa a un personaje de la historia. Esta clase tiene los siguientes atributos:
- id: Clave.
- nombre: nombre del personaje.
- tipo: tipo del personaje.
- edad: edad del personaje.
- descripcion: descripción del personaje.
- usuario: usuario del personaje.
- habilidades: Array de Habilidades.

Genero: Representa al Genero de la Historia
- id: Clave.
- nombre: nombre del genero.
- descripcion: descripcion del genero.
- usuario: usuario del genero.

Habilidad: Representa las habilidades de los Personajes
- id: Clave.
- nombre: nombre de la habilidad.
- descripcion: descripcion de la habilidad.
- usuario: usuario de la habilidad.

El flujo de trabajo sería el siguiente: el usuario ingresaría al sistema con sus credenciales, luego da de alta el/los generos de las historias que podra generar, da de halta el/las habilidades de los personajes. Luego crea el/los personajes, puede agregarles habilidades para enriquecer la historia. Una vez que tiene todos los elementos, crea la historia ingresando el Titulo, una pequeña descripcion, asignado uno de los generos y el/los personajes previamente creados. Una vez creada la historia puede generar mediante IA el desarrollo de la historia previamente creada. Puede hacerlo tantas veces desee hasta obtener la deseada. Todos los datos y las historias son almacenadas en la Base de Datos y asociadas al usuario.

## 5. Conclusión
El sistema de creación de historias es una herramienta poderosa y creativa que permite a los usuarios crear historias originales, con personajes únicos y detalles vívidos.
