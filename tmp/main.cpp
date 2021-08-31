#define WASM_EXPORT __attribute__((visibility("default")))

#include <stdio.h>
#include <emscripten.h>
#include <emscripten/html5.h>
#include <string.h>
#include <emscripten/fetch.h>
#include <emscripten/val.h>

extern "C"
{

    WASM_EXPORT int fib(int n)
    {
        if (n == 0 || n == 1)
            return 1;
        else
            return fib(n - 1) + fib(n - 2);
    }

//will run immediately use for initialization
    WASM_EXPORT int main()
    {
        int res = fib(5);
        printf("fib(5) = %d\n", res);
        return 0;
    }
}