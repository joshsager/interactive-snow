// TestProject.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <iostream>
#include <string> //loading the 'string' lib
#include <ctime>
#include <cstdlib> // rand() srand()



using namespace std;

int faces[5] = { 3, 2, 7, 5, 8 };//array with numbers
/* ARRAYS */
const int array_length = 5;

string eye[array_length] = {"imgs/eyes1.png","imgs/eyes2.png","imgs/eyes3.png","imgs/eyes4.png","imgs/eyes5.png"}; //array with values or paths
string hat[array_length] = {"imgs/hat1.png","imgs/hat2.png","imgs/hat3.png","imgs/hat4.png","imgs/hat5.png"};
string nose[array_length]={"imgs/nose1.png","imgs/nose2.png","imgs/nose3.png","imgs/nose4.png","imgs/nose5.png"};
string mouth[array_length]={"imgs/mouth1.png","imgs/mouth2.png","imgs/mouth3.png","imgs/mouth4.png","imgs/mouth5.png"};
string accessory[array_length]={"imgs/access1.png","imgs/access2.png","imgs/access3.png","imgs/access4.png","imgs/access5.png"};

/*int randomArray()
{
	int r= rand();
	return r;
}*/
void randomEyes()
{ 
	srand(time(0));
	for (int i=0; i<array_length;i++){
		int index = rand()%array_length;
		string temp = eye[i];
		eye[i] = eye[index];
		eye[index] = temp;
	}
	for (int i=0; i<array_length; i++){
			cout<<eye[i]<<endl;
	}

	
}
void randomHat()
{
	srand(time(0));
	for (int i=0; i<array_length;i++){
		int index = rand()%array_length;
		string temp = hat[i];
		hat[i] = hat[index];
		hat[index] = temp;
	}
	for (int i=0; i<array_length; i++){
			cout<<hat[i]<<endl;
	}
}
void randomNose()
{
	srand(time(0));
	for (int i=0; i<array_length;i++){
		int index = rand()%array_length;
		string temp = nose[i];
		nose[i] = nose[index];
		nose[index]=temp;
	}
	for (int i=0; i<array_length; i++){
		cout<<nose[i]<<endl;
	}
}
void randomMouth()
	{
	srand(time(0));
	for (int i=0; i<array_length;i++){
		int index = rand()%array_length;
		string temp = mouth[i];
		mouth[i] = mouth[index];
		mouth[index]=temp;
	}
	for (int i=0; i<array_length; i++){
		cout<<mouth[i]<<endl;
	}
}
void randomAccessory()
		{
	srand(time(0));
	for (int i=0; i<array_length;i++){
		int index = rand()%array_length;
		string temp = accessory[i];
		accessory[i] = accessory[index];
		accessory[index]=temp;
	}
	for (int i=0; i<array_length; i++){
		cout<<accessory[i]<<endl;
	}
}
int main()
{
	 randomEyes();
	 cout<<endl;
	randomHat();
	cout<<endl;
	randomNose();
	cout<<endl;
	randomMouth();
	cout<<endl;
	randomAccessory();
	system("PAUSE");
	//pauses window to see program
	return 0;
}

