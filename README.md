## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Bugs Identified](#bugs-identified)
6. [Evolution](#Evolution)
7. [Collaboration](#collaboration)
### General Info
*** 
My First **MERN** Project is a social network application instagram like. It is a **javascript** full-stack project.

Named "Les Artistes" cause handwriting and ink stain theme.

Responsive breakpoints : 320 / 480 / 640 / 720 / 1024 / 1280.

Status Project :
Responsive in progress.
### Technologies
***
![LogoN](https://img.icons8.com/color/48/000000/nodejs.png) ![LogoR](https://img.icons8.com/ultraviolet/48/000000/react--v1.png) ![LogoRx](https://img.icons8.com/color/48/000000/redux.png) ![LogoS](https://img.icons8.com/color/48/000000/sass.png) ![LogoM](https://img.icons8.com/color/48/000000/mongodb.png)

* [NodeJs](https://nodejs.org/en/docs/): Version 14.15.1 
* [Express](https://expressjs.com/en/api.html): Version 4.17.1
* [React](https://reactjs.org/docs/getting-started.html): Version 17.0.1
* [Redux](https://redux.js.org/): Version 7.2.2 
* [Sass](https://sass-lang.com/documentation): Version 4.14.2 
* [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_emea_france_search_brand_atlas_desktop&utm_term=mongodb%20docs&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=1718986507&gclid=CjwKCAjwy7CKBhBMEiwA0Eb7aoFpQwYAOXkoX539u_B6p5a2I61TkLcfoyDGKCeSbVIq2PBOjRhdBxoCkDQQAvD_BwE)


### Installation
***
```
npm install
```

* Server : 
``` 
npm start
```
* Client :
```
cd client
```
then
```
npm start
```
### Configuration
***
1. BACK-END

* First, put your cluster info inside 
```
/config/db.js
```
* Then create *.env file* inside 
```
/config/
```
    within the following data :

Your localhost port
```
PORT=5000
```
Your client url

```
CLIENT_URL=http://localhost:3000 
```
Your ID & password
 
```
DB_USER_PASS=jl:jordanelepart
```
Your random secret key
```
TOKEN_SECRET=4Xsl9Ve1mkQy8gP0Fsnx42becDyrl06g4nB2i 
```

2. FRONT-END

* Create a *.env file* within :

Your server url
```
REACT_APP_API_URL=http://localhost:5000/ 
```
### Bugs identified
***
Can't refresh profil page => I add many buttons to go back home. 

### Evolution
***
I want to add vocals and sound instead of image and video to make a social network based on music. I have some ideas...
### Collaboration
***
With **Dorine Giustina**, we work together on this about fifteen hours tutorial. Thanks to [JustFS](https://github.com/JustFS) we can provide a complete app. I hope god bless him.

You can freely use it. You can ask me to join us for futur features.

### FAQ
***
I am wide open to suggestions.



