import java.util.Scanner;

class Main {
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
    System.out.print("0");
    
    for(int i=0;i<=N;i++){
      int num = i;
      String str = "";
      while(num != 0)
      {
        if (num % 2 == 1)
            str = str+"1";
        else
            str = str+"0";
        num /= 2;
      }
      
      StringBuffer sb = new StringBuffer(str);
      String reversedStr = sb.reverse().toString();
      System.out.print(reversedStr);
    }
		sc.close();
	}
}