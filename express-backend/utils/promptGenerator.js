import * as sentenceGenerators from './sentenceCreators.js'

const generatePrompt = (age, sexAtBirth, sexualPreference, subjectMatterExpertise, courseName, active) => {
    const doctorRole = sentenceGenerators.generateDoctorRole(subjectMatterExpertise)
    const patientDemo = sentenceGenerators.generatePatientDemographics(age, sexAtBirth, sexualPreference, active)
    const patientRequest= sentenceGenerators.generatePatientRequest(courseName)
    let courseInfo = ''
    if (subjectMatterExpertise == 'Pregnancy') {
        courseInfo = sentenceGenerators.generatePregnancyCourseInfo(courseName)
    } else if (subjectMatterExpertise == 'Conditions') { 
        courseInfo = sentenceGenerators.generateConditionCourseInfo(courseName)
    } else { // In this case, subjectMatterExpertise == 'Contraceptives'
        courseInfo = sentenceGenerators.generateContraceptiveCourseInfo(courseName)
    }

    const adhereTo = sentenceGenerators.generateAdhereTo(subjectMatterExpertise)
    return [doctorRole, patientDemo, patientRequest, courseInfo, adhereTo].join(' ')
}

export default generatePrompt