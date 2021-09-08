#define WASM_EXPORT __attribute__((visibility("default")))
//includes
#include <stdio.h>
#include <emscripten.h>
#include <emscripten/html5.h>
#include <string.h>
#include <emscripten/fetch.h>
#include <emscripten/val.h>

//calcSimpleInterest
extern "C"
{
    WASM_EXPORT float calcSimpleInterest(float principal, float interestRate, int term)
    {
        __builtin_wasm_trace_instruction(17);
        float interestPaid = principal * interestRate * term;
//        printf("interestPaid %f\n", interestPaid);
        return interestPaid;
    }
}

//runs immediately may use for initialization if desired
extern "C"
{
    WASM_EXPORT int main()
    {
        return 0;
    }
}
