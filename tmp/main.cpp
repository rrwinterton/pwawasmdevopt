#define WASM_EXPORT __attribute__((visibility("default")))

#include <stdio.h>
#include <emscripten.h>
#include <emscripten/html5.h>
#include <string.h>
#include <emscripten/fetch.h>
#include <emscripten/val.h>

extern "C"
{
    WASM_EXPORT float calcSimpleInterest(float principal, float interestRate, int term)
    {
        printf("here");
    float interestPaid = principal*interestRate*term;
    printf("interestPaid %f\n", interestPaid);

    return interestPaid;
    }
}

extern "C"
{
    WASM_EXPORT int fib(int n)
    {
        int retVal;
        retVal = 1;
        if (n == 0 || n == 1)
            return retVal;
        else {
            retVal = fib(n - 1) + fib(n - 2);
        }
        printf("retVal %d\n", retVal);
        return retVal;
    }
}

//will run immediately use for initialization
extern "C"
{
    WASM_EXPORT int main()
    {
        return 0;
    }
}