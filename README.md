# BillBoard Checkina

This is simple BillBoard Hits Check App helping you to check the current top10 BillBoard Hit list, find lyrics for each song and latest news for each artist.

Created with [express-generator](https://expressjs.com/en/starter/generator.html) with Pug engine support.

<br>

## How to build and push this app image to Docker repository
- Build image:&nbsp; `sudo docker build -t billboard-checkina .`
- (Optional) Run to check:&nbsp; `docker run billboard-checkina`
- Check its name and id in list:&nbsp; `docker images`
- Login: &nbsp;`docker login`
- Docker tag: &nbsp;`docker tag <image_id> rodo82/billboard-checkina:lastest` 
- Push to Docker repo: &nbsp;`docker push rodo82/billboard-checkina`

<br>

## Pull and run (from different machine):
- Install Docker: &nbsp;`sudo curl -fsSL https://get.docker.com/ | sh`
- Login Docker if the project is private: &nbsp;`sudo docker login`
- Run above Docker image: &nbsp;`sudo docker run --name billboard-checkina -p 80:3000 -i -d -t rodo82/billboard-checkina` (note: 3000 is set in bin/www)
- The image should be running as a daemon background after the hash appears, navigate to the machine URL to use the app
    
<br>

## How to run on your local machine:
- Run &nbsp;`npm install`
- Run &nbsp;`npm start`
- Navigate to &nbsp;`localhost:3000` &nbsp;to explore the app

<br> 

## Pull and Run from Docker:
- `sudo docker run --name billboard-checkina -p 80:3000 -i -d -t rodo82/billboard-checkina`

<br>

---

A screenshot  
![Output](/public/images/screenshot.png)
