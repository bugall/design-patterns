import Print from './Print.interface'
import PrintBanner from './PrintBanner.class'
class Main {
    static main(args:String[]):void {
        Print p = new PrintBanner("Hello");
    }
}