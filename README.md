# App-Personas

![](https://user-images.githubusercontent.com/60897075/160215874-57f2c923-f332-47ab-9825-0e1363b742ca.png)

### Descripción:

En el repositorio encontrará el código fuente de una aplicación sencilla con las funcionalidades de crear y leer una persona en una base de datos PostgreSQL. Los campos requeridos para crear una persona son su nombre completo y fecha de nacimiento, mientras que el nombre del padre y de la madre son campos opcionales, usados para que cuando el padre o madre ya hayan sido registrados, en la lista de personas se pueda evidenciar cada persona con su madre y padre.

El repositorio cuenta con las fuentes necesarias para desplegar todos los componentes en contenedores docker, siga los pasos a continuación para correr la aplicación de forma local.

### Pre-Requisitos:

*   Instalar [docker.](https://www.docker.com/)
*   Instalar [Git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git)
*   Instalar [npm.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Ejecución local de la aplicación:

1\. Descargue el repositorio mediante el comando:

```shell
git clone https://github.com/JulianaLeonGonzalez/App-Personas.git
```

2\. Ingrese al directorio del proyecto.

```shell
cd App-Personas
```

3\. Ejecute el siguiente comando para contenerizar el back-end, el font-end y la base de datos Postgresql que componen la aplicación, además de añadir la tabla "Person" con los datos iniciales de prueba.

```shell
docker-compose up -d
```

4\. En su navegador ingrese a la ruta http://localhost:4200/ una vez allí puede seleccionar la opción de ingresar una nueva persona o ver la lista de personas actual.

#### Registrar una nueva persona:

![](https://user-images.githubusercontent.com/60897075/160215927-58125621-3cc8-4601-a0ca-56d1742b76c5.png)

#### Listar personas registradas:

![](https://user-images.githubusercontent.com/60897075/160215957-bbbeb473-c74c-465f-9d1b-b4842b2e984d.png)

### **Ejecución de pruebas unitarias**

La pruebas unitarias incluyen diferentes casos de prueba como: la creación de una persona con datos correctos de los padres, la creación de una persona sin datos de sus padres, la creación de una persona con datos incorrectos de los padres, la creación de una persona que ya ha sido creada, entre otros. Para la ejecución de pruebas unitarias se hace uso de un par de datos de prueba que son agregados automáticamente al ejecutar el paso 3 de la sección anterior, por lo que para ejecutarlas solo deberá seguir los pasos listados a continuación.

1\. Ingrese al directorio API, donde se encuentra el back-end de la aplicación.

```shell
cd API 
```

2\. Corra el siguiente comando para descargar las dependencias.

```shell
npm install
```

3\. Si desea correr las pruebas unitarias puede hacerlo en una nueva terminal, dentro del directorio API, mediante el siguiente comando, recuerde que para este test son necesarios los datos de prueba mencionados en el paso 3 de la presente guía.

```shell
npm test
```

#### Resultado:

![](https://user-images.githubusercontent.com/60897075/160681099-65d1fa84-5c2e-4d6b-9281-321cbfcf9fad.png)
