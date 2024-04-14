import openai from '../config/openai.js'

export const text = async (prompt) => {
    console.log(`Prompt: ${prompt}`)
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-4",
    });
    
    console.log(`OpenAI Response: ${completion.choices[0]}`);
    return completion
}

export const image = async (prompt) => {
    console.log(`Prompt: ${prompt}`)
    const openaiResponse = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: prompt
            }
        ],
        model: "gpt-4",
    });
    
    console.log(`OpenAI Response: ${openaiResponse.choices[0]}`);
    return openaiResponse
}