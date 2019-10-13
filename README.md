# ARmy
## Table Code: AA

A murder mystery game made using ReactNative, ReactViro and firebase. The game is multiplayer, playable on your phone and uses AR. You may find a our website here: [link](https://army-ntu.firebaseapp.com/)

### Our Story
We initially wanted to make it a fun filled physically intensive mind boggling game. Something for a group of people to really bond over. So we embarked on an adventure to make an Augmented Reality App, not only were we planning on building an AR app but we were going to implement features like an accurate indoor positioning system using ping times and a triangulation law using routers. All the while thinking to ourselves, how hard can it possibly be, What could possibly go wrong. Oh but how wrong we were! We spent a good chunk at the beginning of the hackathon deriving equations to calculate position in a room but we soon realised that with level of precision we could get on the ping timings we could only accurate track location to a degree of a few hundred meters. This is when things began to seem hopeless. We began to panic and had another brainstorming session to come up with any ideas that could or might have been able to secure us a winning spot at the Hackathon. Ideas such as making a Learning app that takes words from a paragraph and makes it a joke, an AI critic for books and accurate calorie counter apps were discussed. Although we seemed to have solid alternatives, all of us, in our heart of hearts yearned to make our game come a reality. If not in the grand scale we envisioned at least in a manner that we would be able to implement and then use the knowledge we gain to later make the luscious app the we had initially envisioned.

### Solution

To make our app a reality, as any project, we started piling on the constraints until we found a final product that is feasible. First we reduced the scale of our app. Rather than allocating the entire room in which the users are present as the playing field, we defined a fixed grid. This reduced the variables we had to deal with considerably, next, having minimal experience working with hybrid frameworks such as React Native and Flutter, and also game engines such as Unity and Unreal we had to take a call. Which would be the best platform for us to be able to learn and implement an application in, in one night. All of us had some experience in developing with Javascript, so given our familiarity with the language we began our endeavour of creating a react native app. Now, we had somewhat figure that part out but then came the question, how to implement AR using react native. That is when we chanced upon React-Viro, a library precisely made for making AR and VR applications using react-native. This is when we found some semblance of reassurance that we could actually pull this off.A couple of us began working on the front end of things while the others worked on making a real time database using expressjs, and firebase.
We had finally figured out the AR part of things when we began to create some react native components such as buttons and tried implementing some routing and making a multi page application with login and sign up we ran into a major issue. All react native components rendered on the page created a sort of mask on the entire UI. Making a the UI quite unusable. This when we switched the interactive part of our app to a web page which was also connected to our server. Putting together the WebPage, the app and the server we made like a live updating grid to play our game which is described more in detail below.


## Using The app

Steps:
1. One player creates a game which generates a unique session ID representing a game room.
2. Remaining players join the game via the session ID
3. A physical real world object - paper with a logo is kept in an ideal physical location.
4. This real world object acts as an anchor for the AR grid's 3D location in the application. For eg. if the anchor (paper with logo) placed at centre of a round table where all the players are seated. The AR grid is placed on the anchor and the plane of the AR grid is exactly equal to the anchor's plane.
5. All the players are represented on the AR grid as dots on tiles signifying their location.
6. Each player sees every other player on the AR grid.
7. The game begins!!


### Game rules

1. Each game has one killer and remaining are victims.
2. The victims do not know which player is the killer.
3. The killer can murder a victim only if the victim is within 1 tile in every direction on the AR grid around the killer's location.
4. The aim of the victim is to figure out who the killer is by observing movement of each player.
5. If the killer murders all the victims, killer wins.
6. All the victims vote for who they think the killer might be. If the majority vote is correct, the killer loses.

---


## Setting up the app for development
### Prerequisites
To be able to access our application in its development version, you must download the Viro Media App available for both the PlayStore and AppStore.

### Setting up environment
The setup and run our app locally on your device, first you must clone this repository. Once you have done this, run the following commands in your terminal to change directories to the working directory.

```
cd ARmy
cd app
```

Once you have done so, you may install the necessary development packages using the command,

```npm install```

### Running the code for development
After following all the previous steps, finally launching the Application is pretty simple, just run the bash command,

```
npm start
```
You may access the app by going into the Viro Media app and connecting to the IP address of you local machine.
