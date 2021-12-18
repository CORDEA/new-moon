function main() {
    const [body] = document.getElementsByTagName('body');
    const foreground = body.getElementsByClassName('new-moon-foreground');
    if (foreground.length > 0) {
        body.removeChild(foreground[0]);
        return;
    }

    const div = document.createElement('div');
    div.setAttribute('class', 'new-moon-foreground');
    div.setAttribute(
        'style',
        `
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        background: #0000004d;
        pointer-events: none;
        `
    );
    body.appendChild(div);
}

main();
