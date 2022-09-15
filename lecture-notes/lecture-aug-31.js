//download react developer tools on google chrome as an extension 
//to access the dashboard - right click - go down to inspect - and click it 
// shortcut = cmmand+option+i

//react is a javascript library
// react is a single page application meaning the page is never refreshed - components are swapped out  

//npx create-react-app react-intro(name-of-app)
// will add a .git file and make it a repo if it isnt already in one
//if it is in one then it will not create a repo

//index.js is the entry point for our application -- it will grab document.root
//document.root is the starting node in our DOM, which can be found in the index.html file in the public folder. WE CAN SEE THIS IN THE BROWSER INSPECT TOOL 
// the content is starting in the app.js file


//terminal command - npm node package manager - command that helps us to add packages that we will need 

// creating our first react app - in terminal go into the repository that you want to create your app in and type in 
// npx create-react-app NAME-OF-THE-APP
// when complete it will say happy hacking at the bottom and give us some terminal commands that may be useful
//npm start - starts the development server
//npm run build - bundles the app into static files for production
//npm test - starts the test runner
// npm run eject - removes this tool and copies build dependencies, configuration files, and scripts into the app directory. If you do this you cant go back 
//we suggest that you begin by typing cd react-intro then npm start
// if you cd into the folder and type " code . 
//it will open up our file in VSCode
// now type command + shift + p and in the search bar you should see SHELL COMMAND: INSTALL 'CODE' COMMAND IN PATH will allow you to use the code. command in your terminal
// npm start will start your app and you will see it open up in browser at localhost:3000 
//you will see a screen that says edit src/app.js and save to reload


// in our folder the readme file will give us some built in commands that could be useful
//package.json file keeps track of a couple of things. one being dependencies - dependencies are packages that are needed to run our file, if something on this list isnt installed our app wont run
//gitignore are files that we dont want to post to github. main one is node_modules -- always make sure that this one is not included because thres a command that people can run that will install them once the files are downloaded to their computer 


//src folder is where we will be the majority of the time [source folder]
// what are components? a function -- functional components 
//so inside out src folder we start with a file named app.js which is called a root component
// each functional component that we build returns a bit of HTML that we will see on the browser -- in this current app.js file thats what we currently see on the browser -- by changing this you can see that the browser page changes live time without having to refresh the page.


//go to index.js file 

// if we go to the chrome browser with our localhost:3000 open >> right click go to inspection tool >> go to element >> we see the same html (open div id root) with root id 


// creating a new component
// go to app.js file
// create components folder inside our src folder 
// create component.js file and go to that file

//component summary
// create component folder and file 
// inside the file we create an arrow function >> return html >> export it
// import component to app.js file
// render component inside app.js file

//you can think of our app as a tree of nodes - with children nodes.