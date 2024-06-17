import Iframe from '@components/Iframe';
import Logo from "@/assets/typescript.svg";

class TalkButton {
	private element: HTMLButtonElement;
	private iframeElement: HTMLDivElement | undefined;
	private static readonly STYLES: Record<string, string> = {
		position: 'fixed',
		bottom: '30px',
		right: '30px',
		width: 'auto',
		padding: '0',
		margin: '0',
		border: '0px solid transparent',
		backgroundColor: 'transparent',
		cursor: 'pointer',
		zIndex: '10',
	};

	constructor() {
		this.element = document.createElement('button');
		const image = document.createElement("img")
		image.src = Logo;
		image.alt = "talk logo";
		image.style.borderRadius = "100px";
		this.element.appendChild(image);
		this.applyStyles();
		this.addEventListeners();
		this.iframeElement = undefined;
	}

	private applyStyles() {
		Object.assign(this.element.style, TalkButton.STYLES);
	}

	private addEventListeners() {
		this.element.addEventListener('click', this.handleClick);
	}

	private handleClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		if (!target) return;

		if (this.iframeElement) {
			if (target.classList.contains('show')) {
				target.classList.remove('show');
				this.iframeElement.style.visibility = 'hidden';
			} else {
				target.classList.add('show');
				this.iframeElement.style.visibility = 'visible';
			}
		}
	};

	public init() {
		const iframe = new Iframe();
		this.iframeElement = iframe.init();
		document.body.appendChild(this.element);
	}
}
export default TalkButton;
