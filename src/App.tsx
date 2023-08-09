import { useState } from 'react'
import './App.css'
import data from "./assets/data.ts";
import Student from "./Student.tsx";


function App() {
    const [students, setStudents] = useState(data);

    return (
        <div className="App">
            <h1>Students</h1>
            <div className="students">
                {students.map((student, i) => <Student key={student.name + i} student={student}/>)}
            </div>

        </div>
    )
}

export default App
