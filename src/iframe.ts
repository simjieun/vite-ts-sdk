class IFrame {
	private iframeDiv: HTMLDivElement;

	constructor() {
		this.iframeDiv = document.createElement('div');
		this.iframeDiv.style.position = 'fixed';
		this.iframeDiv.style.bottom = '96px';
		this.iframeDiv.style.right = '30px';
		this.iframeDiv.style.width = '390px';
		this.iframeDiv.style.minHeight = '200px';
		this.iframeDiv.style.maxHeight = '690px';
		this.iframeDiv.style.overflow = 'hidden';
		this.iframeDiv.style.borderRadius = '30px';
		const iframe = document.createElement('iframe');
		iframe.setAttribute('id', 'talk_iframe');
		iframe.src = 'https://m.encar.com';
		iframe.width = '100%';
		iframe.height = '100%';
		this.iframeDiv.appendChild(iframe);
	}

	public create() {
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

export default IFrame;
