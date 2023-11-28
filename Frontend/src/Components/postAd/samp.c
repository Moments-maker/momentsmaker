#include <stdio.h>

double drugsLeft(int A, int B) {
    if (A == 0) {
        return 25.0;
    }

    double single = 25.0;
    //  Check Ao Pills Case
    if (A / 12 >= B) {
        single = 0;
        B += 1;
    }

    double remaining_amount = drugsLeft(A - 12, B - 1)/2;

    return single + remaining_amount;
}

int main() {
    int A;
    printf("Enter the number of hours: ");
    scanf("%d", &A);
    int B;
    printf("Enter the Pills : ");
    scanf("%d", &B);
    printf("antibiotic left in Tom's body after %d  hours is %f\n", A, drugsLeft(A, B));
    return 0;
}