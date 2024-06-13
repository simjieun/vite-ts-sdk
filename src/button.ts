class TalkButton {
    renderElement: HTMLButtonElement;

    constructor() {
        this.renderElement = document.createElement('button');
        this.renderElement.classList.add('talk');
        this.renderElement.innerText = "Talk";
        this.renderElement.onclick = () => {
            alert("톡입니다");
        }
    }

    init() {
        document.body.appendChild(this.renderElement);
    }
}

export default TalkButton;