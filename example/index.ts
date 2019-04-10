// Bad comment

// good comment

// no namespaces
namespace SampleBadNamespace { }

// no module
module SamplebadModule { }

// no empty interface
// bad name of interface
interface BadInterface { }

// good interface
// good name of interface
/** Good interface */
interface IGoodInterface {
  success: boolean;
}

class SampleClass {
  // bad type of variable
  public values: any;

  // private must be readonly
  private key: string = '';

  // no constructor after private method
  constructor() {
    this.values = {};

    this.bindedMethod = this.bindedMethod.bind(this);
  }

  public method(): object {
    const valid = {
      baz: 1,
      dog: 'bark',
      foo: 'bar',
    };

    const invalid = {
      foo: 'bar',
      baz: 1,
      dog: 'bark',
    };

    return { ...valid, ...invalid };
  }

  methodWithoutTypedef() {
    return false;
  }

  methodWithTypedef(): boolean {
    return true;
  }
}

// bad function
function foo(a, b) { }

// good function
function bar(a: number, b: number): number {
  return a + b;
}