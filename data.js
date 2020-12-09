/** 
 * PAGES SCHEMA FOR FUTURE REFERENCES 
 * 
 * {
 *  pageID : String this is used to create the document name based on this property to help us query later
 *  title: String 
 *  content: String | [Strings]
 *  rest can be unique properties.
 * }
 * 
 * query is now fb.(*lang).(placeinApp).(page)
 */

const CTESection = [
  {
    pageID: 'CTESelect',
    content: "What do you want to be when you grow up?",
    careers: [
      {
        keySkills: ["Mathematics", "Science", "Communication"],
        summary:
          "By working in education & child development, you have an amazing opportunity to help shape the lives of the kids you teach.",
        Title: "Education & Child Development",
      },
      {
        summary: "Don't worry, you can always come back and choose later.",
        Title: "I'm not sure",

      },
      {
        keySkills: ["Mathematics", "Science", "Communication"],
        Title: "Public Services & Transportation",
        summary:
          "Working in public services and transportation can be an extremely rewarding job. You become an integral part of your community's daily life.",

      },
      {
        summary:
          "People who work in hospitality and food service are responsible for providing comfort to people who otherwise might not be able to find it.",
        keySkills: ["Mathematics", "Science", "Communication"],
        Title: "Hospitality & Food Service",

      },
      {
        Title: "Agriculture",
        keySkills: ["Mathematics", "Science", "Communication"],
        summary:
          "Those with careers in agriculture have dedicated their lives to producing food for our country and the world. The San Joaquin Valley is a global hotspot for this noble profession.",
      },
      {
        keySkills: ["Mathematics", "Science", "Communication"],
        summary:
          "A doctor must be as knowledgeable as they are hardworking. Although their knowledge is critical, the ability to communicate with their patients is usually the true mark of medical success.",
        "Title ": "Health & Medicine",
      },
      {
        summary:
          "Engineers create just about everything you use. From your car, to your refrigerator, and yes even your school!",
        keySkills: ["Mathematics", "Science", "Communication"],
        Title: "Engineering & Architecture",
      },
      {
        keySkills: ["Mathematics", "Science", "Communication"],
        Title: "Building & Construction",
        summary:
          "Building and construction specialists create the building you see around you. They build bridges, homes, and even sky scrapers.",
      },
      {
        keySkills: ["Mathematics", "Science", "Communication"],
        "Title ": "Arts & Media",
        summary:
          "Entertainers for example, musicians, make music look easy, but playing complex music requires an in-depth knowledge of the math behind music theory, rhythm, and production. Communication is also crucial is also crucial for any good jam. Communication is also crucial for any good jam.",
      },
      {
        summary:
          "Information technology is a profession which allows you create apps, computers, and anything your heart can think of.",
        Title: "Information Technology",
        keySkills: ["Mathematics", "Science", "Communication"],
      },
      {
        keySkills: ["Mathematics", "Science", "Communication"],
        Title: "Marketing & Sales",
        summary:
          "Everything that gets created needs to be sold by someone and to someone! In sales and marketing, your primary goals is to find the correct product for the correct buyer.",
      },
    ],
  },
  {
    pageID: 'CTESelected',
    content:
      "Great choice! You've just taken your first step towards a career in ?. For the next step, we're going to review the resources available to you.",
  },
];

exports.CTESection = CTESection;

const StudentPerformanceSection = [
  {
    pageID: "StudentAnalysis",
    "content":["Let's take a moment to check your performance over time.","Here we go. We did some quick number crunching and identified ? showing possible learning loss.","Let's see the results."],
  }
]

exports.StudentPerformanceSection = StudentPerformanceSection;


const WelcomePageSection = [
  {
    pageID: "WelcomePageEntered",
    "content":{"text":"Hey there, I'm Hedgehog Henry! I will be walking you through this program so that you understand what all this academic stuff means. Let's begin!"}
  }
]

exports.WelcomePageSection = WelcomePageSection;
/*
 * ASSESSMENTS SCHEMA FOR FUTURE REFERENCES 
 * 
 * {
 *  type: String (used to render correct component)
 *  content: String | [Strings] this is the strings that get rendered in the app
 *  order: number this is used to make sure pages are rendered in order 
 *  rest can be unique properties.
 * }
 * 

*/

