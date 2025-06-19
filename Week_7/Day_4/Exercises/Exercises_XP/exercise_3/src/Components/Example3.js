import { useState, useEffect } from 'react';

const Example3 = (props) => {
    const [experiences, setExperiences] = useState([]);
    console.log(props);

    useEffect(() => {
        if (props.experiences.length > 0) {
            setExperiences(props.experiences);
            console.log(props.experiences);
        }
    }, [props.experiences]);

    return (
        experiences.map((experience, index) => (
            <div key={index}>
                <img src={experience.logo} />
                <div>
                    <a href={experience.url}>{experience.companyName}</a>
                </div>
                {experience.roles.map((role, roleIndex) => (
                    <div key={roleIndex}>
                        <h3>{role.title}</h3>
                        <p>{role.startDate} {role.location}</p>
                        <p>{role.description}</p>
                    </div>
                ))}
            </div >
        )));



}

export default Example3;