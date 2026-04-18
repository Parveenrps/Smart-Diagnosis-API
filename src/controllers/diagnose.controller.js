import getDiagnosisFromAI, { getDiagnosisFromGemini }  from "../services/aiService.js";
import {Diagnose} from "../model/diagnose.model.js";

export const diagnose = async (req, res)=>{
    try {
        const { symptoms } = req.body;

    if(!symptoms){
        return res.status(400).json({ error: "Symptoms are required" });
    }

    // const aiDiagnosis  = await getDiagnosisFromAI(symptoms);
    const geminiDiagnosis = await getDiagnosisFromGemini(symptoms);

    const diagnose = new Diagnose({
        symptoms,
        diagnosis: geminiDiagnosis.conditions
    })

    await diagnose.save();
    
    res.status(200).json(diagnose);
    } catch (error) {
        return res.status(500).json({ message: "Error processing diagnosis", error: error.message });
    }
    
}

export const getDiagnoses = async (req, res)=>{
    try {
        const diagnoses = await Diagnose.find().sort({ createdAt: -1 });
        res.status(200).json(diagnoses);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching diagnoses", error: error.message });
    }
}   
