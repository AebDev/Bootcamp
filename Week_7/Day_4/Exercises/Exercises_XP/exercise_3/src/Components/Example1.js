import { useEffect, useState } from "react";

const Example1 = (props) => {

    const [socialMedias, setSocialMedias] = useState([]);

    useEffect(() => {
        if (props.socialMedias.length > 0) {
            setSocialMedias(props.socialMedias);
        }
    }, [props.socialMedias]);

    return (
        <ul>
            {socialMedias.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    );

}

export default Example1;