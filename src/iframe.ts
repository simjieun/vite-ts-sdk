class IFrame {
    constructor(private src: string, private width: string, private height: string, public id:string) {}

    public create(): HTMLIFrameElement {
        const iframe = document.createElement('iframe');
        iframe.id = this.id;
        iframe.src = this.src;
        iframe.width = this.width;
        iframe.height = this.height;
        iframe.style.border = 'none';

        document.body.appendChild(iframe);
        return iframe;
    }
}

export default IFrame;