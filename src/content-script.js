function main() {
    const [body] = document.getElementsByTagName('body');
    const div = document.createElement('div');
    div.setAttribute(
        'style',
        `
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        background: #0000004d;
        `
    );
    body.appendChild(div);
}

main();
