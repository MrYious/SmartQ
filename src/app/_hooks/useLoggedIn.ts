import { useEffect, useState } from 'react';

export default function useLoggedIn() {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('auth');

        if (loggedInUser) {
            setIsLoggedIn(true);
            setIsStudent(false)
        } else {
            setIsLoggedIn(false);
            setIsStudent(true)
        }
    }, []);

    return {isLoggedIn, isStudent}
}
