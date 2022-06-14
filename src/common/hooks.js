import React from "react";

export const useMediaQuery = (query) => {
    const getMatches = (query) => window.matchMedia(query).matches;
    const [matches, setMatches] = React.useState(getMatches(query));
    const handleChange = () => {
        setMatches(getMatches(query))
    }
    React.useEffect(() => {
        const matchMedia = window.matchMedia(query);
        handleChange();
        matchMedia.addEventListener("change", handleChange);

        return () => matchMedia.removeEventListener("change", handleChange);
    }, [query]);

    return matches;
}