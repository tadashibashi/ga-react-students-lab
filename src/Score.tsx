import {IScore} from "./assets/data.ts";

export default function Score({score}: {score: IScore}) {

    return (
        <>
            <td>{new Date(score.date).toLocaleDateString()}</td>
            <td>{score.score}</td>
        </>
    )
}