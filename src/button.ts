import IFrame from './iframe';
class TalkButton {
	private renderElement: HTMLButtonElement;
	private iframeElement: HTMLDivElement | undefined;
	private static readonly BUTTON_STYLES: Record<string, string> = {
		position: 'fixed',
		bottom: '30px',
		right: '30px',
		zIndex: '10',
		width: '50px',
		height: '50px',
		borderRadius: '100px',
		backgroundColor: '#efefef',
	};

	constructor() {
		this.renderElement = document.createElement('button');
		this.applyStyles();
		this.renderElement.innerText = 'Talk';
		this.addEventListeners();
		this.iframeElement = undefined;
	}

	private applyStyles() {
		Object.assign(this.renderElement.style, TalkButton.BUTTON_STYLES);
	}

	private addEventListeners() {
		this.renderElement.addEventListener('click', this.handleClick);
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
		const iframe = new IFrame();
		this.iframeElement = iframe.create();
		document.body.appendChild(this.renderElement);
	}
}
export default TalkButton;
