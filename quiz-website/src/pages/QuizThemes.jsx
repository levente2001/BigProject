import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';  

export default function QuizThemes(){
    const navigate = useNavigate();

    return (
        <div className="theme">
            <div onClick={() => navigate("/quiz")} className="kategoria">Informatika</div>
            <div onClick={() => navigate("/matekquiz")} className="kategoria">Matematika</div>
            <div onClick={() => navigate("/bioszquiz")} className="kategoria">Biológia</div>
            <div onClick={() => navigate("/toriquiz")} className="kategoria">Történelem</div>
            <div onClick={() => navigate("/kemiaquiz")} className="kategoria">Kémia</div>
        </div>
    )
}