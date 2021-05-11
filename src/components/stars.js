import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa';

export default (props) => {

    const [startCount, setStartCount] = useState(0);

    useEffect(() => {

        var url = `https://api.github.com/repos/pluralsight/${props.repoName}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setStartCount(data.stargazers_count));

    }, [props]);

    return (
        <span className={props.className}> <FaStar/> {startCount} stars</span>        
    )

}