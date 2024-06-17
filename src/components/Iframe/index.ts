class Iframe {
	private iframeDiv: HTMLDivElement;
	private static readonly STYLES: Record<string, string> = {
		position: 'fixed',
		bottom: '96px',
		right: '30px',
		width: '390px',
		minHeight: '200px',
		maxHeight: '690px',
		overflow: 'hidden',
		borderRadius: '30px',
		visibility: 'hidden',
	};
	// 주석을 달아보자
	constructor() {
		this.iframeDiv = document.createElement('div');
		this.applyStyles();

		const iframe = document.createElement('iframe');
		iframe.setAttribute('id', 'talk_iframe');
		iframe.src = 'https://m.encar.com';
		iframe.width = '100%';
		iframe.height = '100%';

		this.iframeDiv.appendChild(iframe);
	}

	private applyStyles() {
		Object.assign(this.iframeDiv.style, Iframe.STYLES);
	}

	public init() {
		document.body.appendChild(this.iframeDiv);
		return this.iframeDiv;
	}

	public show() {
		this.iframeDiv.style.visibility = 'visible';
	}

	public hide() {
		this.iframeDiv.style.visibility = 'hidden';
	}
}

export default Iframe;
