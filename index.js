
require('dotenv').config()
// const { backup, backups, initializeApp } = require('firestore-export-import')
// const serviceAccount = require('./serviceAccountKey.json')

const data = require('./data')
/*
// Initiate Firebase App
// appName is optional, you can omit it.
const appName = '[DEFAULT]'
initializeApp(serviceAccount, appName)

// Start exporting data from Firebase

*/ 

/*

backup('content').then((data) => {
    console.log(JSON.stringify(data))
})

*/

const firebase = require('firebase/app');
require("firebase/firestore");

firebase.initializeApp(
    {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId
    }
)

var db = firebase.firestore();

// to use this comment stuff above
function getFromDatabase() {
    backup('content').then((data) => {
        console.log(JSON.stringify(data))
    });
}

function uploadSectionToDatabase(collectionString, array) {
    array.forEach((obj) => {
        db.collection('content').doc('en_us').collection(collectionString).doc(obj.pageID).set(
            obj
        )
    });
}

function uploadAssessmentToDatabase(assessmentName,ExploreOrReview , array) {
    array.forEach((obj) => {
        db.collection('content').doc('en_us').collection('assessments').doc(assessmentName).collection(ExploreOrReview).add(
            obj
        )
    })
}

uploadSectionToDatabase('MitigatingLearningLossSection', data.MitigatingLearningLossSection);

// uploadSectionToDatabase('DistrictGuaranteesSection', data.DistrictGuaranteesSection);

// uploadSectionToDatabase('JourneySection', data.JourneySection);

//uploadSectionToDatabase('CTESelection', data.CTESection);

//uploadSectionToDatabase('StudentPerformanceSection', data.StudentPerformanceSection);
//uploadSectionToDatabase('WelcomePageSection', data.WelcomePageSection);


// NSGR 
// uploadAssessmentToDatabase('nsgr','explore',data.NSGRExplorePages);
// uploadAssessmentToDatabase('nsgr','review', data.NSGRReviewPages);


// NWEA 
// uploadAssessmentToDatabase('nwea','explore', data.NWEAExplorePages);
// uploadAssessmentToDatabase('nwea','review', data.NWEAReviewPages);

// Overview 
// uploadAssessmentToDatabase('overview','explore',data.OverviewExplorePages);
// uploadAssessmentToDatabase('overview', 'review', data.OverviewReviewPages);


// CAASPP
// uploadAssessmentToDatabase('sbac','explore',data.CAASPPExplorePages);
// uploadAssessmentToDatabase('sbac', 'review', data.CAASPPReviewPages);

// Discipline
// uploadAssessmentToDatabase('discipline','explore',data.DisciplineExplorePages);
// uploadAssessmentToDatabase('discipline', 'review', data.DisciplineReviewPages);
// Grade
// uploadAssessmentToDatabase('grades', 'explore', data.GradesExplorePages);
// uploadAssessmentToDatabase('grades', 'review', data.GradesReviewPages);