import express from 'express'
import promptGenerator from '../../utils/promptGenerator.js'
import * as requestOpenAI from '../../controllers/openaiController.js'
const router = express.Router()

// @route  GET api/prompt
// @desc   Prompt ChatGPT to provide information on request
// @access Public
router.get('/', async (req, res) => {
        const {age, sexAtBirth, sexualPreference, subjectMatterExpertise, courseName, active} = req.body
        const prompt = promptGenerator(age, sexAtBirth, sexualPreference, subjectMatterExpertise, courseName, active)
        try {
            response = await requestOpenAI.text(prompt)
            res.send(response)
        } catch(error) {
            console.log(error.message);
            res.status(500).send('Server Error');
        }
    }
)

export default router; 