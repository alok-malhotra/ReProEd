/**
 * generateDoctorRole - Creates initial doctor role sentence.
 * @param subjectMatterExpertise: One of the following:
    * Pregnancies
    * Contraceptives
    * Reproductive Illnesses
 * @return: Doctor role sentence with subjectMatterExpertise
*/
export const generateDoctorRole = (subjectMatterExpertise) => {
    return `You will respond as a medical doctor with extensive knowledge of ${subjectMatterExpertise}.`
}

/**
 * generateDoctorRole - Creates patient background sentence.
 * @param age: (String) Patient age, in years
 * @param sexAtBirth: (string) One of:
    * male
    * female
 * @param sexualPreference: (string) One of:
    * heterosexual
    * homosexual
    * bisexual
    * asexual
    * pansexual
 * @param active: (string) One of: 
    * yes
    * no
 * @return: Patient demographic sentence
*/
export const generatePatientDemographics = (age, sexAtBirth, sexualPreference, active) => {
    return `Your patient is a ${sexualPreference} ${age} year old ${sexAtBirth}, who ${active == 'yes' ? `is` : `is not`} sexually active.`
}

/**
 * generatePatientRequest - Creates patient request setence.
 * @param courseName: (string) Name of current course
 * @return: Patient request sentence
*/
export const generatePatientRequest = (courseName, subjectMatterExpertise) => {
    return `Your patient has come to you requesting information on ${courseName} as ${subjectMatterExpertise}.`
}

/**
 * generateContraceptiveCourseInfo - Creates patient request setence for contraceptive modules.
 * @param courseName: (string) Name of current course
 * @return: Patient request sentence and response format for contraceptive modules.
*/
export const generateContraceptiveCourseInfo = (courseName) => {
    return `Your task is to provide extensive detail on ${courseName}. The patient would most benefit from information on how it works, efficacy, cost, pros, and cons. Your response must be structured as a JSON object that adheres to the following structure: 
    {
       "name": '"${courseName}"',
       "how_it_works": "HOW IT WORKS INFO",
       "efficacy": "EFFICACY INFO",
       "cost":  "COST INFO",
       "pros":  ARRAY OF PROS,
       "cons":  ARRAY OF CONS,
    }`
}

/**
 * generateConditionsCourseInfo - Creates patient request setence for condition modules.
 * @param courseName: (string) Name of current course
 * @return: Patient request sentence and response format for condition modules
*/
export const generateConditionCourseInfo = (courseName) => {
    return `Your task is to provide extensive detail on ${courseName}. The patient would most benefit from information on prevalence of ${courseName} based on their demographics, preventative measures that can reduce risk of ${courseName}, symptoms, diagnoses, treatments, and when to see a doctor. Your response must be structured as a JSON object that adheres to the following structure: 
    {
        "name": '"${courseName}"',
        "prevalence": '"The prevalence of ${courseName} is INSERT PREVALENCE"',
        "preventative_measures": ARRAY OF PREVENTATIVE MEASURES,
        "symptoms":  ARRAY OF SYMPTOMS,
        "diagnoses":  ARRAY OF DIAGNOSES,
        "treatments":  ARRAY OF TREATMENTS,
        "when_to_see_doctor": "WHEN TO SEE DOCTOR INFO"
    }`
}

/**
 * generatePregnancyCourseInfo - Creates patient request setence for pregnancy modules.
 * @param courseName: (string) Name of current course
 * @return: Patient request sentence and response format for pregnancy modules.
*/
export const generatePregnancyCourseInfo = (courseName) => {
    return `Your task is to provide extensive detail on ${courseName}. The patient would most benefit from TRIMESTER-SPECIFIC information on what to look out for (bad), what is normal, recommended tests to get, good things that can be done for maternal health, and good things that can be done for the baby's health. Your response must be structured as a JSON object that adheres to the following structure: 
    {
        "name": '"${courseName}"',
        "what_to_look_out_for": ARRAY OF WHAT TO LOOK OUT FOR,
        "what_is_normal": ARRAY OF WHAT IS NORMAL,
        "testing_to_get":  ARRAY OF RECOMMENDED TESTS,
        "maternal_health":  ARRAY OF GOOD THINGS TO DO FOR MATERNAL HEALTH,
        "baby_health":  ARRAY OF GOOD THINGS TO DO FOR BABY'S HEALTH,
    }`
}

/**
 * generateAdhereTo - Creates best practices statement.
 * @param subjectMatterExpertise: One of the following:
    * Pregnancies
    * Contraceptives
    * Reproductive Illnesses
 * @return: Best practices statement.
*/
export const generateAdhereTo = (subjectMatterExpertise) => {
    return `Make sure to use specific and descriptive language that provides as much detail as possible. Consider the tone and style of your response, making sure it is appropriate to the patient's request and your role as their medical provider. Use your extensive knowledge of ${subjectMatterExpertise} to provide the patient with the best possible medical advice and treatment.`
}