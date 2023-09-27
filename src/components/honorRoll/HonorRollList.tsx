import type { HonorRollStudent } from "./honorRoll";

const HonorRollCard = ({ student }: { student: HonorRollStudent }) => {
    return (
        <div className="border-2 shadow-lg p-4 flex flex-col justify-center text-center">
            <h3 className="font-bold text-xl p-2">{student.name}</h3>
            <ul>
                {student.achievements.map((achievement) => (
                    <li>{achievement}</li>
                ))}
            </ul>
            <p className="italic p-2">{student.currentLocation}</p>
        </div>
    );
};

const HonorRollList = ({ students }: { students: HonorRollStudent[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {students.map((student, idx) => (
                <HonorRollCard key={student.name + idx} student={student} />
            ))}
        </div>
    );
};

export default HonorRollList;
