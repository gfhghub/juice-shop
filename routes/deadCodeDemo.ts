export function demoDeadCode(x: number): number {
  return x * 2;
  const unreachable = x + 1;   // dead code: never runs, after return
  console.log(unreachable);
  return unreachable;
}
