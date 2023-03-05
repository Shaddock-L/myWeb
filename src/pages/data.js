export const intro = [
  {
    id: 1,
    name: "Web development",
    type: "individual project",
    time: "Nov 2022 - Dec 2022",
    summary: "A simple shopping website",
    achievements: [
      "This project is done with the help of tutorials on Udemy. The Instructor is John Smilga.",
      "Use JavaScript and React to implement the Web development and deploy it on netlify.",
      "Implemented components: navbar, sidebar, routers between different pages, filters, sort functionality, cart, local storage, login functionality with APIs of Auth0, checkout functionality with APIs of Stripe.",
    ],
    link: "https://github.com/Shaddock-L/react-prac-comfy",
  },
  {
    id: 2,
    name: "COMP9900",
    type: "group project",
    time: "Sep 2022 - Nov 2022",
    summary: "Wait management system.",
    achievements: [
      "The wait management system is able to run in local server in same machine. There are 4 different urls, which are customer page, waiter page, kitchen page and manager page.",
      "Be responsible for the Backend, which was compiled with python, flask, and mySQL.",
      "Use Flask-SQLAlchemy to operate on the database, enable the users to directly add, delete, search, and modify the database on the web page through APIs.",
    ],
    link: "https://github.com/Shaddock-L/cs9900",
  },
  {
    id: 3,
    name: "COMP9517",
    time: "Jun 2022 - Jul 2022",
    type: "group project",
    summary:
      "Detect and track pedestrians from the videos with different angles, widths, and heights.",
    achievements: [
      "As a group leader, responsible for project planning, coding part, and division of labor.",
      " Use inter-frame difference method and YOLOv5 to detect the pedestrians in the video. By comparing the results, choosing YOLOv5 at last. Use DeepSORT to track the pedestrians.",
      " Draw the bounding box and corresponding trajectory for each pedestrian. Report the total count of pedestrians present in the current video frame. The project can analyze the behavior of pedestrians in the video over time (walking alone or walking in a group).",
    ],
    link: "https://github.com/Shaddock-L/COMP9517",
  },
  {
    id: 4,
    name: "COMP9417",
    type: "group project",
    time: "Mar 2022 - Apr 2022",
    summary: "Classify different types of cancer with CNN",
    achievements: [
      " As a group leader, responsible for project planning, division of labor and CNN coding part.",
      "Analyze the weights of RGB channels on different types of cancers. By comparing the distribution of RGB pixels, I attempted to use Gaussian Naive Bayes Classifier and SVM to classify the types. The accuracy of those two methods was not acceptable. Finally, I choose the CNN as the method",
      "Implement transforms to preprocess the images, which improves the generalization of the model. Use Alex Net to construct the CNN model. The final accuracy testing on the test data is 78%.",
    ],
    link: "https://github.com/Shaddock-L/comp9417",
  },
  {
    id: 5,
    name: "COMP9321",
    type: "individual project",
    time: "Mar 2022 - Apr 2022",
    summary: "RESTtful API development.",
    achievements: [
      "Develop a Flask-Restx data service that allows a client to read and store information about an actor or actress, and allow the consumers to access the data through a REST API.",
      "The data of this project are from TV Maze API, which provides a detailed list of TV shows, actors, and actresses. This project will send request to this URL and use the response to modify the data base.",
      "This API implement the POST, DELETE, PATCH, GET methods. Using the sqlite3 to implement the create, read, update, and delete functions.",
    ],
    link: "https://github.com/Shaddock-L/ActorApi",
  },
];