import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";




const getDiagnosisFromAI = async (symptoms) => {
//     const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// })

  //   const prompt = `
  //       A patient has symptoms: ${symptoms}.
        
  //   Suggest 2-3 possible conditions with:
  //   - name
  //   - probability (%)
  //   - next_steps

  //   Return ONLY valid JSON:
  //   {
  //       "conditions": [
  //           {
  //               "name": "",
  //               "probability": "",
  //               "next_steps": ""
  //           }
  //       ]
  //   }
  // `
  
// console.log("KEY:", process.env.OPENAI_API_KEY);
//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [{role: "user", content: prompt}]
//   });

//   return JSON.parse(response.choices[0].message.content) ;

//not have access to openai api key, so returning dummy data for now
return {
    conditions: [
      {
        name: "Flu",
        probability: "75%",
        next_steps: "Rest and drink fluids"
      },
      {
        name: "Common Cold",
        probability: "60%",
        next_steps: "Take steam and stay warm"
      }
    ]
  };

}

export const getDiagnosisFromGemini = async (symptoms) =>{
    const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

      const prompt = `A patient has symptoms: ${symptoms}.
                        Suggest 2-3 possible conditions with:
                        - name
                        - probability (%)
                        - next_steps

                        Return ONLY valid JSON:
                        {
                            "conditions": [
                                {
                                    "name": "",
                                    "probability": "",
                                    "next_steps": ""
                                }
                            ]
                        }`

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt
    })

    // console.log("Gemini Response:", response.candidates[0].content.parts[0].text);
    console.log("Gemini Response (raw):", response.text);

    return JSON.parse(response.text);
}

export default getDiagnosisFromAI;