import express from 'express'
import promptGenerator from '../../utils/promptGenerator.js'
import openai from '../../config/openai.js'
import * as requestOpenAI from '../../controllers/openaiController.js'
const router = express.Router()

// @route  GET api/prompt
// @desc   Prompt ChatGPT to provide information on request
// @access Public
router.get('/', async (req, res) => {
        console.log(req.body)
        const {age, sexAtBirth, sexualPreference, subjectMatterExpertise, courseName, active} = req.query
        const prompt = promptGenerator(age, sexAtBirth, sexualPreference, subjectMatterExpertise, courseName, active)

        try {
            const response = await requestOpenAI.text(prompt)
            console.log(response.choices[0].message.content)
            const cleanedString = response.choices[0].message.content.replace(/\\n/g, '').replace(/\\/g, '');
            const jsonObject = JSON.parse(cleanedString); // Parse the cleaned string into a JSON object
            res.status(200).send(jsonObject)
        } catch(error) {
            console.log(error.message);
            res.status(500).send('Server Error');
        }
    }
)

export default router;