const NSGRExplorePages = [
  {
    "type":"MultiExplanation",
    "content":["Today, we’ll explore the NSGR which stands for Next Step Guided Reading Assessment","The NSGR helps teachers identify your opportunities for growth in reading.","It is broken down into four parts"],
    "order":0,
  },
  {
    "type":"StepByStepGuide",
    "title":"Reading Assessment Conference",
    "content":"This is a one-on-one engagement with a teacher. It helps teachers to give you personal direction on how to improve your reading and comprehension skills.",
    "order":4,
  },
  {
    "order":1,
    "title":"The Reading-Interest Survey",
    "type":"StepByStepGuide",
    "content":"This helps your teachers understand what types of books you like to read, and what sort of reading will interest you. This test also allows your teacher to see how you’re growing and changing as a student.",
  },
  {
    "title":"Word-Knowledge Inventory",
    "order":2,
    "type":"StepByStepGuide",
    "content":"This shows your teachers where you have built your foundation for reading and where are the best areas for you to grow.  It helps the teacher understand which types of books are going to be most approachable to you.",
  },
  {
    "order":3,
    "title":"Comprehension Assessment",
    "type":"StepByStepGuide",
    "content":"This assessment allows your teacher to discover how well you can comprehend the words you can read. This assessment, like the above, helps teachers to guide you to books which are going to be most helpful to you.",
  },
  {
    "order": 5,
    "title": "NSGR Nav",
    "type": "NavPage",
    "content": "Does the NSGR seems a little more clear now?",
    "videoUrl": "http://"
  }
]
exports.NSGRExplorePages = NSGRExplorePages;

const NSGRReviewPages = [
  {
    "type":"SlideShowChart",
    "content":["Let’s review how you did on the NSGR Assessment.","This year your NSGR level is ?.","Based on previous years’ progress, your NSGR reading goal is ?.", "Let's watch a video on how you can improve your performance", "To help you achieve your goals, try some level ? books such as: !"],
    "order":0,
  }
]
exports.NSGRReviewPages = NSGRReviewPages;

const NWEAExplorePages = [
  {
    "order":0,
    "type":"MultiExplanation",
    "content":["Now we will learn about what the NWEA measures","The NWEA stands for Northwest Evaluation Association", "This is the organization who runs the MAP assessment students take in the Fall, Winter, and Spring"],
  },
  {
    order:1,
    "type":"StepByStepGuide",
    "title" : "MAP: Measures of Academic Progress",
    "content": "This is an untimed, personalized assessment given in Reading, Languages, and Math subjects. The results are measured using the RIT Score. Results are usually available immediately following test completion. This means teachers can accurately track their students' growth throughout the school year."
  },
  {
    "order":2,
    "type": "NavPage",
    "content": "Do you feel like you have a good grasp on what NWEA is now?",
    "videoUrl": "http://"
  }
]
exports.NWEAExplorePages = NWEAExplorePages;

const NWEAReviewPages = [
  {
    "order":0,
    "type":"SlideShowChart",
    "content":["Let's review how you did on the NWEA.","This year ytour NWEA RIT score is ?.", "Based on previous years' progress your NWEA goal is ?"],
  },
]
exports.NWEAReviewPages = NWEAReviewPages;

const OverviewExplorePages = [
  {
    "order":0,
    "type":"SlideShowChart",
    "content":["The overview will show you how you’re doing over all. We’re going to walk through each category one by one to see how you’re doing.","Take a minute to review the tutorial on the left"],
  }
]
exports.OverviewExplorePages = OverviewExplorePages;

const OverviewReviewPages = [
  {
    "type":"MultiExplanation",
    "content":["Now that we’ve explored what the Overview measures,","let’s review how you did.","This year your Overview result is ?", "Based on previous years' progress your Overview goal is 87"],
    "order":0
  }
]
exports.OverviewReviewPages = OverviewReviewPages;

const CAASPPExplorePages = [
  {
    "order": 0,
    "type": "MultiExplanation",
    "content": ["Let's explore what the CAASPP test measures.", "CAASPP is the California Assessment of Student Performance and Progress.", "The purpose of these tests are to assess how well the students are learning and how well the material is being taught.", "CAASPP consists of two tests, the Smarter Balance Assessment and the California Science Tests."]
  }, 
  {
    "order": 1,
    "type":"StepByStepGuide",
    "title": "SBA: Smarter Balance Assessments",
    content:"These are yearly assessments given to see what students have learned usiong the Common Core stands for ELA and Math."
  },
  {
    order: 2,
    "type":"StepByStepGuide",
    "title": "CAST: California Science Test",
    "content": " This tests student knowledge of concepts in the life, earth, space, and physical sciences. This is for students in grades 5 and 8, and is taken once more in grade 10, 11, or 12."
  },
  {
    "order": 3,
    "type": "StepByStepGuide",
    "title": "ELPAC: English Language Proficiency Assessment for California",
    "content": "There are two types of assessments. The inital ELPAC is given to identify the students that are English Learners. The Summative ELPAC is given yearly to determine student's ELP levels. The tests are measured in four parts: listening, speaking, reading, and writing."
  },
  {
    "order": 4,
    "type": "NavPage",
    "content": "Do you feel like you understand what the State Assessments test measure?",
    "videoUrl" : "http://"
  }
]
exports.CAASPPExplorePages = CAASPPExplorePages;

const CAASPPReviewPages = [
  {
    "order":0,
    "type":"SlideShowChart",
    "content":["Let's review how you did on the CAASPP test", "This year your CAASPP scale score is ?", "Based on previous years' progress, your CAASPP goal is ?",],
  }
]

exports.CAASPPReviewPages = CAASPPReviewPages;