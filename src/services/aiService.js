import OpenAI from "openai";



const getDiagnosisFromAI = async (symptoms) => {
//     const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// })

//     const prompt = `
//         A patient has symptoms: ${symptoms}.
        
//     Suggest 2-3 possible conditions with:
//     - name
//     - probability (%)
//     - next_steps

//     Return ONLY valid JSON:
//     {
//         "conditions": [
//             {
//                 "name": "",
//                 "probability": "",
//                 "next_steps": ""
//             }
//         ]
//     }
//   `
  
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

export default getDiagnosisFromAI;