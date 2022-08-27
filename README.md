# Blaze Meetups (React.js, Deployment on AWS)

ALL MEETUPS page displaying list of all available meetup locations. <br/>
<img width="960" alt="image" src="https://user-images.githubusercontent.com/96373227/185996035-98b04b32-eed7-44da-b708-76b30fd7ff1a.png">


FORM to add new meetups. <br/>
<img width="960" alt="image" src="https://user-images.githubusercontent.com/96373227/185996349-9e98d057-a9b1-42d6-9a78-e7e320721e0b.png">


MY FAVORITES page displays list of "favorite" meetup locations. <br/>
The navbar also displays a badge showing number of "favorite" meetup locations. <br/>
Meetups can be added or removed from favorites. <br/>
<img width="960" alt="image" src="https://user-images.githubusercontent.com/96373227/185996175-51a9a98f-34b4-49a1-8fec-01ae78b32d9d.png">

# Deployment

1. AWS EC2 server was set up.<br/>
2. SSH was used to connect local machine to EC2 cloud server.<br/>
3. Code was downloaded from GitHub to EC2 server.<br/>
4. Node NPM was installed on EC2 to enable it to run React.js application.<br/>
5. After building the React.js application, the contents of build folder were copied to nginx web server.<br/>
6. The React.js application was deployed on nginx using AWS EC2 service.<br/>

Screenshot: Deployed the React Application on Amazon Web Services (AWS) Elastic Compute Cloud (EC2) service<br/>
<img width="960" alt="image" src="https://user-images.githubusercontent.com/96373227/185997267-d593c532-d7fb-40bd-859e-f4f6134d8715.png">

Screenshot: Connection from PC (local) to AWS EC2 (cloud) using SSH<br/>
<img width="960" alt="image" src="https://user-images.githubusercontent.com/96373227/185998199-cf1b5332-c362-4266-9a81-6154526000e0.png">
