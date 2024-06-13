class TalkButton {
    renderElement: HTMLButtonElement;

    constructor() {
        this.renderElement = document.createElement('button');
        this.renderElement.classList.add('talk');
        this.renderElement.innerText = "Encar Talk";
        this.renderElement.onclick = () => {
            alert("엔카톡입니다");
        }
    }

    init() {
        document.body.appendChild(this.renderElement);
    }
}

export default TalkButton;