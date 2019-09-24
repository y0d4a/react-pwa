export default (content, preloadedState) => {

    return (
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta name="Description" content="Author: Danny">
                <meta name="theme-color" content="#317EFB"/>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link type="text/css" rel="shortcut icon" href="/images/anonymous.png" />
                <title>Anonymous</title>
                <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
                <link type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:500&display=swap" rel="stylesheet" />
                <link type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <link type="text/css" href="/css/app.css" rel="stylesheet">
            </head>
            <body>
                <div id="root">${content}</div>
                <noscript>This website requires JavaScript.</noscript>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                        /</g,
                        '\\u003c'
                    )}
                </script>
                <script type="text/javascript" src="/js/vendors~app.js"></script>
                <script src="/js/app.js"></script>
            </body>
        </html>
        `
    )
}

