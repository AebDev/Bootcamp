import { useState, useEffect } from 'react';

const Example2 = (props) => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        if (props.skills.length > 0) {
            setSkills(props.skills);
        }
    }, [props.skills]);

    return (
        skills.map((skill, index) => (
            <div key={index}>
                <h2>{skill.Area}</h2>
                <ul>
                    {skill.SkillSet.map((set, key) => (
                        <li key={key}>{set.Name}</li>
                    ))}
                </ul>
            </div>
        ))
    );
}

export default Example2;