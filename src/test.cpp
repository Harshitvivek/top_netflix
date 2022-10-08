#include <iostream>
#include <string>
using namespace std;
int getMinSets(string str, int y) {
   int cnt = 0;
   int num = 0;
   int l = str.length();
   int f = 0;
   for (int i = 0; i < l; ++i) {
      num = num * 10 + str[i] - 48;
      if (num <= y) {
         f = 1;
         continue;
      }
      if (f) {
         ++cnt;
      }
      num = str[i] - '0';
      f = 0;
      if (num <= y) {
         f = 1;
      } else {
         num = 0;
      }
   }
   if (f) {
      ++cnt;
   }
   return cnt;
}
int main() {
   string str = "1234";
   int y = 20;
   cout << "Minimum sets = " << getMinSets(str, y) << endl;
   return 0;
}