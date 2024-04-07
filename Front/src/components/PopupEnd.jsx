import React, { useContext } from 'react'
import { LangContext } from "../context/langContext";

export const PopupEnd = ({ message, onClick, word, status  }) => {

    const { lang } = useContext(LangContext);

    let messageAffiche = "Error";
    if (message === 'win') {
        lang === 'fr-FR' ? messageAffiche = 'Vous étiez au bord de la défaite au jeu du pendu pendant le cours, mais à la dernière minute, vous avez décroché la réponse juste à temps pour sauver notre ami de lhumiliation publique !' : messageAffiche = 'You win GG'
    }
    if (message === 'loose') {
        lang === 'fr-FR' ? messageAffiche = 'Vous avez été pris par le professeur pendant votre partie de pendu, mais ne désespérez pas : avec un peu plus dingéniosité, vous pourrez éviter detre vu et gagner la prochaine fois !' : messageAffiche = 'You loose try again'
    }

    return (
        <div className="popupEnd">
            <p>{status}</p>
            <h2>{word}</h2>
            <h3>{messageAffiche}</h3>
            <button className="btn" onClick={onClick}>
                {
                    lang === 'fr-FR' ? 'Recommencer' : 'Restart'
                }
            </button>
        </div>
    )
}

export default PopupEnd;