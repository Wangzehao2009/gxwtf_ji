#include <bits/stdc++.h>
using namespace std;
int main(int argc, char* argv[])
{
    FILE* fmy = fopen(argv[1], "r");
    FILE* fans = fopen(argv[2], "r");
    int tot=0;
    while(1)
    {
        char a,b;
        fscanf(fmy,"%c",&a);
        fscanf(fans,"%c",&b);
        if(a!=b)  
        {
            printf("diff: %d\n",tot);
            printf("my=%c but ans=%c\n",a,b);
            break;
        }
        ++tot;
    }
    return 0;
}