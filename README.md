# App-Personas

![](https://user-images.githubusercontent.com/60897075/129660424-1c0660f9-658c-4c2f-a249-c48677795530.jpg)

Siga los pasos a continuación para correr la aplicación de forma local.

### Pre-Requisitos:

*   Instalar [docker.](https://www.docker.com/)
*   Instalar [Angular CLI.](https://angular.io/cli)
*   Instalar [npm.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1\. Descargue el repositorio mediante el comando:

```
git clone https://github.com/JulianaLeonGonzalez/App-Personas.git
```

2\. Ingrese al directorio docker del proyecto.

```
cd App-Personas/docker
```

3\. Ejecute el siguiente comando para contenerizar la base de datos Postgresql y añadir la tabla "Person" con los datos iniciales de prueba.

```
docker-compose up -d
```

4\. Ingrese al directorio API, donde se encuentra el backend de la aplicación.

```
cd ..
cd API 
```

5\. Corra el siguiente comando para descargar las dependencias.

```
npm install
```

5\. Corra el backend mediante el comando:

```
npm start
```

6\. Si desea correr las pruebas unitarias puede hacerlo en una nueva terminal, dentro del directorio API, mediante el siguiente comando, recuerde que para este test son necesarios los datos de prueba mencionados en el paso 3 de la presente guía.

```
npm test
```

7\. En una nueva terminal ingrese al directorio Front, donde se encuentra el frontend de la aplicación.

```
cd ..
cd Front
```

8\. Instale las dependencias.

```
npm install
```

9\. Corra el frontend mediante el comando:

```
ng serve
```

10\. En su navegador ingrese a la ruta http://localhost:4200/ una vez allí puede seleccionar la opción de ingresar una nueva persona o ver la lista de personas actual.

**Lista de personas:**

![](https://user-images.githubusercontent.com/60897075/129816750-084628a1-fa17-4bac-8eca-927ce1a3536f.png)

**Agregar persona:**

![](https://user-images.githubusercontent.com/60897075/129816774-0e2be670-9cd1-4467-a3de-29a57f2cf6b4.png)
