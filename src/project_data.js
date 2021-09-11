const projects=[
    {
        image: "images/face_detect.png",
        title:"Face Mask Detection Application",
        content:"I developed a custom Convolutional Neural Network (CNN) using Keras to detect if individuals are wearing face masks.  I trained the CNN using a Kaggle dataset containing 25,000 images.  I then used the CNN in an OpenCV application to recognize if individuals are wearing face masks in real-time by capturing video from webcams and then utilizing the Haar Cascade classifier to recognize faces in the video captures and then applying the CNN to predict if individuals are wearing face masks.",
        link: "https://github.com/KhalidRajan/Face-Mask-Detection"
    },
    {
        image: "images/nlp_project.jpg",
        title:"Namara Named Entity Recognition and Resolution",
        content: "In a group of 4 students, we worked on a NLP project for ThinkData Works, a start-up based in Toronto.  The objective of the project was to develop a Named Entity Recognition (NER) and Entity Resolution technology that could be incorporated into ThinkData Works' marquee product, Namara.  We extracted 3000 different data values from the Namara API and we utilized this data to build a Random Forest model utilizing the Sci-kit Learn library in Python that recognizes different entities (person, place, organization).  We then calculated Levenshtein and Jaro distances and leveraged K-Means Clustering in Sci-kit Learn to resolve different representations of a common entity (i.e. Think Data Works, Think Data, TDW), and this forms the base for a future project that involves creating knowledge graphs.",
        link: "https://qmind.ca/wp-content/uploads/2020/05/QMIND-2019-2020-Project-Look-Book.pdf"
    },
    {

        image: "images/cv_website.png",
        title: "CV Website",
        content: "Utilizing React.js I created a web application to highlight my personal projects, skills, and experience and share my resume.  I utilized the Bootstrap framework to apply responsive styling to the web app.",
        link: "https://github.com/KhalidRajan/Portfolio-Website"
    },
    {
        image: "images/weather_app.png",
        title: "Weather Net X",
        content: "I developed an app to display current weather data in a specified city.  The app fetches data from the OpenWeather API and displays the data in a UI built with React.js.",
        link: "https://github.com/KhalidRajan/Weather-App"
    },
    /* {
        image: "images/wiki.png",
        title: "Wikipedia Page Summarizer",
        content: "I created a Python app to summarize the contents of Wikipedia pages.  The app utilizies the Requests and BeautifulSoup libraries to scrape content from the Wikipedia pages.  The app then uses the NLTK library to preprocess the scraped content, and implements a word frequency-based scoring system to extract the most important sentences which form the summary of the Wikipedia page content.",
        link: "https://github.com/KhalidRajan/Wikipedia-Page-Summarizer/tree/main"
    },*/
    {
        image: "images/simon_game.png",
        title: "Simon Game",
        content: "I created a web-based version of the Simon Game utilizing JavaSript and jQuery.  The Simon game is a memory-testing game that generates and displays a random sequence of lights to the user, and requires the user to repeat this exact sequence to proceed to the next level.  I utilized JavaScript to produce the random patterns and then jQuery to display the random patterns to the user, and verify that the user repeated the pattern identically.",
        link: "https://github.com/KhalidRajan/My-Simon-Game"
    }
]

export default projects;