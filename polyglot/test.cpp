#include <iostream>
#include <stack>

using namespace std;

int main()
{

    int X;
    int cnt = 0;
    stack<int> my_s;
    int temp;

    cin >> X;
    
    for(int i=0;i<=X;i++){
      while(X != 0)
      {
          if (X % 2 == 1)
              my_s.push(1);
          else
              my_s.push(0);
    
          X /= 2;
      }
      
      while(!(my_s.empty()))
      {
          cout << my_s.top();
          my_s.pop();
      }
    }

    return 0;
}