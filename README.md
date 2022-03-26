# App-Personas

![](https://user-images.githubusercontent.com/60897075/160215874-57f2c923-f332-47ab-9825-0e1363b742ca.png)

Siga los pasos a continuación para correr la aplicación de forma local.

### Pre-Requisitos:

*   Instalar [docker.](https://www.docker.com/)
*   Instalar [Git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git)
*   Instalar [npm.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1\. Descargue el repositorio mediante el comando:

```
git clone https://github.com/JulianaLeonGonzalez/App-Personas.git
```

2\. Ingrese al directorio del proyecto.

```
cd App-Personas
```

3\. Ejecute el siguiente comando para contenerizar el back-end, el font-end y la base de datos Postgresql que componen la aplicación, además de añadir la tabla "Person" con los datos iniciales de prueba.

```
docker-compose up -d
```

4\. En su navegador ingrese a la ruta http://localhost:4200/ una vez allí puede seleccionar la opción de ingresar una nueva persona o ver la lista de personas actual.

#### Registrar una nueva persona:

![](https://user-images.githubusercontent.com/60897075/160215927-58125621-3cc8-4601-a0ca-56d1742b76c5.png)

#### Listar personas registradas:

![](https://user-images.githubusercontent.com/60897075/160215957-bbbeb473-c74c-465f-9d1b-b4842b2e984d.png)

### **Ejecución de pruebas unitarias**

1\. Ingrese al directorio API, donde se encuentra el back-end de la aplicación.

```
cd ..
cd API 
```

2\. Corra el siguiente comando para descargar las dependencias.

```
npm install
```

3\. Si desea correr las pruebas unitarias puede hacerlo en una nueva terminal, dentro del directorio API, mediante el siguiente comando, recuerde que para este test son necesarios los datos de prueba mencionados en el paso 3 de la presente guía.

```
npm test
```
