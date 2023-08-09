import {IStudent} from "./assets/data.ts";
import Score from "./Score";

import "./Student.css";

export default function Student({student} : {student: IStudent}) {


    return (
        <article className="Student">
            <h2>{student.name}</h2>
            <p>{student.bio}</p>
            <h3>Grade Report</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                {
                    student.scores.map( (score, i) =>
                        <tr className="Score">
                            <Score score={score} key={student.name + ":score:" + i}/>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </article>
    )
}