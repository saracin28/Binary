package formula;

public class BinaryOperation {

    public int sum (int m,int n){
        BinaryConvertor x=new BinaryConvertor();
        m=m+n;
        return x.convertor(m);
    }
    public int minus (int m,int n){
        BinaryConvertor x=new BinaryConvertor();
        m=m-n;
        return x.convertor(m);
    }
    public int multiply (int m,int n){
        BinaryConvertor x=new BinaryConvertor();
        m=m*n;
        return x.convertor(m);
    }

}
