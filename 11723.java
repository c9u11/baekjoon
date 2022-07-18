import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int m = Integer.parseInt(br.readLine());
		boolean [] arr = new boolean [21], brr = new boolean[21], crr = new boolean[21];
		for(int i=1;i<=20;i++)
			brr[i]=true;
		for(int i=0;i<m;i++) {
            String[] cmd = br.readLine().split(" ");
            String oper = cmd[0];
			if(oper.equals("all")) {
				arr=brr;
				continue;
			}
			else if(oper.equals("empty")) {
				arr=crr;
				continue;
			}
			int val=Integer.parseInt(cmd[1]);
			if(oper.equals("add"))
				arr[val]=true;
			else if(oper.equals("remove"))
				arr[val]=false;
			else if(oper.equals("check"))
				bw.write(arr[val]?"1\n":"0\n");
			else if(oper.equals("toggle"))
				arr[val]=!arr[val];
		}
		bw.close();
	}
}