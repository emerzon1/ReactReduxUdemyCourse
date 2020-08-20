import { useEffect, useState } from 'react';
const Route = ({ path, children }) => {
    const [pathN, setPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setPath(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange)

        return () => {window.removeEventListener('popstate', onLocationChange)}
    }, [])
    return pathN === path ? children : null;
};

export default Route;
