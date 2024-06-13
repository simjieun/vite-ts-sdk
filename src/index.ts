import TalkButton from "./button.ts";
import IFrame from './iframe.ts';

const talk = new TalkButton();
talk.init();

const talkIframe = new IFrame("www.naver.com", "10px","10px", "talk-frame");
talkIframe.create();