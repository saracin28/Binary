package formula;

public class DecimalConvertor {
    public int convertor(int n) {
        String g = Integer.toString(n);
        int f = 0;
        int x = g.length();
        x--;
        int k=1;
        for(int i = 0; i < x; i++){
            k=k*2;
        }
        for (int i = 0; i < g.length(); i++) {
            int y=Integer.parseInt(g.substring(i,i+1));
            f=f+y*k;
            k=k/2;
        }
        return f;
    }
}
