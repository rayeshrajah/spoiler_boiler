# SpoilerBoiler

Spoiler Boiler is app where you can leave comments at specific timestamps and view statistics on a video.

## Tech-Stacks
#### Back-end:
* Rails
* PostgreSQL

#### Front-end:
* React
* SASS
* Bootstrap

#### Libraries
* React-Player
* React-Avatar
* FontAwesome
* TippyJS
* ChartJS

## Setup
Make sure to have ruby version 2.3.5, rails version 5.2.4.2 and postgres version 9.5.21.

Create a postgres database
```
1) sudo -u postgres createuser -s spoiler -P

2) sudo -u postgres psql

3) postgres=# \password spoiler

4) postgres=# \q

5) cd backend

6) echo 'export BACKEND_DATABASE_PASSWORD="PostgreSQL_Role_Password"' >> ~/.bashrc

7) source ~/.bashrc
```
Create .env file within the backend folder and put in this line

```
BACKEND_DATABASE_PASSWORD="spoiler"
```
To create the database
```
rails db:create
```

Once you 've created the database the output will look like: 
```
Created database 'backend_development'
Created database 'backend_test'
```

To run and create tables and seed files you can run the following: command:

```
rails db:migrate
```

Once the backend is created we can move on to the frontend setup. Open the client folder and run the following command to install the dependencies.

```
npm install 
```

After the dependencies are installed we can go to our back end folder to run the server on the backend. 

```
bin/rails s 
```

To run the client, go to the client folder and enter this command: 

```
npm start
```

Voila! you should have the app running and can use it for your need.

### Here are a few screenshots of the App:

The Apps Home page.

!["Home Page"](https://github.com/rayeshrajah/spoiler_boiler/blob/master/docs/images/homepage.png?raw=true)

Getting Video Results

!["Getting search results"](https://github.com/rayeshrajah/spoiler_boiler/blob/master/docs/images/search_results.png?raw=true)

Playing a video using [react-player](https://github.com/CookPete/react-player) 

Video source: [Farfalla](https://www.youtube.com/watch?v=cLa-kRQ6d8c)

!["Playing cat video"](https://github.com/rayeshrajah/spoiler_boiler/blob/master/docs/images/video_player.png?raw=true)

Seeing all the comments of the video.

!["Comment Feed"](https://github.com/rayeshrajah/spoiler_boiler/blob/master/docs/images/comment_feed.png?raw=true)

Comment Line Graph using [chartjs](https://www.chartjs.org/)

!["Comment Graph"](https://github.com/rayeshrajah/spoiler_boiler/blob/master/docs/images/comment_graph.png?raw=true)

Tags for videos

!["Tags for the video"](https://github.com/rayeshrajah/spoiler_boiler/blob/master/docs/images/tags.png?raw=true)

Adding a new comment and tag

!["Making a new comment and tag"](https://github.com/rayeshrajah/spoiler_boiler/blob/master/docs/images/add_new_comment.png?raw=true)


