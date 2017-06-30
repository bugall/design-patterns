import Print from './Print.interface'
import Banner from './Banner.class'

class PrintBanner extends Banner implements Print {
    constructor(string:String) {
        super(string);
    }
    public printWeak():void {
        this.showWithParen();
    }
    public printStrong():void {
        this.showWithAster();
    }
}

export default PrintBanner