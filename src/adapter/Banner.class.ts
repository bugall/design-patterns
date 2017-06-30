class Banner {
    private string:String;
    constructor(string:String) {
        string = string;
    }

    public showWithParen():void {
        console.log("{" + this.string + "}");
    }

    public showWithAster():void {
        console.log("*" + this.string + "*");
    }
}

export default Banner;