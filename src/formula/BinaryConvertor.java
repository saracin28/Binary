package formula;

public class BinaryConvertor {
    public int  convertor(int n) {
        String f = "";
        int x = 0;
        int c = 1;
        String g = "";
        int y=0;
        for (int i = 0; i < c; i++) {
            if (n > 0) {
                x = n % 2;
                f = f + x;
                n = n / 2;
                c++;
            }
        }
        for (int j = f.length() - 1; j >= 0; j--) {
            g = g + f.charAt(j);
        }
        y=Integer.parseInt(g);
        return y;
    }
}