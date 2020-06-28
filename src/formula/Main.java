package formula;

public class Main {
    public static void main(String[] args) {
        BinaryOperation x=new BinaryOperation();
        System.out.println(x.sum(198,20));
        System.out.println(x.minus(198,20));
        System.out.println(x.multiply(19,20));

        DecimalConvertor y=new DecimalConvertor();
        System.out.println(y.convertor(11001101));
        DecimalOperation k=new DecimalOperation();
        System.out.println(k.sum1(10001,101));
    }
}
