#include <iostream>
#include <fstream>
#include <cstdlib>
#include <iomanip>
#include <unistd.h>

using namespace std;

void addUser();
void removeUser();
void getBill();

bool isEmpty(ifstream &file);

class user
{
private:
    int prevUserId, userUnits, userBillAmount;
    string userId, contactNo;
    char userName[100];

public:
    int setUserId()
    {
        int userCount = -1;
        int userIds[10];
        string userIdInFile;

        ifstream readUserIds("users/userIds.txt");
        ofstream appendUserIds("users/userIds.txt", ios_base::app);

        // check if usersId file is empty if yes then create first user with id 101
        if (isEmpty(readUserIds))
        {
            appendUserIds << "101" << endl;

            ofstream createUserFiles("users/101");

            return 101;
        }
        else
        {
            // Read all userids in userIds array;
            for (int i = 0; getline(readUserIds, userIdInFile); i++)
            {
                userIds[i] = stoi(userIdInFile);
                userCount++;
            }

            // create userFile with name [new userId]
            ofstream createUserFiles("users/" + to_string(userIds[++userCount] = ++userIds[userCount]));

            // append [new userId] in userIds file
            appendUserIds << userIds[userCount] << endl;

            return userIds[userCount];
        }
    }

    void setUser()
    {
        cout << "Enter your name: ";
        scanf(" %[^\n]s", userName);

        cout << "Enter your contact no. : ";
        cin >> contactNo;

        // set random user units
        userUnits = rand() % 150 + 1;

        // set userId dynamically
        userId = to_string(setUserId());

        // write user information to file
        ofstream writeUser("users/" + userId);

        writeUser << userName << endl
                  << contactNo << endl
                  << userUnits << endl
                  << userId;
    }

    void showData()
    {
        cout << "\tName: " << userName << endl;
        cout << "\tContact No.: " << contactNo << endl;
        cout << "\tUser Units: " << userUnits << endl;
        cout << "\tUser Id: " << userId << endl;
    }
};

int main()
{
    char main_menu_ch;

main_menu:
    system("clear");
    cout << endl
         << "\t 1. Add User" << endl
         << "\t 2. Get Bill" << endl
         << "\t 0. Exit" << endl;

    cout << endl
         << "Enter your choice [1-2] : ";
    cin >> main_menu_ch;

    switch (main_menu_ch)
    {
    case '1':
        addUser();
        break;
    case '2':
        getBill();
        break;
    case '0':
        exit(1);
        break;

    default:
        cout << "\nInvalid input!\n";

        sleep(2);

        goto main_menu;
        break;
    }

    return 0;
}

void addUser()
{
    system("clear");

    user u1;
    u1.setUser();
    system("clear");

    cout << "User Added: " << endl;
    u1.showData();
}

void getBill()
{
    system("clear");
    int rate_per_unit = 9;
    string userId;
    string userInfo[4], userInfoLine;

    cout << "Please enter your userId: ";
    cin >> userId;

    ifstream readUser("users/" + userId);

    // Read all userids in userIds array;
    for (int i = 0; getline(readUser, userInfoLine); i++)
    {
        userInfo[i] = userInfoLine;
    }

    int price = stoi(userInfo[2]) * 10;

    cout << "________________________________________________________________________________" << endl
         << endl;
    cout << "                                 MSCB-BILL                                     " << endl;
    cout << "________________________________________________________________________________" << endl
         << endl;
    cout << "||   Name: " << setw(15) << userInfo[0] << "   ||   "
         << "Contact No: " << setw(10) << userInfo[1] << "  ||   "
         << "User Id: " << setw(3) << userInfo[3] << "   ||" << endl;
    cout << "||                                                                            ||" << endl;
    cout << "||   Units: " << setw(3) << userInfo[2] << "                                                               ||" << endl;
    cout << "||   Rate/unit: " << setw(2) << rate_per_unit << "                                                            ||" << endl;
    cout << "||                                                                            ||" << endl;
    cout << "||                                                 Total: " << setw(2) << userInfo[2] << " x " << setw(2) << rate_per_unit << " = " << setw(6) << price << "   || " << endl;
    cout << "________________________________________________________________________________" << endl
         << endl;
}

bool isEmpty(ifstream &file)
{
    return file.peek() == ifstream::traits_type::eof();
}
