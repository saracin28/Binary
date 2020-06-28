package formula;

public class DecimalOperation {
    public int sum1(int m, int n){
        DecimalConvertor x =new DecimalConvertor();
        DecimalConvertor y = new DecimalConvertor();
        int s=x.convertor(m)+y.convertor(n);
        BinaryConvertor k=new BinaryConvertor();
        return k.convertor(s);

    }
}
