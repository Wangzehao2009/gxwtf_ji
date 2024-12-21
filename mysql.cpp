#include <bits/stdc++.h>
#include <initializer_list>
using namespace std;
void Create_Database(const string &db)
{
    string q="CREATE DATABASE IF NOT EXISTS "+db+"; USE "+db+";";
    printf("DATABASE %s has already created.\n",db.c_str());
    system(q.c_str());
}
void Drop_Database(const string &db)
{
    string q="DROP DATABASE IF NOT EXISTS "+db+";";
    printf("DATABASE %s has already droped.\n",db.c_str());
}
void Create_table(const string &table,const initializer_list <string> column)
{
    string q="CREATE TABLE "+table+"(\n";
    for (string c:column) q+=c+",\n";
    q+=");";
    printf("Table %s has already created.\n",table.c_str());
}
void Insert(const string &table,const string &values)
{
    string q="INSERT INTO "+table+" VALUES "+values+";";
    printf("%s has already been inserted in table %s.\n",values.c_str(),table.c_str());
}
void Select_All(const string &table)
{
    string q="SELECT * FROM "+table+";";
    printf("all have already been selected in table %s\n.",table.c_str());
}
void Select_Column(const string &table,string &column)
{
    string q="SELECT "+column+" FROM "+table+";";
    printf("column %s has already been selected in table %s.\n",column.c_str(),table.c_str());
}
void Select_Where(const string &table,const string &condition)
{
    string q="SELECT * FROM "+table+" WHERE "+condition+";";
    printf("elements that satisfies the %s condition has been selected in table %s.\n",condition.c_str(),table.c_str());
}
void Select_Order(const string &table,const string &order,bool flag=0)
{
    string q="SELECT * FROM "+table+" ORDER BY "+order;
    if(flag) q+=" DESC";
    q+=";";
    printf("elements have already been ordered by %s in table %s.\n",order.c_str(),table.c_str());
}
void Select_limit(const string &table,const string &limit)
{
    string q="SELECT * FROM "+table+" LIMIT "+limit+";";
    printf("elements have already limitated in %s in table %s.\n",limit.c_str(),table.c_str());
}
void Delete(const string &table,const string &condition)
{
    string q="DELETE FROM "+table+" WHERE "+condition+";";
    printf("elements that satisfies the %s condition has been deleted in table %s.\n",condition.c_str(),table.c_str());
}
int main()
{
    string q;
    cin>>q;
    system("mysql");
    Create_Database(q);
    return 0;
}