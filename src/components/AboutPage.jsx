import React, { useEffect } from 'react';

export default function AboutPage() {
    useEffect(() => {
        alert('Alert executed!');
    }, []); // Empty dependency array to run the effect once on mount

    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
}