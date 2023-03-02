import React from "react";

function CompilationErrorPage() {
    return (
        <>
            <div>
                <h1>Oops, something went wrong!</h1>
                <p>
                    There was an error during the compilation process. Please
                    try refreshing the page or contact our customer support team
                    for assistance.
                </p>
                <a onClick={() => window.location.reload(true)} href="/">Повернутися до головної</a>
            </div>
        </>
    );
}

export default CompilationErrorPage;
